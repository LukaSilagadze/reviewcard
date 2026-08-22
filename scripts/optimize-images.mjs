/**
 * Regenerates the web-ready images in public/assets from the masters in assets-src.
 *
 * The masters are full-resolution camera files (3024x4032) and are not committed —
 * keep them locally, or re-export them from the original shoot. Everything the site
 * actually serves is produced here.
 *
 *   npm run optimize:images
 */
import sharp from "sharp";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "assets-src");
const out = join(root, "public", "assets");

/**
 * `width` is the widest the image is ever painted, doubled for retina.
 * Product shots render at ~340px (1/3 grid) or ~520px (1/2 grid); 900px of
 * long edge covers both at 2x with room to spare.
 */
const jobs = [
  { in: "gw_card.jpg", out: "gw_card.webp", width: 750, quality: 78 },
  { in: "gw_stand.jpg", out: "gw_stand.webp", width: 750, quality: 78 },
  { in: "ig_card.jpg", out: "ig_card.webp", width: 750, quality: 78 },
  { in: "fb_card.jpg", out: "fb_card.webp", width: 750, quality: 78 },

  // Full-bleed hero carousel. Two widths per slide, swapped by media query
  // in global.css. The product shots are portrait masters (0.75 aspect)
  // force-cropped to the hero's much wider ~1.93 — a lot gets cut, but the
  // hero's dark overlay gradient sits on top of all of it anyway, so an
  // attention crop centering on the card reads fine as a moody backdrop
  // rather than needing to be a well-composed standalone photo.
  { in: "hero-product-v2.png", out: "hero-product-v2.webp", width: 1744, quality: 72 },
  { in: "hero-product-v2.png", out: "hero-product-v2-800.webp", width: 800, quality: 70 },
  ...["gw_card", "gw_stand", "ig_card", "fb_card"].flatMap((name) => [
    {
      in: `${name}.jpg`,
      out: `hero-${name}.webp`,
      width: 1744,
      height: 902,
      position: "attention",
      quality: 72,
    },
    {
      in: `${name}.jpg`,
      out: `hero-${name}-800.webp`,
      width: 800,
      height: 414,
      position: "attention",
      quality: 70,
    },
  ]),

  // How-it-works step cards — fixed-height tiles (~410px, ~390px on
  // tablet/mobile) in a 3-up (1-up on phone) grid, roughly 0.85 aspect.
  // A dark gradient + the step text sit on top of these, same treatment
  // as the hero photos.
  ...["step1", "step2", "step3"].map((name) => ({
    in: `${name}.jpg`,
    out: `${name}.webp`,
    width: 700,
    height: 824,
    position: "attention",
    quality: 78,
  })),

  // Painted at 43-72px in the page.
  { in: "icon.png", out: "icon.webp", width: 256, quality: 82 },
  // Favicon needs a raster format every browser accepts.
  { in: "icon.png", out: "icon.png", width: 128, quality: 90, format: "png" },

  // Header/footer wordmark, painted at 132-155px wide.
  { in: "logo_nobg_white.png", out: "logo_nobg_white.webp", width: 340, quality: 88 },

  // Customer gallery marquee — fixed 245x300 tile (190x235 on mobile), so
  // these are cropped to that aspect ratio at retina size rather than
  // shipping full camera resolution the browser would just crop anyway.
  //
  // Every shot in this set is composed the same way (card held or set down
  // in the lower part of the frame, shop signage above), and all 12 share
  // the same ~0.75 aspect ratio once rotated upright — against the tile's
  // 0.82 aspect that always crops off the top and keeps the full width, so
  // a bottom-anchored crop keeps the card in frame far more reliably than
  // content-aware auto-cropping did (which kept favoring bright signage
  // over the actual product).
  ...[
    "dekaroom",
    "dekaroomdesk",
    "fishingshop",
    "grossmann",
    "grossmannbg",
    "gtline",
    "macncheese",
    "meama",
    "pizzamedici",
    "tamashobanadesk",
    "tamshobana",
    "undergroundarena",
  ].map((name) => ({
    in: `customer-gallery/${name}.${name === "meama" ? "jpeg" : "jpg"}`,
    out: `customer-gallery/${name}.webp`,
    width: 490,
    height: 600,
    position: "south",
    quality: 76,
  })),

  // Partner logo marquee — round 110px tile (84px on mobile). Every source
  // logo is already near-square (each business supplied theirs as roughly
  // a social-profile-picture crop), so a plain centred cover crop doesn't
  // lose any of the mark, unlike the photo sets above.
  ...[
    ["astralfitness", "jpg"],
    ["burgerking", "webp"],
    ["carpology-logo", "png"],
    ["f1shopgeorgia", "jpg"],
    ["grossmann", "png"],
    ["gtline", "jpg"],
    ["kartinglilo", "jpg"],
    ["logo-png", "webp"],
    ["luxink", "jpg"],
    ["meamacollect", "png"],
    ["pizzamedici", "png"],
    ["pkdental", "png"],
    ["techauto", "jpg"],
    ["undergroundarena", "jpg"],
    ["zooarea", "jpg"],
  ].map(([name, ext]) => ({
    in: `partner_logos/${name}.${ext}`,
    out: `partner_logos/${name}.webp`,
    width: 220,
    height: 220,
    quality: 82,
  })),
];

const kb = (n) => (n / 1024).toFixed(1) + " KB";

await mkdir(out, { recursive: true });

let before = 0;
let after = 0;

for (const job of jobs) {
  const from = join(src, job.in);
  const to = join(out, job.out);
  await mkdir(dirname(to), { recursive: true });

  // Read first: one job rewrites icon.png in place.
  const input = await readFile(from);

  // Phone photos routinely carry an EXIF orientation tag rather than
  // storing pixels upright; sharp ignores it unless told to. `.rotate()`
  // with no argument reads that tag and applies it (a no-op for images
  // that don't have one), so this must come before resize/crop.
  const oriented = sharp(input).rotate();

  const pipeline = job.height
    ? // Fixed width AND height: crop to that box (e.g. a display tile)
      // instead of just constraining the long edge.
      oriented.resize({
        width: job.width,
        height: job.height,
        fit: "cover",
        position: job.position ?? "centre",
      })
    : oriented.resize({
        width: job.width,
        withoutEnlargement: true,
      });

  const encoded =
    job.format === "png"
      ? await pipeline.png({ quality: job.quality, compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline.webp({ quality: job.quality, effort: 6 }).toBuffer();

  await writeFile(to, encoded);

  const originalSize = (await stat(from)).size;
  before += originalSize;
  after += encoded.length;

  const saved = (100 - (encoded.length / originalSize) * 100).toFixed(0);
  console.log(`${job.out.padEnd(26)} ${kb(originalSize).padStart(10)} -> ${kb(encoded.length).padStart(9)}  (-${saved}%)`);
}

console.log(`\ntotal ${kb(before)} -> ${kb(after)}  (-${(100 - (after / before) * 100).toFixed(1)}%)`);

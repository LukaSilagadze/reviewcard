# Branded customer page: launch dependency

The marketing website now includes the optional one-time ₾35 upgrade, an isolated
interactive demo, a destination comparison, and managed-setup FAQs. The charge is
once per customer and covers custom pages across current and future orders.

## Required before publishing

The live destination application (`reviewcard.html?biz=…`), its Supabase backend,
and its email worker are not present in this repository. Its behavior cannot be
changed or verified here. Before publishing this marketing update, update and
verify the destination application:

- Show equally prominent “Leave a Google review” and “Send private feedback”
  choices on the initial screen. Remove sentiment-based routing.
- Open the configured Google destination from the Google choice, with no
  prerequisite rating. Keep the Google alternative on the private feedback form.
- Preserve anonymous optional-text feedback saving, business association, queued
  email notifications, retry behavior, optional social profiles and Wi-Fi details.
- Verify Georgian, English, and Russian and device-based light/dark appearance.

The marketing demo simulates Google handoff, feedback confirmation, and social
links. It never writes feedback, sends email, or opens live business profiles.
Its only write outside React state is copying its fictional Wi-Fi password at the
visitor's request. Demo feedback is discarded on submission/reset or unmount.

## Website verification

Run `npm run build`. In the browser, check both site languages and all three demo
languages; exercise Google, blank and written feedback, the Google alternative,
all social buttons, Wi-Fi copy/fallback, Back, Escape, and Reset. Check narrow and
desktop layouts, keyboard focus, and custom versus standard order modal headings.
The custom WhatsApp link includes a prefilled upgrade request; no message is sent
automatically. Existing Facebook and Instagram ordering links are retained.

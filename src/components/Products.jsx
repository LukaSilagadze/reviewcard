import { products } from "../data/products";

/** Shown in place of a photo for products that don't have one yet. */
function CatalogMockup({ product }) {
  return (
    <div className="catalog-mockups">
      <span className="mock mock-back">
        <b>{product.mark}</b>
        <small>QR</small>
      </span>
      <span className="mock mock-front">
        <small>tap to connect</small>
        <b>{product.mark}</b>
        <i>{product.caption}</i>
      </span>
    </div>
  );
}

export function Products({ t }) {
  return (
    <section id="products" className="section soft">
      <div className="container">
        <div className="section-head">
          <h2>{t.products}</h2>
          <p>{t.productsSub}</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className={`p-card p-${product.id}`} key={product.id}>
              <div className="p-visual">
                {product.image ? (
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    width="750"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <CatalogMockup product={product} />
                )}
              </div>

              <div className="p-body">
                <h3>{product.name}</h3>
                <p>{t.productDescriptions[product.id]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

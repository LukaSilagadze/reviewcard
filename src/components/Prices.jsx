import { products } from "../data/products";

/**
 * Every quantity tier for every priced product, side by side for comparison.
 * A product with no `pricing` (see products.js) just doesn't get a row here —
 * same "coming soon" gap the product card falls back to.
 */
export function Prices({ t }) {
  const priced = products.filter((p) => p.pricing);
  if (!priced.length) return null;

  const tierLabels = priced[0].pricing.map((tier) => tier.qty);

  return (
    <section id="prices" className="section prices">
      <div className="container">
        <div className="section-head centered">
          <h2>{t.pricesTitle}</h2>
          <p>{t.pricesSub}</p>
        </div>

        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th>{t.pricesProduct}</th>
                {tierLabels.map((qty) => (
                  <th key={qty}>
                    {qty} {t.pricesUnit}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {priced.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{t.productNames[product.id]}</th>
                  {product.pricing.map((tier) => (
                    <td key={tier.qty}>
                      {tier.price} ₾ <small>{t.pricesEach}</small>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="prices-note">{t.pricesNote}</p>
      </div>
    </section>
  );
}

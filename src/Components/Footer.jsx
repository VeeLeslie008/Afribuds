import { footerColumns, footerSocials, footerBrand } from '../Data/Data';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ---------- Decorative scenery image ---------- */}
      <div className="footer__scenery" aria-hidden="true"></div>

      {/* ---------- Main footer ---------- */}
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__top">
            {/* ---------- Link columns ---------- */}
            <div className="footer__columns">
              {footerColumns.map(function (column) {
                return (
                  <div key={column.id} className="footer__column">
                    <h4 className="footer__column-title">{column.title}</h4>

                    <ul className="footer__column-list">
                      {column.links.map(function (link) {
                        return (
                          <li key={link.label} className="footer__column-item">
                            <a href={link.href} className="footer__column-link">
                              {link.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* ---------- Brand block ---------- */}
            <div className="footer__brand">
              <a href="/" className="footer__brand-logo">
                {footerBrand.name}
              </a>

              <p className="footer__brand-tagline">{footerBrand.tagline}</p>

              <ul className="footer__brand-info">
                <li>
                  <span>{footerBrand.address}</span>
                  <i
                    className="fa-solid fa-location-dot footer__brand-icon"
                    aria-hidden="true"
                  ></i>
                </li>
                <li>
                  <a href={`tel:${footerBrand.phone.replace(/\s|\(|\)/g, '')}`}>
                    {footerBrand.phone}
                  </a>
                  <i
                    className="fa-solid fa-phone footer__brand-icon"
                    aria-hidden="true"
                  ></i>
                </li>
                <li>
                  <a href={`mailto:${footerBrand.email}`}>
                    {footerBrand.email}
                  </a>
                  <i
                    className="fa-solid fa-envelope footer__brand-icon"
                    aria-hidden="true"
                  ></i>
                </li>
              </ul>

              <div className="footer__socials">
                {footerSocials.map(function (social) {
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      className="footer__social"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="footer__bottom">
        <div className="footer__container footer__container--bottom">
          <p className="footer__copy">
            © {year} {footerBrand.name}. All rights reserved.
          </p>

          <ul className="footer__bottom-links">
            <li>
              <a href="/terms">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
          </ul>

          <div className="footer__payments">
            <i className="fa-brands fa-cc-visa" aria-hidden="true"></i>
            <i className="fa-brands fa-cc-mastercard" aria-hidden="true"></i>
            <i className="fa-brands fa-cc-paypal" aria-hidden="true"></i>
            <i className="fa-brands fa-cc-stripe" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
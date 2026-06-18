import { BRAND_SHIELD } from '../themes'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#top" aria-label="Property Wallet home">
            <img className="brand__shield" src={BRAND_SHIELD} alt="" aria-hidden="true" />
            <span className="brand__name">Property Wallet</span>
          </a>
          <p className="footer__tag">Your legacy secured digitally.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#top">Contact</a>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms</a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Property Wallet. All rights reserved.</span>
        <span>Made for families, designed for generations.</span>
      </div>
    </footer>
  )
}

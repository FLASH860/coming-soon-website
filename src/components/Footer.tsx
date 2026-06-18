export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#top" aria-label="Property Wallet home">
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M3 9.5 12 4l9 5.5M5 11v7.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="14.5" y="12.5" width="5.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <span className="brand__name">Property Wallet</span>
          </a>
          <p className="footer__tag">Your legacy secured digitally.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#waitlist">Contact</a>
          <a href="#waitlist">Privacy Policy</a>
          <a href="#waitlist">Terms</a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Property Wallet. All rights reserved.</span>
        <span>Made for families, designed for generations.</span>
      </div>
    </footer>
  )
}

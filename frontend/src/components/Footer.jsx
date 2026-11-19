// Page footer: unofficial-demo note, official GST portal links and the author
export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-note">
          <strong>GST Sutra</strong> is an unofficial demo for learning only. It
          is not affiliated with the Government of India, CBIC, or the GST
          Portal.
        </p>
        <p className="footer-links">
          <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
            GST Portal
          </a>
          {' · '}
          <a href="https://cbic-gst.gov.in/" target="_blank" rel="noopener noreferrer">
            CBIC
          </a>
          {' · '}
          <a href="https://www.smitroy.com" target="_blank" rel="noopener noreferrer">
            Smit Roy
          </a>
        </p>
      </div>
    </footer>
  );
}

interface FooterProps {
  showNav?: boolean;
  copyrightOnly?: boolean;
}

const Footer = (_props: FooterProps = {}) => {
  return (
    <footer>
      <div className="py-4" style={{ backgroundColor: '#121212' }}>
        <p className="font-display text-sm text-center text-muted-foreground">
          © 2025 Zahin Syahiran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
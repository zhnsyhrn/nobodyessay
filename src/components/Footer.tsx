import { useTranslation } from "react-i18next";

interface FooterProps {
  showNav?: boolean;
  copyrightOnly?: boolean;
}

const Footer = (_props: FooterProps = {}) => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="py-4" style={{ backgroundColor: '#121212' }}>
        <p className="font-display text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Zahin Syahiran. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
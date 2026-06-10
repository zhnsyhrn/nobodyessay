import { useTranslation } from "react-i18next";

interface FooterProps {
  showNav?: boolean;
  copyrightOnly?: boolean;
}

const Footer = (_props: FooterProps = {}) => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="py-4 bg-[#121212] dark:bg-background transition-colors">
        <p className="font-display text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Zahin Syahiran. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
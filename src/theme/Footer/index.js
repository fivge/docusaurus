import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css';

export default function FooterWrapper(props) {
  const { siteConfig, siteMetadata } = useDocusaurusContext();
  console.log('props', props, siteConfig, siteMetadata);

  return (
    <>
      <div className="theme-footer">{siteConfig.themeConfig.footer.copyright}</div>
    </>
  );
}

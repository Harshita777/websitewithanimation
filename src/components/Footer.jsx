import image from "../../public/Sectiopn.png";
import "../footer.css";
const Footer = () => {
  return (
    <div>
      <div className="mt-24">
        <img src={image} alt="" />
      </div>
      <div className="footer">
        <div className="footer flex justify-between container mx-auto pt-20 max-w-5xl">
          <div>
            <h1 className="header">PRODUCTS</h1>
            <ul className="listing list-none">
              <li>Use Cases</li>
              <li>For Business</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h1 className="header">DOWNLOADS</h1>
            <ul className="listing list-none">
              <li>Desktop App</li>
              <li>Chrome Extension</li>
              <li>Safari Extension</li>
              <li>iOS App</li>
            </ul>
          </div>
          <div>
            <h1 className="header">RESOURCES</h1>
            <ul className="list-none listing">
              <li>Blog</li>
              <li>Help & Support</li>
              <li>Community</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h1 className="header">COMPANY</h1>
            <ul className="list-none listing">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <div
          className="flex footer-end justify-between container mx-auto max-w-5xl mt-24
      pb-20"
        >
          <div className="flex  ">
            <div className="pr-5">
              <h6>Privacy Policy</h6>
            </div>
            <div>
              <h6>Terms of Service</h6>
            </div>
          </div>
          <div>
            <h6>©️ 2024, Designed by k&a</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import {
  facebookIcon,
  twitterIcon,
  linkedinIcon,
  Logo,
} from "../../assets/Images";
import { ButtonWithIcon } from "../Common/CustomButton";

const Footer = () => {
  return (
    <footer className="w-full bg-main text-white px-[32px] 2xl:px-[220px]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b-[0.5px] border-[#2E4E73] pb-12 text-center md:text-start">
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Whitepace Logo" className="mb-4" />
          <p className="text-lg max-w-[240px]">
            Whitepace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        {/* Products */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="text-md space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Stories
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="text-md space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guides & Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="text-md space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Media Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[28px] font-semibold mb-4">Try It Today</h3>
          <p className="text-md mb-6">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <ButtonWithIcon text="Start Today" icon={ArrowForwardIcon} />
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center py-8">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 text-md items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <LanguageRoundedIcon style={{ height: "20px", width: "20px" }} />
            <select className="bg-transparent text-white p-2 rounded">
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <a href="#" className="hover:underline">
            Terms & Privacy
          </a>
          <a href="#" className="hover:underline">
            Security
          </a>
          <a href="#" className="hover:underline">
            Status
          </a>
          <span>©2021 Whitepace LLC</span>
        </div>

        <div className="flex space-x-6 items-center mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-full h-auto"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" className="w-full h-auto" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-full h-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

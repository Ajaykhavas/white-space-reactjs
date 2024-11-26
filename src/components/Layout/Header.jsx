import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { HamburgerIcon, Logo } from "../../assets/Images";
import { ButtonWithIcon } from "../Common/CustomButton";

const menus = ["Products", "Solutions", "Resources", "Pricing"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-[32px] 2xl:px-[220px] max-w-[1920px] w-full bg-main text-white">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="object-contain" />
        </div>

        <div className="flex gap-16">
          <nav className="hidden lg:flex space-x-8 items-center">
            {menus.map((menu, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 gap-1 cursor-pointer"
              >
                <span className="text-lg font-medium">{menu}</span>
                <KeyboardArrowDownRoundedIcon />
              </div>
            ))}
          </nav>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <img src={HamburgerIcon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden lg:flex space-x-4">
            <button className="bg-[#FFE492] px-10 py-4 text-lg font-medium rounded text-main transition">
              Login
            </button>
            <ButtonWithIcon text="Try Whitepace free" icon={ArrowForwardIcon} />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-main text-white p-4 flex flex-col items-center space-y-4">
          {menus.map((menu, index) => (
            <div key={index} className="text-sm font-medium">
              {menu}
            </div>
          ))}
          <div className="flex space-x-4 mt-4">
            <button className="bg-transparent border border-white px-4 py-2 text-sm font-medium rounded hover:bg-white hover:text-gray-800 transition">
              Login
            </button>
            <ButtonWithIcon text="Try Whitepace free" icon={ArrowForwardIcon} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { BGImage, HeroImage } from "../../assets/Images";
import { ButtonWithIcon } from "../Common/CustomButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  return (
    <div
      className="w-full bg-main py-28 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${BGImage})`,
      }}
    >
      <div className="max-w-[1920px] mx-auto px-[32px] 2xl:px-[220px] flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md text-white space-y-6 mb-8 md:mb-0 text-center md:text-start flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-[64px] font-bold leading-tight md:min-w-[630px]">
            Get More Done with Whitepace
          </h1>
          <p className="md:text-lg text-base md:min-w-[690px]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <ButtonWithIcon text="Try Whitepace free" icon={ArrowForwardIcon} />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src={HeroImage} alt="Hero Element" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

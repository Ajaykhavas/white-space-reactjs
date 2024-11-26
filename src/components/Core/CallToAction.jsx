import { androidIcon, appleIcon, windowsIcon } from "../../assets/Images";

const CallToAction = () => {
  return (
    <div className="bg-main py-36 px-[32px] 2xl:px-[220px] flex flex-col items-center justify-center text-center text-white">
      <h1 className="2xl:text-[72px] md:text-[56px] text-[40px] font-bold mb-6 leading-[40px] md:leading-[90px]">
        Try Whitepace <br /> today
      </h1>

      <div>
        <p className="text-[18px] md:text-[24px] font-normal">Get started for free.</p>
        <p className="text-[18px] md:text-[24px] font-normal">Add your whole team as your needs grow.</p>
      </div>

      <button className="bg-[#4F9CF9] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition my-10">
        Try Taskey Free
      </button>

      <p className="text-[18px] md:text-[24px] font-normal mb-8">
        On a big team? Contact sales
      </p>

      <div className="flex space-x-8 sm:space-x-4">
        <img src={appleIcon} alt="Apple" className="w-full h-auto sm:w-16" />
        <img
          src={windowsIcon}
          alt="Windows"
          className="w-full h-auto sm:w-16"
        />
        <img
          src={androidIcon}
          alt="Android"
          className="w-full h-auto sm:w-16"
        />
      </div>
    </div>
  );
};

export default CallToAction;

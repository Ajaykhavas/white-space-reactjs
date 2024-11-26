import { textBgImage } from "../../assets/Images";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const ChoosePlan = () => {
  return (
    <div className="py-36">
      <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-6">
        <h1 className="md:text-[72px] sm:text-[56px] text-[40px] font-bold">
          Choose Your Plan
        </h1>

        <div className="absolute bottom-[0.5rem] right-[65px] 2xl:w-80 w-40 -z-10 sm:w-60 md:w-72">
          <img src={textBgImage} alt="Line" className="w-full h-auto" />
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <p className="md:text-lg text-[#212529] text-base">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-11">
        {/* Left Box */}
        <div className="hidden md:block border-2 border-secondary rounded-lg py-10 px-11 w-full text-left shadow-sm bg-white">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <h3 className="text-4xl font-bold mb-4">$0</h3>
          <p className="mb-4 text-lg font-medium">
            Capture ideas and find them quickly
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
              "Connect primary Google Calendar account",
              "Add due dates, reminders, and notifications to your tasks",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <TaskAltRoundedIcon
                  style={{ height: "20px", width: "20px", color: "black" }}
                />
                {feature}
              </li>
            ))}
          </ul>
          <button className="border-2 font-medium border-secondary px-10 py-4 rounded hover:bg-secondary hover:text-white transition">
            Get Started
          </button>
        </div>

        {/* Center Box */}
        <div className="bg-main text-white rounded-lg py-20 px-11 w-full text-left shadow-md transform">
          <h2 className="text-xl font-semibold mb-4">Personal</h2>
          <h3 className="text-4xl font-bold mb-4 text-secondary">$11.99</h3>
          <p className="mb-4 text-lg font-medium">Keep home and family on track</p>
          <ul className="space-y-4 mb-4">
            {[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
              "Connect primary Google Calendar account",
              "Add due dates, reminders, and notifications to your tasks",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <TaskAltRoundedIcon
                  style={{ height: "20px", width: "20px", color: "#FFE492" }}
                />
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-[#4F9CF9] font-medium text-white px-10 py-4 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Right Box */}
        <div className="hidden md:block border-2 border-secondary rounded-lg py-10 px-11 w-full text-left shadow-sm bg-white">
          <h2 className="text-2xl font-semibold mb-4">Organization</h2>
          <h3 className="text-4xl font-bold mb-4">$49.99</h3>
          <p className="mb-4 text-lg font-medium">
            Capture ideas and find them quickly
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
              "Connect primary Google Calendar account",
              "Add due dates, reminders, and notifications to your tasks",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <TaskAltRoundedIcon
                  style={{ height: "20px", width: "20px", color: "black" }}
                />
                {feature}
              </li>
            ))}
          </ul>
          <button className="border-2 font-medium border-secondary px-10 py-4 rounded hover:bg-secondary hover:text-white transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;

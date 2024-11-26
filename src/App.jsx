import CallToAction from "./components/Core/CallToAction";
import ChoosePlan from "./components/Core/ChoosePlan";
import HeroSection from "./components/Core/HeroSection";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="px-[32px] 2xl:px-[220px] max-w-[1920px]">
        <ChoosePlan />
      </div>
      <CallToAction />
    </Layout>
  );
};

export default App;

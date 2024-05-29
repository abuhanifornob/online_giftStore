import Banner from "../components/Home/Banner";
import CategoryBanner from "../components/Home/CategoryBanner";
import Contact from "../components/Home/Contact";
import UserAsk from "../components/Home/UserAsk";

const Home = () => {
  return (
    <>
      <CategoryBanner />
      <Banner />
      <Contact />
      <UserAsk />
    </>
  );
};

export default Home;

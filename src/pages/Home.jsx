import Banner from "../components/Home/Banner";
import CategoryBanner from "../components/Home/CategoryBanner";
import UserAsk from "../components/Home/UserAsk";

const Home = () => {
  return (
    <>
      <CategoryBanner />
      <Banner />
      <UserAsk />
    </>
  );
};

export default Home;

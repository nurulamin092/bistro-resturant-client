import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>Bistro | Home</Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;

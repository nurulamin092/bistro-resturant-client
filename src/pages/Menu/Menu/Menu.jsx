import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import pizzaImg from "../../../assets/menu//pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={`our menu`} />

      {/* main cover*/}

      <SectionTitle subHeading={`Don't miss`} heading={`Today's offer`} />
      {/* offered cover*/}
      <MenuCategory items={offered} />

      {/* dessert menu*/}

      <MenuCategory items={dessert} title={`dessert`} img={dessertImg} />

      {/*  pizza menu*/}

      <MenuCategory items={pizza} title={`pizza`} img={pizzaImg} />

      {/* salad menu*/}

      <MenuCategory items={salad} title={`salad`} img={saladImg} />
      <MenuCategory items={soup} title={`soup`} img={soupImg} />
    </div>
  );
};

export default Menu;

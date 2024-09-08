import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 flex flex-col ">
      <SectionTitle subHeading={`From Our Menu`} heading={`Popular Menu`} />
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline mx-auto border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;

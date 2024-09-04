import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "./ItemCard";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return (
    <section className="my-10">
      <SectionTitle subHeading={`should try`} heading={`Chef Recommends`} />
      <div className="grid md:grid-cols-3 gap-4">
        {menu.slice(0, 3).map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <section
      className="pt-8 bg-fixed text-white my-20"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <SectionTitle subHeading={`check it out`} heading={`Featured Item`} />
      <div className="md:flex justify-center items-center py-20 pt-10 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            cupiditate! Tempore at commodi neque rem libero doloribus ut atque
            ipsa, ullam laborum odit incidunt voluptatem delectus nobis quia id
            est repudiandae voluptas, sapiente odio. Ut fugit ipsum numquam
            molestias, sapiente quas fugiat sit eius beatae quaerat cum et iure
            tempora.
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;

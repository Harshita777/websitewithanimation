import image from "../../public/gsk1.png";
import "../header.css"
const Header = () => {
  return (
    <div className=" container mx-auto max-w-5xl ">
      <div>
        <div>
          <h1 className="first-heading  text-center mt-32  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Creating</h1>
        </div>
        <div className="first-subheading text-center text-5xl">
          <h5>Discerning Digital Works and <br/>Communication Collaterals</h5>
        </div>
      </div>
      <div className="flex justify-between gap-12 mt-56">
        <div  className="text-start mt-24">
          <h1 className="second-heading   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-9xl">We are</h1>
          <h5 className="second-subheading text-4xl mt-4">
            Creative Designers,Insightful<br/> Strategists,and Exceptional<br/> Engineers
          </h5>
          <p className="paragraph mt-3">
            The organization is focused on foregrounding expertise in its
            services,<br/> staying updated on global trends, refining domain
            knowledge, and adapting <br/>to evolving content creation arenas to
            effectively serve client brands.
          </p>
        </div>
        <div className="header-image">
          <img src={image} alt="book" />
        </div>
      </div>
    </div>
  );
};

export default Header;

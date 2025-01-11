import Item from "./Item";
import { CATEGORIES, CUSTOMERSERVICE, QUICKLINK } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:px-8 px-5 py-16">
      {/* SINGLE AND BLOOMING section - spans 2 columns */}
      <div>
        <h1 className="font-bold">SINGLE AND BLOOMING</h1>
        <p className="text-gray-200 text-sm">
          Founded in 2020, Single & Blooming is Malaysia’s most stylish online florist and purveyor of gifts. We curate the most luxurious flowers, live plants and unique gifts from around the world, delivering them to your doorstep so you can focus on creating moments of happiness with the people you love.
        </p>
      </div>

      {/* Other sections - each spans 1 column */}
      <Item Links={CATEGORIES} title="OUR CATEGORIES" />
      <Item Links={CUSTOMERSERVICE} title="CUSTOMER SERVICE" />
      <Item Links={QUICKLINK} title="QUICK LINKS" />

      {/* CONTACT US section - spans 1 column */}
      <div>
        <h1 className="font-bold">CONTACT US</h1>
        <p className="text-gray-200 text-sm">
          +60 11 6306 5938<br />
          info@singleblooming.com
        </p>
        <h6>Corporate</h6>
        <p className="text-gray-200 text-sm">corporate@singleblooming.com</p>
        <h6>Marketing</h6>
        <p className="text-gray-200 text-sm">marketing@singleblooming.com</p>
      </div>
    </div>
  );
};

export default ItemsContainer;
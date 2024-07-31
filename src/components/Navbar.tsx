import Link from "next/link";
import GoToCartBtn from "./GoToCartBtn";

const Navbar = () => {
  return (
    <div className=" w-full max-w-screen-xl flex justify-between px-2 py-4 ">
      <h1 className="text-4xl font-bold text-primary">
        <Link href="/"> Styx</Link>
      </h1>

      <GoToCartBtn />
    </div>
  );
};

export default Navbar;

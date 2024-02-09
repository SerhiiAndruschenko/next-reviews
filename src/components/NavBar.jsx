import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full">
      <ul className="w-full flex gap-x-6">
        <li>
          <Link className="font-medievalSharp logo" href={"/"}>Bookworm Haven</Link>
        </li>
        <li className="ml-auto font-gentium">
          <Link href={"/authors"}>Authors</Link>
        </li>
        <li className="font-gentium">
          <Link href={"/about"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

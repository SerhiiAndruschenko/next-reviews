import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

const NavBar = () => {
  return (
    <nav className="w-full">
      <ul className="w-full flex gap-x-6">
        <li>
          <Link className="font-medievalSharp logo" href={"/"} title="Bookworm Haven">Bookworm Haven</Link>
        </li>
        <li className="ml-auto font-gentium">
          <Link href={"/authors"} title="Authors">Authors</Link>
        </li>
        <li className="font-gentium">
          <Link href={"/about"} title="About Us">About Us</Link>
        </li>
        <li className="theme-changer">
          <ThemeChanger />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full">
      <ul className="w-full flex gap-x-6">
        <li>
          <Link className="font-orbitron font-bold" href={"/"}>Bookworm Haven</Link>
        </li>

        <li className="ml-auto">
          <Link href={"/about"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

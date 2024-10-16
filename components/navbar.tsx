import Link from "next/link";
import Container from "./ui/container";
import logo from "@/public/logo.svg";
import Image from "next/image";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-1 items-center">
            <Image src={logo} alt="logo" height={30} width={30} />
            <p className="font-bold text-xl">TeraStore</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;

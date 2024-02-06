import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-between items-center w-full px-6 p-4 bg-black">
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/sign-up">
        <Button className="bg-blue-700 hover:bg-white hover:text-black">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 p-4 bg-gray-300">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center items-center">
          <Image
            src="/images/notepad_logo.png"
            height={30}
            width={30}
            alt="Logo_image"
          />
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 ml-2">
            ListMaster
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 gap-2">
          <Button variant="outline" className="bg-blue-100 hover:bg-blue-500 hover:text-white">
            <Link href="/">Privacy policy</Link>
          </Button>
          <Button variant="outline" className="bg-blue-100 hover:bg-blue-500 hover:text-white">
            <Link href="/">Terms of services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

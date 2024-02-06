import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/images/notepad_logo.png"
        height={30}
        width={30}
        alt="Logo_image"
      />
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-400 ml-2">
        ListMaster
      </div>
    </div>
  );
};

export default Logo;

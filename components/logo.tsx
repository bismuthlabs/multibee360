import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo_test_7.png"
      alt="Multi-Bee 360 Roofing System Logo"
      width={136}
      height={52}
      className="w-full h-auto"
      priority
    />
  );
};

export default Logo;
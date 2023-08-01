import Link from "../../common/link";
import Image from "next/image";
import Navigation from "../navigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-transparent backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization>
          <Image src="/assets/svg/logo.svg" width={36} height={36} alt="Logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

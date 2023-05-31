import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header
      className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5
        xl:items-center"
    >
      <div
        className="flex flex-row items-center"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <SocialIcon
          url="https://github.com/tapeds"
          fgColor="#D4D4D4"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/farrell-matthew-lim-95b27821b/"
          fgColor="#D4D4D4"
          bgColor="transparent"
        />
      </div>
      <div
        className="flex cursor-pointer flex-row items-center text-gray-300"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <Link href="#contact">
          <p className="text-sm uppercase text-[#D4D4D4]">Contact Me</p>
        </Link>
      </div>
    </header>
  );
}

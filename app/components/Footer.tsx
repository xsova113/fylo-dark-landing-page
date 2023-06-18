import Image from "next/image";
import { MdPhoneInTalk, MdLocationOn, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1523] text-white/80 container-paddingx md:pb-16 pb-8">
      <div className="pt-32 flex flex-col max-md:px-4">
        <div className="relative max-md:mt-10 w-[180px] h-[45px] md:w-[130px] md:h-[35px] cursor-pointer mb-14">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-20 md:gap-24">
          <div className="flex flex-col md:flex-row md:gap-20 gap-6">
            <div className="flex items-top gap-6">
              <span className="mt-1">
                <MdLocationOn size={20} />
              </span>
              <span>
                Et aliquip id elit sit consequat sunt cillum aliquip nisi
                eiusmod. Est adipisicing minim reprehenderit in ea veniam irure
                mollit officia cillum proident.
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
                <MdPhoneInTalk size={20} />
                <span>+1-543-123-4567</span>
              </div>
              <div className="flex gap-6">
                <MdEmail size={20} />
                <span>example@fylo.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            <div className="footer-links flex flex-col gap-6">
              <span className="w-[70px]">About Us</span>
              <span>Jobs</span>
              <span>Press</span>
              <span>Blog</span>
            </div>
            <div className="footer-links flex flex-col gap-6">
              <span className="w-[80px]">Contact Us</span>
              <span>Terms</span>
              <span>Privacy</span>
            </div>
          </div>

          <div className="flex gap-4 mx-auto">
            <div className="border h-fit p-2 group rounded-full hover:border-[#65E2D9] cursor-pointer transition">
              <FaFacebookF size={14} className="group-hover:fill-[#65E2D9] transition" />
            </div>
            <div className="border h-fit p-2 group rounded-full hover:border-[#65E2D9] cursor-pointer transition">
              <FaTwitter size={14} className=" group-hover:fill-[#65E2D9] transition" />
            </div>
            <div className="border h-fit p-2 group rounded-full hover:border-[#65E2D9] cursor-pointer transition">
              <FaInstagram size={14} className="group-hover:fill-[#65E2D9] transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

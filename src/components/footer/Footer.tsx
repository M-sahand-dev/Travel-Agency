import { type JSX, useId } from "react";
import { Title } from "../header";
import { footerMenu } from "../../constants";
import { Link } from "react-router-dom";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

export const Footer = (): JSX.Element => {
  const id = useId();
  return (
    <div className="footer mt-14">
      <div className=" container bg-dark-quinary-3 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {footerMenu.map((item) => (
              <div key={id + item.id} className="">
                {" | "}
                <Link to={item.to}>{item.title}</Link>
                {" | "}
              </div>
            ))}
          </div>
          <Title />
        </div>
        <div className="my-8  border border-white-quinary-3"></div>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="text-white text-sm">
              © تمامی حقوق برای کاربر این محصول محفوظ است
            </div>
            <div className="text-white flex items-center gap-2">
              <a
                href="https://twitter.com/Arshad_Azad"
                target="_blank"
                rel="noreferrer">
                <FaXTwitter className="text-white text-2xl" />
              </a>
              <a
                href="https://twitter.com/Arshad_Azad"
                target="_blank"
                rel="noreferrer">
                <FaFacebookF className="text-white text-2xl ml-2" />
              </a>
              <a
                href="https://twitter.com/Arshad_Azad"
                target="_blank"
                rel="noreferrer">
                <FaInstagram className="text-white text-2xl ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

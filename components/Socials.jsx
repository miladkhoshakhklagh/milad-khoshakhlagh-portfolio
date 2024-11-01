import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram,FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/miladkhoshakhklagh" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/miladkhoshakhlaghostad/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/miladkhoshakhlagh?igsh=cHJrZzRlbHZyNml2" },
  { icon: <FaWhatsapp />, path: "https://api.whatsapp.com/send?phone=989363741437" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=>{
        return <Link key={index}  href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
};

export default Socials;

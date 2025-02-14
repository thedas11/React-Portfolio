import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial href ="www.linkedin.com/in/soumalya-das-321a41324 " target ="_blank" Icon={FaLinkedinIn} />
      <SingleContactSocial link="#" Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
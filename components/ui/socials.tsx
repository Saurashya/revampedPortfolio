import Button from "./button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Socials() {
    const socialLinks = [
        {
            icon: <FaGithub className="w-6 h-6 text-white" />,
            link: "https://github.com/Saurashya",
        },
        {
            icon: <FaLinkedin className="w-6 h-6 text-white" />,
            link: "https://www.linkedin.com/in/saurashya-rayamajhi",
        },
        {
            icon: <FaTwitter className="w-6 h-6 text-white" />,
            link: "https://x.com/SaurashyaRayam1",
        }
    ];

    return (
        <div className="flex items-center gap-3">
            {socialLinks.map((item, index) => (
                <Button key={index} link={item.link} isIcon>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full">
                        {item.icon}
                    </span>
                </Button>
            ))}
        </div>
    );
}

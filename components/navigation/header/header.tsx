import FancyButton from "@/components/ui/fancy-button";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import Profile from "@/components/ui/profile";
import { FaArrowRight } from "react-icons/fa6";

function Header() {
    return ( 
        <div className="w-full flex items-center justify-center md:justify-between">
            <Profile/>
            <div className="hidden md:inline">
                <MagneticWrapper>
                    <FancyButton text="Let's talk" icon={<FaArrowRight/>}/>
                </MagneticWrapper>
            </div>

        </div>
     );
}

export default Header;
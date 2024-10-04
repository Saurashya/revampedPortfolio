import { FC } from "react";

interface HeaderProps{
    title:String;
    tag:String;
}

const Header:FC<HeaderProps>=({title,tag})=>{
    return <div className="bg-secondary-background flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border-border rounded-3xl">
        <div>
            <p className="text-lg font-medium leading-3 text-primary-foreground">{title}</p>
        </div>
        <div>
            <p className="text-lg font-medium leading-3 text-secondary-foreground font-pixel">{tag}</p>
        </div>
    </div>;
}

export default Header;


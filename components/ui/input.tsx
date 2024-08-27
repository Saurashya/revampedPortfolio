import { FC, ReactNode } from "react";

interface InputProps {
    icon?: ReactNode;
    placeholder?: string;
    type?: "email" | "password" | "text";
    }

const Input:FC<InputProps>=({icon,placeholder,type})=>{
    return( 
    <div className="realtive w-full ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
            {icon}
        </div>
        <input type={type} placeholder={placeholder} className="bg-primary-background text-primary-foreground w-full rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-none">
        </input>
        </div>
    );
}

export default Input;
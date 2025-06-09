import React, { FC } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/constants/data";
import SocialMedia from "../elements/socialMedia";
import { useOutsideClick } from "@/hooks";
import Logo from "../elements/logo";

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const pathName = usePathname();
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

    return (
        <div
            className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } hoverEffect`}
        >
            <div
                ref={sidebarRef}
                className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop-light_blue flex flex-col gap-6"
            >
                <div className="flex items-center justify-between gap-5">
                    <Logo
                        className="text-white"
                        spanDesign="group-hover:text-white"
                    />
                    <button
                        className="hover:text-shop-light_blue hoverEffect"
                        onClick={onClose}
                    >
                        <X />
                    </button>
                </div>
                <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
                    {headerData.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`hover:text-shop-light_blue hoverEffect ${
                                pathName === item.href &&
                                "text-shop-light_blue"
                            }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <SocialMedia />
            </div>
        </div>
    );
};

export default SideMenu;

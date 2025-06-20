"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./sideMenu";

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsSidebarOpen(true)}>
                <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer" />
            </button>
            <div className="md:hidden">
                <SideMenu
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>
        </>
    );
};

export default MobileMenu;

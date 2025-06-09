import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
    className,
    spanDesign,
}: {
    className?: string;
    spanDesign?: string;
}) => {
    return (
        <Link href={"/"} className="inline-flex">
            <h2
                className={cn(
                    "text-2xl text-shop-dark_blue font-black tracking-wider uppercase hover:text-shop-light_blue hoverEffect group font-sans",
                    className,
                )}
            >
                TSho
                <span
                    className={cn(
                        "text-shop-light_blue group-hover:text-shop-dark_blue hoverEffect",
                        spanDesign,
                    )}
                >
                    p
                </span>
            </h2>
        </Link>
    );
};

export default Logo;

import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";

const socialLink = [
    {
        title: "Youtube",
        href: "https://github.com/pcltuan7103",
        icon: <Youtube className="w-5 h-5" />,
    },
    {
        title: "Github",
        href: "https://github.com/pcltuan7103",
        icon: <Github className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        href: "https://github.com/pcltuan7103",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        title: "Facebook",
        href: "https://github.com/pcltuan7103",
        icon: <Facebook className="w-5 h-5" />,
    },
];

const SocialMedia = ({
    className,
    iconClassName,
    tooltipClassName,
}: {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5", className)}>
                {socialLink.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger asChild>
                            <a
                                className={cn(
                                    "p-2 border rounded-full hover:text-white hover:border-shop-light_blue hoverEffect",
                                    iconClassName,
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.href}
                            >
                                {item.icon}
                            </a>
                        </TooltipTrigger>
                        <TooltipContent
                            className={cn(
                                "bg-white text-darkColor font-semibold",
                                tooltipClassName,
                            )}
                        >
                            {item.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialMedia;

import React from "react";
import Container from "../elements/container";
import SocialMedia from "../elements/socialMedia";
import Link from "next/link";
import { Button } from "../ui/button";
import FooterTop from "./footerTop";
import Logo from "../elements/logo";
import { SubText, SubTitle } from "../ui/text";
import { quickLinksData } from "@/constants/data";
import { Input } from "../ui/input";

const Footer = () => {
    return (
        <footer>
            <Container className="bg-white border-t">
                <FooterTop />
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Logo />
                        <SubText>
                            Discover curated furniture collections at Shopcart,
                            blending style and comfort to elevate your living
                            space.
                        </SubText>
                        <SocialMedia
                            className="text-darkColor/60"
                            iconClassName="border-darkColor/60 hover:border-shop-light_blue hover:text-shop-light_blue"
                            tooltipClassName="bg-darkColor text-white"
                        />
                    </div>
                    <div>
                        <SubTitle>Quick Links</SubTitle>
                        <ul className="space-y-3 mt-4">
                            {quickLinksData.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-shop-light_blue hoverEffect font-medium"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <SubTitle>Newsletter</SubTitle>
                        <SubText>
                            Subscribe to our newsletter to receive updates and
                            exclusive offers
                        </SubText>
                        <form className="space-y-3">
                            <Input
                                placeholder="Enter your email"
                                type="email"
                                required
                            />
                            <Button className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="py-6 border-t text-center text-sm text-gray-600">
                    <div>
                        &copy; {new Date().getFullYear()}
                        <Logo className="text-sm" />
                        .All rights reserved
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

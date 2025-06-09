import React from "react";
import Container from "../elements/container";
import MobileMenu from "./mobieMenu";
import Logo from "../elements/logo";
import HeaderMenu from "./headerMenu";
import SearchBar from "./serachBar";
import CartIcon from "./cartIcon";
import FavoriteButton from "./favoriteButton";

const Header = async () => {

    return (
        <header className="bg-white py-5">
            <Container className="flex items-center justify-between text-lightColor">
                <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
                    <MobileMenu />
                    <Logo />
                </div>
                <HeaderMenu />
                <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
                    <SearchBar />
                    <CartIcon />
                    <FavoriteButton />
                </div>
            </Container>
        </header>
    );
};

export default Header;

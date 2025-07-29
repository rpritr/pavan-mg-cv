import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
const Header = (props) => {
    return (
        <div className={props.type}>
            <Logo type={props.type + "__logo"} />
            <Menu items={
                [
                    { title: "Home", url: "#" },
                    { title: "About", url: "#about" },
                    { title: "Tech stack", url: "#stack" },
                    { title: "Projects", url: "#projects" },
                    { title: "Contact", url: "#contact" },
                ]
            }/>

        </div>
    )
}
export default Header;
import React from "react";
import Logo from "./Logo/Logo";

const Header = (props) => {
    return (
        <div className={props.type}>
            <Logo type={props.type + "__logo"} />
        </div>
    )
}
export default Header;
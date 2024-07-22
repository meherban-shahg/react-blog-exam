import React from "react";
import NavLink from "@/Components/NavLink";

const About=()=>{
    return(
        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        <NavLink href={route("/")} active={route().current("Home")}>
            Home
        </NavLink>
        <NavLink href={route("/about")} active={route().current("About")}>
            About
        </NavLink>
    </div>
    );
}

export  default About
import React from "react";
import { NavStyle,SecNav,Ul,A } from "./style";
import "../../index.css"


export default function Nav(){
    return(
        <>
            <NavStyle>
                <SecNav className="alinhamento">
                    <p>Logo</p>
                    <Ul>
                    <li><A href="">Home</A></li>
                    <li><A href="">About</A></li>
                    <li><A href="">Contact</A></li>
                    <li><A href="">Project</A></li>
                    </Ul>
                </SecNav>
            </ NavStyle>
        </>
    )
}
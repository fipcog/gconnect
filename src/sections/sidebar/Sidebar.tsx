import React from "react";
import { NavLink } from "react-router-dom";
import { S } from "./SidebarStyles";


export const Sidebar: React.FC = () => {
    return (
        <S.Sidebar>
            <nav>
                <ul>
                    <S.ListItem><NavLink to="/Profile">Profile</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/Dialogs">Messages</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/News">News</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/Music">Music</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/Settings">Settings</NavLink></S.ListItem>
                </ul>
            </nav>
        </S.Sidebar>
    )
}
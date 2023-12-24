import React from "react";
import { NavLink } from "react-router-dom";
import { S } from "./SidebarStyles";

type PropsType = {
    authProfileId: number | null
}

export const Sidebar: React.FC<PropsType> = ({authProfileId}) => {
    return (
        <S.Sidebar>
            <nav>
                <ul>
                    <S.ListItem><NavLink to={`/profile/${authProfileId}`}>Profile</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/dialogs">Messages</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/news">News</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/music">Music</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/find_users">Find users</NavLink></S.ListItem>
                    <S.ListItem><NavLink to="/settings">Settings</NavLink></S.ListItem>
                </ul>
            </nav>
        </S.Sidebar>
    )
}
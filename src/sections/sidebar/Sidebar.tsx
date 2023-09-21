import React from "react";
import { S } from "./SidebarStyles";


export const Sidebar: React.FC = () => {
    return (
        <S.Sidebar>
            <nav>
                <ul>
                    <S.ListItem><a href="#">Profile</a></S.ListItem>
                    <S.ListItem><a href="#">Messages</a></S.ListItem>
                    <S.ListItem><a href="#">News</a></S.ListItem>
                    <S.ListItem><a href="#">Music</a></S.ListItem>
                    <S.ListItem><a href="#">Settings</a></S.ListItem>
                </ul>
            </nav>
        </S.Sidebar>
    )
}
import styled from "styled-components";

const Post = styled.li`
    display: flex;
    flex-direction: row;
    align-items: flex-startw;
    gap: 30px;

    max-width: 70%;

    margin-bottom: 40px;
`

const UserMessage = styled.p`
    padding-top: 10px;
    /* word-break: break-all; */
    overflow: hidden;
`

export const S = {
    Post,
    UserMessage,
}
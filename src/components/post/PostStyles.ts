import styled from "styled-components";

const Post = styled.li`
    display: flex;
    flex-direction: row;
    gap: 30px;

    margin-bottom: 20px;
`

const UserMessage = styled.p`
    padding-top: 15px;

    /* word-break: break-all; */
    overflow: hidden;
`

export const S = {
    Post,
    UserMessage,
}
import  React  from 'react';
import { S } from './PostsStyles';
import { PostsList } from '../postslist/PostsList';

export const Posts: React.FC = () => {
    return(
        <S.Posts>
            <S.SectionTitlt>Posts</S.SectionTitlt>
            <S.TextArea placeholder='Type your minds'/>
            <S.PostBtn>Send</S.PostBtn>
            <PostsList/>
        </S.Posts>
    )
}
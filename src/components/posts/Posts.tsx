import  React  from 'react';
import { S } from './PostsStyles';
import { PostsList } from '../postslist/PostsList';
import { UserPosts } from '../../redux/state';

type PostsPropsTypes = {
    userPosts: UserPosts
}

export const Posts: React.FC<PostsPropsTypes> = ({userPosts}) => {
    return(
        <S.Posts>
            <S.SectionTitlt>Posts</S.SectionTitlt>
            <S.TextArea placeholder='Type your minds'/>
            <S.PostBtn>Send</S.PostBtn>
            <PostsList userPosts={userPosts}/>
        </S.Posts>
    )
}
import  React  from 'react';
import { S } from './PostsStyles';
import { PostsList } from '../postslist/PostsList';
import { UserPosts } from '../../redux/state';
import { SendMessageTextarea } from '../sendmessagetextarea/SendMessageTextarea';

type PostsPropsTypes = {
    userPosts: UserPosts
}

export const Posts: React.FC<PostsPropsTypes> = ({userPosts}) => {
    return(
        <S.Posts>
            <S.SectionTitlte>Posts</S.SectionTitlte>
            <SendMessageTextarea/>
            <PostsList userPosts={userPosts}/>
        </S.Posts>
    )
}
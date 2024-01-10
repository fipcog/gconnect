import  React  from 'react';
import { S } from './PostsStyles';
import PostsList from '../posts_list/PostsList';
import ProfileFormContainer from '../profile_form/ProfileFormContainer';

    export const Posts: React.FC = () => {
        return(
            <S.Posts>
                <S.SectionTitlte>Posts</S.SectionTitlte>
                <ProfileFormContainer/>
                <PostsList/>
            </S.Posts>
        )
    }

import React from 'react';
import { S } from './PostsStyles';
import PostsList from '../posts_list/PostsList';
import ProfileFormContainer from '../profile_form/ProfileFormContainer';
import { ProfileType } from '../../reducers/profileReducer';

type PropsType = {
    profile: ProfileType
}

export const Posts = ({ profile }: PropsType) => {
    return (
        <S.Posts>
            <S.SectionTitlte>Posts</S.SectionTitlte>
            <ProfileFormContainer />
            <PostsList profile={profile} />
        </S.Posts>
    )
}

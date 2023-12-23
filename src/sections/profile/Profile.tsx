import React from 'react';
import { S } from './ProfileStyles';
import profileimage from '../../assets/wallpaper.jpg';
import Posts from '../../components/posts/Posts';
import { UserProfile } from '../../components/userprofile/UserProfile';
import { ProfileType } from '../../reducers/profileReducer';

type PropsType = {
    profile: ProfileType
}
export const Profile: React.FC<PropsType> = (props) => {

    if (props.profile) {
        return (
            <S.Profile>
                <S.ProfileImage src={props.profile.photos.large ? props.profile.photos.large : profileimage} />
                <UserProfile profile={props.profile}/>
                <Posts />
            </S.Profile>
        )
    } else {
        return <span>Not found</span>
    }


}
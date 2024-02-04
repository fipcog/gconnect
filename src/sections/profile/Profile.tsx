import React from 'react';
import { S } from './ProfileStyles';
import profileimage from '../../assets/wallpaper.jpg';
import { UserProfile } from '../../components/user_profile/UserProfile';
import { ProfileType } from '../../reducers/profileReducer';
import { Posts } from '../../components/posts/Posts';
import { uploadUserImage } from './../../reducers/profileReducer';

type PropsType = {
    profile: ProfileType
    isUsersPage: boolean
    uploadUserImage: (image: File) => void
}
export const Profile: React.FC<PropsType> = (props) => {

    if (props.profile) {
        return (
            <S.Profile>
                <S.ProfileImage src={props.profile.photos.large ? props.profile.photos.large : profileimage} />
                <UserProfile profile={props.profile} isUsersPage={props.isUsersPage} uploadUserImage={props.uploadUserImage} />
                <Posts profile={props.profile} />
            </S.Profile>
        )
    } else {
        return <span>Not found</span>
    }


}
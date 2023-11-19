import  React  from 'react';
import { S } from './PostsListStyles';
import image from '../../assets/userimage.jpg'
import { Post } from '../post/Post';
import { connect } from 'react-redux';
import { AppRootStoreType } from '../../redux/store';
import { UserPosts } from '../../reducers/profileReducer';

type mapStateToProps = {
    userPosts: UserPosts
}

type OwnProps = {}

type PropsType = OwnProps & mapStateToProps

class PostsList extends React.Component<PropsType> {

    render(): React.ReactNode {
        return(
            <S.PostsList>
                {this.props.userPosts.map(post => <Post key={post.id} image={image}>{post.post}</Post>)}
            </S.PostsList>
        )
    }
}

const mapStateToProps = (state:AppRootStoreType): mapStateToProps => {
    return {
        userPosts: state.profile.userPosts
    }
}

export default connect<mapStateToProps, {}, OwnProps, AppRootStoreType>(mapStateToProps, {})(PostsList)
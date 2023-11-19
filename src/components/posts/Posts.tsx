import  React  from 'react';
import { S } from './PostsStyles';
import PostsList from '../postslist/PostsList';
import { SendMessageTextarea } from '../sendmessagetextarea/SendMessageTextarea';
import { connect } from 'react-redux';
import { addUserPostAC } from '../../reducers/profileReducer';
import { AppRootStoreType } from '../../redux/store';


type MapDispatchToProps = {
    addPost: (post: string) => void
}
type OwnProps = {}
type PropsType = OwnProps & MapDispatchToProps

class Posts extends React.Component<PropsType> {

    render(): React.ReactNode {
        return(
            <S.Posts>
                <S.SectionTitlte>Posts</S.SectionTitlte>
                <SendMessageTextarea callback={this.props.addPost}/>
                <PostsList/>
            </S.Posts>
        )
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToProps => {
    return {
        addPost: (post: string) => dispatch(addUserPostAC(post))
    }
}

export default connect<{}, MapDispatchToProps, OwnProps, AppRootStoreType>(null, mapDispatchToProps)(Posts)
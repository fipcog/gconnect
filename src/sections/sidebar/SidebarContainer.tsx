import { connect } from "react-redux"
import { AppRootStoreType } from "../../redux/store"
import { Sidebar } from "./Sidebar"

type MapStateToPropsType = {
    authProfileId: number | null
}

type OwnProps = {} & MapStateToPropsType

const SidebarContainer = (props: OwnProps) => {
    return <Sidebar authProfileId={props.authProfileId}/>
}

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        authProfileId: state.authData.id 
    }
}

export default connect<MapStateToPropsType, {}, {}, AppRootStoreType>(mapStateToProps)(SidebarContainer)
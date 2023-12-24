import { ComponentType } from "react"
import { AppRootStoreType } from "../redux/store"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStoreType): MapStateToPropsType => {
    return {
        isAuth: state.authData.isAuth
    }
}

export function withRedirect<PropsType>(Component: ComponentType<PropsType>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as PropsType&{}} />
    }

    const ConnectedRedirectComponent = connect<MapStateToPropsType, {}, {}, AppRootStoreType>(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}
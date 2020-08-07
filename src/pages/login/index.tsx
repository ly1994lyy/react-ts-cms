import React, { PropsWithChildren, memo } from 'react'
import ParticlesBg from 'particles-bg'
import LoginMain from './login-layout/LoginMain'
import useActions from '../../hooks/useActions'
import {loginActionPromise} from '../../redux/saga/actions/user'
import './index.less'

interface IProps {

}

const Login: React.FC<IProps> = (props: PropsWithChildren<IProps>) => {
    
    const actions = useActions({
        loginActionPromise
    })

    return (
        <div className="login">
            <div className="login-layout">
                <div className="login-layout-header" />
                <LoginMain loading={false} fetch={actions.loginActionPromise} />
                <div className="login-layout-footer" />
                <ParticlesBg type="lines" bg={true}></ParticlesBg>
            </div>
        </div>
    )
}

export default memo(Login)





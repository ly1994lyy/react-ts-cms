import React, { PropsWithChildren, memo } from 'react'
import ParticlesBg from 'particles-bg'
import LoginMain from './login-layout/LoginMain'
import './index.less'

interface IProps {

}

const Login: React.FC<IProps> = (props: PropsWithChildren<IProps>) => {
    return (
        <div className="login">
            <div className="login-layout">
                <div className="login-layout-header" />
                <LoginMain loading={false} />
                <div className="login-layout-footer" />
                <ParticlesBg type="lines" bg={true}></ParticlesBg>
            </div>
        </div>
    )
}

export default memo(Login)





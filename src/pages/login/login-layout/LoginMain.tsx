import React, { PropsWithChildren, memo } from 'react'
import { Form, Button, Input, notification } from 'antd'

interface IProps {
    loading: boolean
}

const { Item } = Form
const LoginMain: React.FC<IProps> = (props: PropsWithChildren<IProps>) => {
    return (
        <div className="login-layout-main">
            <div className="main-form">
                <h2>欢迎登陆系统</h2>
                <Form className="main-form-box">
                    <Item>
                        <Input type="text" placeholder="请输入用户名"></Input>
                    </Item>
                    <Item>
                        <Input type="password" placeholder="请输入密码"></Input>
                    </Item>
                    <Item>
                        <Button>登录</Button>
                    </Item>
                    <Item>
                        <div className="main-form-box-other">
                            <p>其他登录方式</p>
                            <div className="any">
                                <span>QQ</span>
                                <span>微信</span>
                                <span>github</span>
                            </div>
                        </div>
                    </Item>
                </Form>
            </div>
        </div>
    )
}

export default memo(LoginMain)
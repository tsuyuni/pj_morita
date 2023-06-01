import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import Input from "../components/Input"

const StyledLoginForm = styled(({ className }) => 
	<div className={className}>
		<Input placeholder="ユーザー名"/>
		<Input placeholder="パスワード"/>
		<Button text="登録" />
	</div>
)`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Login = () => {
	return(
		<StyledLoginForm />
	)
}

export default Login
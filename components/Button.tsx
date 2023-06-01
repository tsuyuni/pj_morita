import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
	background-color: #666666;
	border: none;
	border-radius: 20px;
	width: 140px;
	height: 40px;
	color: #ffffff;
	&:hover {
		background-color: #444444;
	}
`

type ButtonProps = {
	text: string
}

const Button = (props: ButtonProps) => {
	const { text } = props
	return(
		<StyledButton>{text}</StyledButton>
	)
}

export default Button
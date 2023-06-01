import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`

	border: none;
	border-bottom: 1px solid #666666;
	width:240px;
	height: 28px;
	font-size: 16px;
	&:focus {
		outline: none;
	}
`

type InputProps = {
	placeholder: string
}

const Input = (props: InputProps) => {

	const { placeholder } = props

	return(

		<StyledInput placeholder={placeholder} />
	)
}

export default Input
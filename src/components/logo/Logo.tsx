import React from "react";
import logo from "../../logo.svg"
import styled from "styled-components";
import { theme } from "../../style/Theme";

export const Logo = () => {
	return (
		<StyledLogo role='banner' aria-label='Логотип-ссылка на начало страницы'>
			J<span>.</span>ConnecT
		</StyledLogo>
	)
}


const StyledLogo = styled.a`
	font-size: 34px;
	letter-spacing: 5px;
	color: #303030;

	cursor: pointer;
	transition: .2s;

	span {
		color: ${theme.colors.accent};
	}

	&:hover {
		&:first-child {
			color: ${theme.colors.accent};
		}

		span {
			color: #303030;
			transition: .2s;
		}
	}
`
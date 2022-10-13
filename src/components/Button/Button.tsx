import React from "react";

export interface ButtonProps {
	label: string;
}

const Button = (props: ButtonProps) => {
	return <button>{props.label} defaults6</button>;
};

export default Button;

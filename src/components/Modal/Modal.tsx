import React from "react";

export interface ModalProps {
	title: string;
	content: string;
	quitOnEsc: boolean;
}

const Modal = (props: ModalProps) => {
	return (
		<div>
			{props.title}
			{props.content}
		</div>
	);
};

export default Modal;

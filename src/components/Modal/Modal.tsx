import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export interface ModalProps {
	hide: () => void;
	isOpen: boolean;
	modalContent: JSX.Element;
	footerContent: JSX.Element;
	title: string;
	haveFooter: boolean;
	toggleModal: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
	isOpen,
	title,
	hide,
	toggleModal,
	modalContent,
	haveFooter,
	footerContent,
}) => {
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Escape" && isOpen) {
			hide();
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", onKeyDown, false);
		return () => {
			document.removeEventListener("keydown", onKeyDown, false);
		};
	}, [isOpen]);

	const modal = (
		<div className="overlay" onClick={toggleModal}>
			<div className="modal">
				<div className="modal-content" aria-modal aria-labelledby={title} tabIndex={-1} role="dialog">
					<h2>{title}</h2>
					<div>{modalContent}</div>
					<button className="close-modal" onClick={toggleModal} data-dismiss="modal" aria-label="Close">
						close
					</button>
					{haveFooter ? (
						<>
							<hr></hr>
							<footer>{footerContent}</footer>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
	return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;

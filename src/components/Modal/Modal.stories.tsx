import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "ReactLightModal/Modal",
	component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Modal> = (args) => {
	const [isOpen, setOpen] = useState(args.isOpen);

	const handleModalClose = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			Use the open property to toggle the modal preview.{" "}
			<Modal {...args} hide={handleModalClose} isOpen={isOpen}></Modal>
		</>
	);
};

const toggleModal = () => {
	alert("The component receive hide event");
};

export const SimpleModal = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleModal.args = {
	title: "Hello world!",
	modalContent: (
		<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi nesciunt maiores quis
			recusandae unde minus placeat et quibusdam eligendi.
		</>
	),
	isOpen: undefined,
	footerContent: <button>Ok</button>,
	haveFooter: true,
};

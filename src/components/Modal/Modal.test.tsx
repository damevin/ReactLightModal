import React from "react";
import { render } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal", () => {
	test("renders the Modal component", () => {
		render(
			<Modal
				title="Hello world !"
				canClose
				isOpen={true}
				toggleModal={() => {}}
				closeBtnContent={<p>X</p>}
				haveFooter={false}
				footerContent={<></>}
				modalContent={
					<>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore a impedit et
						expedita vero esse repellat, quasi reiciendis tempora?
					</>
				}
			/>
		);
	});
});

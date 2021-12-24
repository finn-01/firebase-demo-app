import React from "react";
import { useState } from "react";

function UploadForm() {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ["image/png", "image/jpeg", "image/jpg"];

	const changHanlder = (e) => {
		let selected = e.target.files[0];

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError("");
		} else {
			setFile(null);
			setError("Pls upload file PNG, JPG or JPEG");
		}
	};

	return (
		<form>
			<label>
				<input type="file" onChange={changHanlder} />
				<span>+</span>
			</label>

			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
			</div>
		</form>
	);
}

export default UploadForm;

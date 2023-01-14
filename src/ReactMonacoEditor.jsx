import { useState } from "react";
import MonacoEditor from "react-monaco-editor";
const options = {
	selectOnLineNumbers: true,
};
const ReactMonacoEditor = () => {
	const [value, setValue] = useState("");
	return (
		<MonacoEditor
			editorDidMount={editor => editor.focus()}
			height="100%"
			language="javascript"
			onChange={setValue}
			options={options}
			theme="vs-dark"
			value={value}
			width="100%"
		/>
	);
};
export default ReactMonacoEditor;

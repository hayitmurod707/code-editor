const Options = ({ language, theme }) => ({
	defaultValue: '',
	editorProps: {
		$blockScrolling: true,
	},
	enableBasicAutocompletion: true,
	enableLiveAutocompletion: true,
	enableSnippets: true,
	highlightActiveLine: true,
	name: 'editor',
	placeholder: '',
	setOptions: {
		enableBasicAutocompletion: true,
		enableLiveAutocompletion: true,
		enableSnippets: true,
		mode: language.value,
		showLineNumbers: true,
		tabSize: 3,
		theme: theme.value,
	},
	showGutter: true,
	showPrintMargin: true,
	style: {
		height: '400px',
		width: '100%',
	},
	tabSize: 3,
	wrapEnabled: true,
});
export default Options;

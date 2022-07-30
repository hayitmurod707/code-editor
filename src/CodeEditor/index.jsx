import AceBuilds from 'ace-builds';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-dart';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-haskell';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-pascal';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-kuroir';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import { array, bool, func, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Editor from 'react-ace';
import Options from './Options';
import Select from './Select';
import StyledElement from './StyledElement';
const CodeEditor = ({
	isDisabled,
	language,
	languages,
	onChange,
	onFocus,
	onSubmit,
	setLanguage,
	value,
}) => {
	const [themes] = useState([
		{
			label: 'Kuroir',
			value: 'kuroir',
		},
		{
			label: 'Monokai',
			value: 'monokai',
		},
		{
			label: 'Solarized Dark',
			value: 'solarized_dark',
		},
		{
			label: 'Solarized Light',
			value: 'solarized_light',
		},
		{
			label: 'Terminal',
			value: 'terminal',
		},
		{
			label: 'Textmate',
			value: 'textmate',
		},
		{
			label: 'Twilight',
			value: 'twilight',
		},
		{
			label: 'Xcode',
			value: 'xcode',
		},
	]);
	const [theme, setTheme] = useState({
		label: 'Textmate',
		value: 'textmate',
	});
	const [fontSizes] = useState([
		{
			label: '30px',
			value: 30,
		},
		{
			label: '28px',
			value: 28,
		},
		{
			label: '26px',
			value: 26,
		},
		{
			label: '24px',
			value: 24,
		},
		{
			label: '23px',
			value: 23,
		},
		{
			label: '22px',
			value: 22,
		},
		{
			label: '21px',
			value: 21,
		},
		{
			label: '20px',
			value: 20,
		},
		{
			label: '19px',
			value: 19,
		},
		{
			label: '18px',
			value: 18,
		},
		{
			label: '17px',
			value: 17,
		},
		{
			label: '16px',
			value: 16,
		},
		{
			label: '15px',
			value: 15,
		},
		{
			label: '14px',
			value: 14,
		},
		{
			label: '13px',
			value: 13,
		},
		{
			label: '12px',
			value: 12,
		},
		{
			label: '11px',
			value: 11,
		},
		{
			label: '10px',
			value: 10,
		},
	]);
	const [fontSize, setFontSize] = useState({
		label: '14px',
		value: 14,
	});
	const onChangeEditorTheme = value => {
		const defaultTheme = JSON.parse(localStorage.getItem('editor-theme'));
		const theme = value
			? value
			: defaultTheme
			? defaultTheme
			: {
					label: 'Textmate',
					value: 'textmate',
			  };
		setTheme(theme);
		localStorage.setItem('editor-theme', JSON.stringify(theme));
		AceBuilds.edit('editor').setTheme(`ace/theme/${theme.value}`);
	};
	const onChangeEditorFontSize = value => {
		const defaultFontSize = JSON.parse(
			localStorage.getItem('editor-font-size')
		);
		const fontSize = value
			? value
			: defaultFontSize
			? defaultFontSize
			: {
					label: '14px',
					value: 14,
			  };
		setFontSize(fontSize);
		localStorage.setItem('editor-font-size', JSON.stringify(fontSize));
	};
	const onChangeEditorLanguage = value => {
		const defaultTheme = JSON.parse(localStorage.getItem('editor-language'));
		const language = value
			? value
			: defaultTheme
			? defaultTheme
			: {
					id: 5,
					label: 'Javascript',
					value: 'javascript',
			  };
		setLanguage(language);
		AceBuilds.edit('editor')
			.getSession()
			.setMode(`ace/mode/${language.value}`);
		localStorage.setItem('editor-language', JSON.stringify(language));
	};
	useEffect(() => {
		onChangeEditorFontSize();
		onChangeEditorLanguage();
		onChangeEditorTheme();
	}, []);
	return (
		<StyledElement>
			<div className="editor-header">
				<div className="editor-theme">
					<Select
						onChange={onChangeEditorTheme}
						options={themes}
						value={theme}
					/>
				</div>
				<div className="editor-font-size">
					<Select
						onChange={onChangeEditorFontSize}
						options={fontSizes}
						value={fontSize}
					/>
				</div>
				<div className="editor-language">
					<Select
						onChange={onChangeEditorLanguage}
						options={languages}
						value={language}
					/>
				</div>
				<div className="editor-run">
					<button onClick={onSubmit}>Run code</button>
				</div>
			</div>
			<Editor
				{...Options({ theme, language })}
				fontSize={fontSize?.value}
				mode={language.value}
				onChange={onChange}
				onFocus={onFocus}
				readOnly={isDisabled}
				theme={theme.value}
				value={value}
			/>
		</StyledElement>
	);
};
CodeEditor.defaultProps = {
	isDisabled: false,
	language: {
		id: 5,
		label: 'Javascript',
		value: 'javascript',
	},
	languages: [],
	value: '',
};
CodeEditor.propTypes = {
	isDisabled: bool,
	language: { label: string, value: string },
	languages: array,
	onChange: func.isRequired,
	onFocus: func.isRequired,
	onSubmit: func.isRequired,
	setLanguage: func.isRequired,
	value: string,
};
export default CodeEditor;

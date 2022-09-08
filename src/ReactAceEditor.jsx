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
import ReactAce from 'react-ace';
import ReactSelect from 'react-select/creatable';
import styled from 'styled-components';
const StyledElement = styled.div`
	border-radius: 12px;
	border: 1px solid #e2e4ea;
	overflow: hidden;
	& .editor-header {
		display: flex;
		flex-wrap: wrap;
		padding: 6px 0 6px 6px;
		& .editor-theme {
			width: 154px;
		}
		& .editor-font-size {
			margin: 0 6px;
			width: 87px;
		}
		& .editor-language {
			margin: 0 6px 0 0;
			width: 125px;
			@media (max-width: 391px) {
				margin: 6px 6px 0 0;
			}
		}
		& .editor-run {
			margin: 0 6px 0 0;
			& button {
				background-color: #0000ff;
				border-radius: 6px;
				border: none;
				color: #ffffff;
				cursor: pointer;
				font-size: 15px;
				height: 42px;
				outline: none;
				padding: 0 16px;
				@media (max-width: 495px) {
					margin: 6px 6px 0 0;
				}
			}
		}
	}
`;
const options = ({ language, theme }) => ({
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
const selectOptions = {
	isClearable: false,
	isMulti: false,
	isSearchable: false,
	maxMenuHeight: 240,
	menuPlacement: 'auto',
	styles: {
		option: (styles, { isSelected, isDisabled }) => ({
			...styles,
			backgroundColor: isDisabled
				? '#808080'
				: isSelected
				? '#0000ff'
				: '#f7f8fc',
			color: isDisabled ? '#000000' : isSelected ? '#ffffff' : '#000000',
			cursor: isDisabled ? 'not-allowed' : 'pointer',
			fontSize: 15,
			height: 42,
			overflow: 'hidden',
			padding: '12px 16px',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			width: '100%',
			':hover': {
				background: isDisabled ? '#808080' : '#0000ff',
				color: isDisabled ? '#000000' : '#ffffff',
			},
		}),
		singleValue: styles => ({
			...styles,
			color: '#000000',
			margin: 0,
		}),
		control: styles => ({
			...styles,
			backgroundColor: '#f7f8fc',
			border: '1px solid #e2e4ea !important',
			borderRadius: 6,
			boxShadow: 'none',
			color: 'black',
			cursor: 'pointer',
			height: 42,
			outline: 'none',
			padding: 0,
			width: '100%',
			':hover': {
				border: '1px solid #e2e4ea !important',
			},
		}),
		menu: styles => ({
			...styles,
			backgroundColor: '#f7f8fc',
			border: 'none',
			borderRadius: 6,
			boxShadow:
				'0 1px 10px 0 rgba(13, 46, 105, 0.1), 0 1px 10px 0 rgba(13, 46, 105, 0.1)',
			margin: 0,
			overflow: 'hidden',
			padding: 0,
			zIndex: 10,
		}),
		menuList: styles => ({
			...styles,
			padding: 0,
			'::-webkit-scrollbar': {
				width: 7,
			},
			'::-webkit-scrollbar-track': {
				background: 'transparent',
			},
			'::-webkit-scrollbar-thumb': {
				background: '#0000ff',
				borderRadius: 4,
			},
		}),
		indicatorSeparator: styles => ({
			...styles,
			display: 'none',
		}),
		dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
			...styles,
			alignItems: 'center',
			color: '#000000',
			display: 'flex',
			height: '100%',
			margin: '0 10px 0 0',
			padding: 0,
			transform: `rotate(${menuIsOpen ? '180deg' : '0'})`,
			transformOrigin: 'center',
			transition: '0.4s',
			width: 15,
			':hover': {
				color: '#000000',
			},
		}),
		indicatorsContainer: styles => ({ ...styles, overflow: 'hidden' }),
		valueContainer: styles => ({
			...styles,
			display: 'flex',
			fontSize: 15,
			height: '100%',
			padding: 12,
		}),
	},
};
const ReactAceEditor = ({
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
			label: '12px',
			value: 12,
		},
		{
			label: '13px',
			value: 13,
		},
		{
			label: '14px',
			value: 14,
		},
		{
			label: '15px',
			value: 15,
		},
		{
			label: '16px',
			value: 16,
		},
		{
			label: '17px',
			value: 17,
		},
		{
			label: '18px',
			value: 18,
		},
		{
			label: '19px',
			value: 19,
		},
		{
			label: '20px',
			value: 20,
		},
		{
			label: '21px',
			value: 21,
		},
		{
			label: '22px',
			value: 22,
		},
	]);
	const [fontSize, setFontSize] = useState({
		label: '14px',
		value: 14,
	});
	const onChangeTheme = value => {
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
	const onChangeFontSize = value => {
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
	const onChangeLanguage = value => {
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
		onChangeFontSize();
		onChangeLanguage();
		onChangeTheme();
	}, []);
	return (
		<StyledElement>
			<div className='editor-header'>
				<div className='editor-theme'>
					<ReactSelect
						{...selectOptions}
						onChange={onChangeTheme}
						options={themes}
						value={theme}
					/>
				</div>
				<div className='editor-font-size'>
					<ReactSelect
						{...selectOptions}
						onChange={onChangeFontSize}
						options={fontSizes}
						value={fontSize}
					/>
				</div>
				<div className='editor-language'>
					<ReactSelect
						{...selectOptions}
						onChange={onChangeLanguage}
						options={languages}
						value={language}
					/>
				</div>
				<div className='editor-run'>
					<button onClick={onSubmit}>Run code</button>
				</div>
			</div>
			<ReactAce
				{...options({ theme, language })}
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
ReactAceEditor.defaultProps = {
	isDisabled: false,
	language: {
		id: 3,
		label: 'Javascript',
		value: 'javascript',
	},
	languages: [],
	value: '',
};
ReactAceEditor.propTypes = {
	isDisabled: bool,
	language: { label: string, value: string },
	languages: array,
	onChange: func.isRequired,
	onFocus: func.isRequired,
	onSubmit: func.isRequired,
	setLanguage: func.isRequired,
	value: string,
};
export default ReactAceEditor;

import AceBuilds from 'ace-builds';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-css';
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
import { array, bool, func, number, shape, string } from 'prop-types';
import { useEffect, useState } from 'react';
import ReactAce from 'react-ace';
import ReactSelect, { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
const StyledElement = styled.div`
   border-radius: 12px;
   box-shadow: 0 1px 10px 0 rgba(13, 46, 105, 0.1),
      0 1px 10px 0 rgba(13, 46, 105, 0.1);
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
            background-color: #5254f1;
            border-radius: 6px;
            border: none;
            color: rgb(255, 255, 255);
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
const getOptions = ({ language, theme }) => ({
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
      mode: language?.value,
      showLineNumbers: true,
      tabSize: 3,
      theme: theme?.value,
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
const IndicatorSeparator = () => null;
const animation = keyframes`
	0% {
		opacity: 0.1;
		transform: scale(0.6);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
`;
const StyledMenu = styled.div`
   & .react-select-menu {
      animation: ${animation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background-color: rgb(255, 255, 255);
      border-radius: 8px;
      border: none;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
      margin: 0;
      overflow: hidden;
      padding: 0;
      transform-origin: top;
   }
`;
const Menu = props => (
   <StyledMenu>
      <components.Menu {...props} className='react-select-menu'>
         {props?.children}
      </components.Menu>
   </StyledMenu>
);
const selectOptions = {
   components: { IndicatorSeparator, Menu },
   isClearable: false,
   isMulti: false,
   isSearchable: false,
   maxMenuHeight: 250,
   styles: {
      option: (styles, { isSelected, isDisabled, isFocused }) => ({
         ...styles,
         backgroundColor: isDisabled
            ? 'rgb(247, 248, 252)'
            : isSelected
            ? '#5254f1'
            : isFocused
            ? 'rgba(82, 85, 241, 0.1)'
            : 'rgb(255, 255, 255)',
         borderRadius: 6,
         color: isDisabled
            ? 'rgb(105, 111, 133)'
            : isSelected
            ? 'rgb(255, 255, 255)'
            : isFocused
            ? 'rgb(37, 42, 59)'
            : 'rgb(37, 42, 59)',
         cursor: isDisabled ? 'not-allowed' : 'pointer',
         fontSize: 15,
         height: 40,
         overflow: 'hidden',
         padding: '12px 16px',
         textOverflow: 'ellipsis',
         whiteSpace: 'nowrap',
         width: '100%',
         ':hover': {
            backgroundColor: isDisabled
               ? 'rgb(247, 248, 252)'
               : isSelected
               ? '#5254f1'
               : 'rgba(82, 85, 241, 0.1)',
         },
      }),
      singleValue: styles => ({
         ...styles,
         color: 'rgb(37, 42, 59)',
         margin: 0,
      }),
      control: styles => ({
         ...styles,
         backgroundColor: '#f5f5f5',
         border: 'none',
         borderRadius: 8,
         boxShadow: 'none',
         color: 'black',
         cursor: 'pointer',
         height: 42,
         outline: 'none',
         padding: 0,
         width: '100%',
         ':hover': {
            border: 'none',
         },
      }),
      menu: styles => ({
         ...styles,
         backgroundColor: 'rgb(245, 245, 245)',
         border: 'none',
         borderRadius: 8,
         boxShadow:
            '0 1px 10px 0 rgba(13, 46, 105, 0.1), 0 1px 10px 0 rgba(13, 46, 105, 0.1)',
         margin: 0,
         overflow: 'hidden',
         padding: 0,
         zIndex: 10,
      }),
      menuList: styles => ({
         ...styles,
         padding: 5,
         '::-webkit-scrollbar': {
            width: 7,
         },
         '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
         },
         '::-webkit-scrollbar-thumb': {
            backgroundColor: '#5254f1',
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
         color: 'rgb(37, 42, 59)',
         display: 'flex',
         height: '100%',
         margin: '0 10px 0 0',
         padding: 0,
         transform: `rotate(${menuIsOpen ? '180deg' : '0'})`,
         transformOrigin: 'center',
         transition: '0.4s',
         width: 15,
         ':hover': {
            color: 'rgb(37, 42, 59)',
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
         label: 'Monokai',
         value: 'monokai',
      },
      {
         label: 'Kuroir',
         value: 'kuroir',
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
      label: 'Monokai',
      value: 'monokai',
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
      label: '15px',
      value: 15,
   });
   const onChangeTheme = value => {
      const defaultTheme = JSON.parse(localStorage.getItem('editor-theme'));
      const theme = value
         ? value
         : defaultTheme
         ? defaultTheme
         : {
              label: 'Monokai',
              value: 'monokai',
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
              label: '15px',
              value: 15,
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
              id: 1,
              label: 'Html',
              value: 'html',
           };
      setLanguage(language);
      AceBuilds.edit('editor')
         .getSession()
         .setMode(`ace/mode/${language.value}`);
      localStorage.setItem('editor-language', JSON.stringify(language));
   };
   useEffect(() => {
      const onChangeTheme = () => {
         const defaultTheme = JSON.parse(localStorage.getItem('editor-theme'));
         const theme = defaultTheme
            ? defaultTheme
            : {
                 label: 'Monokai',
                 value: 'monokai',
              };
         setTheme(theme);
         localStorage.setItem('editor-theme', JSON.stringify(theme));
         AceBuilds.edit('editor').setTheme(`ace/theme/${theme.value}`);
      };
      const onChangeFontSize = () => {
         const defaultFontSize = JSON.parse(
            localStorage.getItem('editor-font-size')
         );
         const fontSize = defaultFontSize
            ? defaultFontSize
            : {
                 label: '15px',
                 value: 15,
              };
         setFontSize(fontSize);
         localStorage.setItem('editor-font-size', JSON.stringify(fontSize));
      };
      const onChangeLanguage = () => {
         const defaultTheme = JSON.parse(
            localStorage.getItem('editor-language')
         );
         const language = defaultTheme
            ? defaultTheme
            : {
                 id: 1,
                 label: 'Html',
                 value: 'html',
              };
         setLanguage(language);
         AceBuilds.edit('editor')
            .getSession()
            .setMode(`ace/mode/${language.value}`);
         localStorage.setItem('editor-language', JSON.stringify(language));
      };
      onChangeFontSize();
      onChangeLanguage();
      onChangeTheme();
   }, [setLanguage]);
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
            {...getOptions({ theme, language })}
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
      id: 1,
      label: 'Html',
      value: 'html',
   },
   languages: [],
   value: '',
};
ReactAceEditor.propTypes = {
   isDisabled: bool,
   language: shape({ label: string, value: string, id: number }),
   languages: array,
   onChange: func.isRequired,
   onFocus: func,
   onSubmit: func,
   setLanguage: func.isRequired,
   value: string,
};
export default ReactAceEditor;

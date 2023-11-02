import { Fragment, useState } from 'react';
import styled from 'styled-components';
import ReactAceEditor from './ReactAceEditor';
import ReactMonacoEditor from './ReactMonacoEditor';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 600px;
   justify-content: center;
   & .code-editor-container {
      width: 800px;
      height: 100%;
      max-width: 100%;
   }
`;
const reactAceLanguages = [
   { id: 1, label: 'Html', value: 'html' },
   { id: 2, label: 'CSS', value: 'css' },
   { id: 3, label: 'Javascript', value: 'javascript' },
   { id: 4, label: 'Typescript', value: 'typescript' },
   { id: 5, label: 'PHP 7', value: 'php' },
   { id: 6, label: 'Python', value: 'python' },
   { id: 7, label: 'Go', value: 'golang' },
   { id: 8, label: 'Dart', value: 'dart' },
   { id: 9, label: 'C#', value: 'csharp' },
   { id: 10, label: 'C/C++', value: 'c_cpp' },
   { id: 11, label: 'Java', value: 'java' },
   { id: 12, label: 'Ruby', value: 'ruby' },
   { id: 13, label: 'Rust', value: 'rust' },
   { id: 14, label: 'Pascal', value: 'pascal' },
   { id: 15, label: 'Haskell', value: 'haskell' },
];
const reactMonacoLanguages = [
   { id: 1, label: 'Html', value: 'html' },
   { id: 2, label: 'CSS', value: 'css' },
   { id: 3, label: 'Javascript', value: 'javascript' },
   { id: 4, label: 'Typescript', value: 'typescript' },
   { id: 5, label: 'PHP 7', value: 'php' },
   { id: 6, label: 'Python', value: 'python' },
   { id: 7, label: 'Go', value: 'golang' },
   { id: 8, label: 'Dart', value: 'dart' },
   { id: 9, label: 'C#', value: 'csharp' },
   { id: 10, label: 'C/C++', value: 'c_cpp' },
   { id: 11, label: 'Java', value: 'java' },
   { id: 12, label: 'Ruby', value: 'ruby' },
   { id: 13, label: 'Rust', value: 'rust' },
   { id: 14, label: 'Pascal', value: 'pascal' },
   { id: 15, label: 'Haskell', value: 'haskell' },
];
const App = () => {
   const [reactAceValue, setReactAceValue] = useState('');
   const [reactMonacoValue, setReactMonacoValue] = useState('');
   const [reactAceLanguage, setReactAceLanguage] = useState({
      id: 1,
      label: 'Html',
      value: 'html',
   });
   const [reactMonacoLanguage, setReactMonacoLanguage] = useState({
      id: 1,
      label: 'Javascript',
      value: 'javascript',
   });
   return (
      <Fragment>
         <h1 style={{ textAlign: 'center' }}>Code Editor</h1>
         <h4 style={{ textAlign: 'center' }}>
            <a href='https://github.com/hayitmurod707/code-editor'>Github</a>
         </h4>
         <h2 style={{ textAlign: 'center' }}>React Ace Editor</h2>
         <br />
         <StyledElement>
            <div className='code-editor-container'>
               <ReactAceEditor
                  language={reactAceLanguage}
                  languages={reactAceLanguages}
                  onChange={setReactAceValue}
                  onSubmit={() => console.log(reactAceValue)}
                  setLanguage={setReactAceLanguage}
                  value={reactAceValue}
               />
            </div>
         </StyledElement>
         <br />
         <h2 style={{ textAlign: 'center' }}>React Monaco Editor</h2>
         <br />
         <StyledElement>
            <div className='code-editor-container'>
               <ReactMonacoEditor
                  language={reactMonacoLanguage}
                  languages={reactMonacoLanguages}
                  onChange={setReactMonacoValue}
                  onSubmit={() => console.log(reactMonacoValue)}
                  setLanguage={setReactMonacoLanguage}
                  value={reactMonacoValue}
               />
            </div>
         </StyledElement>
         <br />
      </Fragment>
   );
};
export default App;

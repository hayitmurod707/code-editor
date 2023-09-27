import { Fragment, useState } from 'react';
import styled from 'styled-components';
import ReactAceEditor from './ReactAceEditor';
// import ReactMonacoEditor from './ReactMonacoEditor';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 600px;
   justify-content: center;
   & .code-editor-container {
      width: 800px;
   }
`;
const App = () => {
   const [value, setValue] = useState('');
   const [languages] = useState([
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
   ]);
   const [language, setLanguage] = useState({
      id: 1,
      label: 'Html',
      value: 'html',
   });
   return (
      <Fragment>
         <h1 style={{ textAlign: 'center' }}>Code Editor</h1>
         <h4 style={{ textAlign: 'center' }}>
            <a href='https://github.com/hayitmurod707/code-editor'>Github</a>
         </h4>
         <StyledElement>
            <div className='code-editor-container'>
               <h2>React Ace Editor</h2>
               <ReactAceEditor
                  language={language}
                  languages={languages}
                  onChange={setValue}
                  onSubmit={() => console.log(value)}
                  setLanguage={setLanguage}
                  value={value}
               />
            </div>
         </StyledElement>
         {/* <StyledElement>
            <div className='code-editor-container' style={{ height: 600 }}>
               <h2>React Monaco Editor</h2>
               <ReactMonacoEditor />
            </div>
         </StyledElement> */}
      </Fragment>
   );
};
export default App;

import { func, string } from 'prop-types';
import React from 'react';
import StyledElement from './StyledElement';
const CodeEditor = () => {
	return <StyledElement>CodeEditor</StyledElement>;
};
CodeEditor.defaultProps = {};
CodeEditor.propTypes = { value: string, onChange: func };
export default CodeEditor;

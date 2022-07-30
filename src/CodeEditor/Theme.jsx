import { array, func, object } from 'prop-types';
import ReactSelect from 'react-select/creatable';
const defaultOptions = {
	isClearable: false,
	isMulti: false,
	isSearchable: false,
	maxMenuHeight: 240,
	menuPlacement: 'auto',
	styles: {
		option: (styles, { isSelected, isDisabled }) => ({
			...styles,
			background: isDisabled
				? '#808080'
				: isSelected
				? '#0000ff'
				: '#f7f8fc',
			color: isDisabled ? '#000000' : isSelected ? '#ffffff' : '#000000',
			cursor: isDisabled ? 'not-allowed' : 'pointer',
			fontSize: '15px',
			height: '48px',
			overflow: 'hidden',
			padding: '15px 16px',
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
			margin: '0',
		}),
		control: styles => ({
			...styles,
			background: '#f7f8fc',
			border: '1px solid #e2e4ea',
			borderRadius: '8px',
			boxShadow: 'none',
			color: 'black',
			cursor: 'pointer',
			height: '48px',
			minWidth: '100px',
			outline: 'none',
			padding: '0px',
			width: '100%',
			':hover': {
				border: '1px solid #e2e4ea',
			},
		}),
		menu: styles => ({
			...styles,
			background: '#f7f8fc',
			border: 'none',
			borderRadius: '8px',
			boxShadow:
				'0 1px 10px 0 rgba(13, 46, 105, 0.1), 0 1px 10px 0 rgba(13, 46, 105, 0.1)',
			margin: '0px',
			overflow: 'hidden',
			padding: '0px',
		}),
		menuList: styles => ({
			...styles,
			padding: '0px',
			'::-webkit-scrollbar': {
				width: '7px',
				height: '7px',
			},
			'::-webkit-scrollbar-track': {
				background: 'transparent',
			},
			'::-webkit-scrollbar-thumb': {
				background: '#0000ff',
				borderRadius: '4px',
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
			margin: '0 14px 0 0',
			padding: '0',
			transform: `rotate(${menuIsOpen ? '180deg' : '0'})`,
			transformOrigin: 'center',
			transition: '0.4s',
			width: '19px',
			':hover': {
				color: '#000000',
			},
		}),
		indicatorsContainer: styles => ({ ...styles, overflow: 'hidden' }),
		valueContainer: styles => ({
			...styles,
			display: 'flex',
			fontSize: '15px',
			height: '48px',
			padding: '15px 16px',
		}),
	},
};
const Theme = props => <ReactSelect {...defaultOptions} {...props} />;
Theme.defaultProps = {
	options: [],
	value: { label: '', value: null },
};
Theme.propTypes = {
	onChange: func.isRequired,
	options: array,
	value: object.isRequired,
};
export default Theme;

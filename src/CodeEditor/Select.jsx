import { array, func, shape, string } from 'prop-types';
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
const Select = props => <ReactSelect {...defaultOptions} {...props} />;
Select.defaultProps = {
	options: [],
	value: {
		label: '',
		value: '',
	},
};
Select.propTypes = {
	onChange: func.isRequired,
	options: array,
	value: shape({ label: string, value: string.isRequired }),
};
export default Select;

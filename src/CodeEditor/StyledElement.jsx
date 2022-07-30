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
export default StyledElement;

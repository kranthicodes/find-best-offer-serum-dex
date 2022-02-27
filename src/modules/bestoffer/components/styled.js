import styled, { keyframes } from 'styled-components';
import Select from 'react-select';
import { device } from '~/modules/common/utils/constants';

export const ViewWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #2f2f31;
  border-radius: 7px;
  padding: 16px 0;
  width: 100%;
  text-align: center;
  @media ${device.laptop} {
    width: 450px;
  }
`;

export const TitleWrapper = styled.div`
  padding: 32px;
`;

export const Title = styled.h2`
  line-height: 18px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const PairSelectWrapper = styled.div`
  margin-top: 24px;
  text-align: left;
  padding: 0 16px;
  @media ${device.laptop} {
    padding: 0 32px;
  }
`;

export const PairSelectTitle = styled.span`
  font-size: 14px;
  opacity: 0.5;
  font-weight: 500;
`;

export const StyledPairSelect = styled(Select)`
  margin-top: 8px;
  height: 56px;
`;

export const CustomOrderSizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  text-align: left;
  padding: 0 16px;
  @media ${device.laptop} {
    padding: 0 32px;
  }
`;

export const CustomOrderSizeInput = styled.input`
  margin-top: 8px;
  height: 56px;
  border-radius: 8px;
  background-color: rgba(100, 100, 108, 0.2);
  border: none;
  padding: 6px 12px;
  font-size: 18px;
  color: inherit;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const OrderSideFilterWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  padding: 0 16px;
  @media ${device.laptop} {
    padding: 0 32px;
  }
`;

export const OrderSideCheckBoxWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`;

export const OrderSideCheckBoxLabel = styled.label`
  margin-left: 6px;
`;

export const OrderSideCheckBox = styled.input`
  height: 16px;
  width: 16px;
`;

export const SubmitWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  @media ${device.laptop} {
    padding: 0 32px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  background-color: #015cc8;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #074c9b;
  }
  &:active {
    transform: scale(0.99);
  }
  &:disabled {
    cursor: no-drop;
    background-color: #79b1f2;
  }
`;

export const Seperator = styled.div`
  height: 0.5px;
  background-color: #999;
  opacity: 0.5;
  width: 90%;
  margin: 0 auto;
  padding: 0 16px;
  @media ${device.laptop} {
    padding: 0 32px;
  }
`;

export const OfferErrorText = styled.span`
  font-weight: 500;
  color: red;
`;
export const OfferResultWrapper = styled.div`
  display: flex;
  padding: 32px 32px;
  justify-content: space-around;
`;

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfferLabel = styled.span`
  opacity: 0.5;
  font-weight: 500;
  text-transform: capitalize;
`;

export const OfferValue = styled.span`
  color: inherit;
  font-size: 18px;
  color: ${(p) => (p.side === 'buy' ? 'greenyellow' : 'red')};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid whitesmoke;
  border-right: 2px solid whitesmoke;
  border-bottom: 2px solid whitesmoke;
  border-left: 4px solid #015cc8;
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const reselectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'rgba(100,100,108,.2)',
    minHeight: '100%',
    borderRadius: '8px',
    border: 'none'
  }),
  menuList: (styles) => ({
    ...styles,
    backgroundColor: '#2b2b2e'
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: '#2b2b2e',
      fontSize: '14px'
    };
  },
  input: (styles) => ({ ...styles, color: 'inherit' }),
  // placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, color: 'inherit' })
};

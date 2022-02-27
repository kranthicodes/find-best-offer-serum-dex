import styled from 'styled-components';
import { device } from '../utils/constants';
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  padding: 0 25px;
  align-items: center;
  @media ${device.laptop} { 
    width: 50%;
  }
`;

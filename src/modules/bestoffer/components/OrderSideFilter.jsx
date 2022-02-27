import React from 'react';
import {
  OrderSideCheckBox,
  OrderSideCheckBoxLabel,
  OrderSideCheckBoxWrapper,
  OrderSideFilterWrapper
} from './styled';
import { useBestOfferStore } from '../api/store';

function OrderSideFilter() {
  const [selectedSides, setSelectedSides] = useBestOfferStore(({ moduleState, actions }) => [
    moduleState.selectedSides,
    actions.setSelectedSides
  ]);

  const orderSideChangeHandler = React.useCallback(
    function (evt) {
      const { checked, value } = evt.target;
      let newSelectedSides = [...selectedSides, value];
      if (selectedSides.includes(value)) {
        newSelectedSides = newSelectedSides.filter((side) => side !== value);
      }
      setSelectedSides(newSelectedSides);
    },
    [selectedSides, setSelectedSides]
  );

  return (
    <OrderSideFilterWrapper>
      <OrderSideCheckBoxWrapper>
        <OrderSideCheckBox onChange={orderSideChangeHandler} type="checkbox" value="Bid" />
        <OrderSideCheckBoxLabel>Bid</OrderSideCheckBoxLabel>
      </OrderSideCheckBoxWrapper>
      <OrderSideCheckBoxWrapper>
        <OrderSideCheckBox onChange={orderSideChangeHandler} type="checkbox" value="Ask" />
        <OrderSideCheckBoxLabel>Ask</OrderSideCheckBoxLabel>
      </OrderSideCheckBoxWrapper>
    </OrderSideFilterWrapper>
  );
}
export default OrderSideFilter;

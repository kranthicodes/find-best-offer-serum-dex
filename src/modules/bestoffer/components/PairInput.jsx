import React from 'react';
import {
  StyledPairSelect,
  CustomOrderSizeInput,
  CustomOrderSizeWrapper,
  PairSelectTitle,
  PairSelectWrapper,
  reselectStyles
} from './styled';
import { useBestOfferStore } from '../api/store';
import useMarkets from '../hooks/useMarkets';

function PairInput() {
  const [data, defaultOption] = useMarkets();

  const [assetSize, setFromAsset, setToAsset, setAssetSize] = useBestOfferStore(
    ({ moduleState, actions }) => [
      moduleState.assetSize,
      actions.setFromAsset,
      actions.setToAsset,
      actions.setAssetSize
    ]
  );
  const assetPairChangeHandler = React.useCallback(
    (pair) => {
      const { value, pairSide } = pair;
      if(pairSide === 'from'){
        setFromAsset(value)
      }
      if(pairSide === 'to'){
        setToAsset(value)
      }
    },
    [setFromAsset,setToAsset]
  );
  const assetSizeChangeHandler = React.useCallback(
    (evt) => {
      const { value } = evt.target;
      if (value < 0) {
        return;
      }
      setAssetSize(value);
    },
    [setAssetSize]
  );
  return (
    <>
      <PairSelectWrapper>
        <PairSelectTitle>From</PairSelectTitle>
        <StyledPairSelect
          onChange={assetPairChangeHandler}
          styles={reselectStyles}
          defaultValue={defaultOption}
          options={data.from}
        />
      </PairSelectWrapper>

      <CustomOrderSizeWrapper>
        <PairSelectTitle>Asset Size</PairSelectTitle>
        <CustomOrderSizeInput
          data-testid="asset-size-input"
          value={assetSize}
          onChange={assetSizeChangeHandler}
          placeholder="0"
          type="number"
        />
      </CustomOrderSizeWrapper>
      <PairSelectWrapper>
        <PairSelectTitle>To</PairSelectTitle>
        <StyledPairSelect
          onChange={assetPairChangeHandler}
          styles={reselectStyles}
          defaultValue={defaultOption}
          options={data.to}
        />
      </PairSelectWrapper>
    </>
  );
}
export default PairInput;

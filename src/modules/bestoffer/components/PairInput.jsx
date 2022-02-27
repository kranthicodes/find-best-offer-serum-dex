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

  const [assetSize, setSelectedPair, setAssetSize] = useBestOfferStore(
    ({ moduleState, actions }) => [
      moduleState.assetSize,
      actions.setSelectedPair,
      actions.setAssetSize
    ]
  );
  const assetPairChangeHandler = React.useCallback(
    (pair) => {
      const { value } = pair;
      setSelectedPair(value);
    },
    [setSelectedPair]
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
        <PairSelectTitle>Asset Pair</PairSelectTitle>
        <StyledPairSelect
          onChange={assetPairChangeHandler}
          styles={reselectStyles}
          defaultValue={defaultOption}
          options={data}
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
    </>
  );
}
export default PairInput;

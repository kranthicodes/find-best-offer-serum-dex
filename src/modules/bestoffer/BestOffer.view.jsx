import React from 'react';
import {
  ViewWrapper,
  Title,
  TitleWrapper,
  AssetPairInput,
  OrderSideFilter,
  Button,
  SubmitWrapper,
  OfferResult,
  LoadingSpinner
} from './components';
import { useBestOfferStore } from './api/store';
import { useBestOfferContext } from './utils/context';

function BestOfferView() {
  const [fromAsset, toAsset,selectedSides] = useBestOfferStore(({ moduleState }) => [
    moduleState.fromAsset,
    moduleState.toAsset,
    moduleState.selectedSides
  ]);
  const { loading, submitHandler, data, error } = useBestOfferContext();

  return (
    <ViewWrapper>
      <TitleWrapper>
        <Title>Find Best Offer</Title>
      </TitleWrapper>
      <AssetPairInput />
      <OrderSideFilter />
      <SubmitWrapper>
        {!loading && (
          <Button onClick={submitHandler} disabled={!fromAsset || !toAsset || !selectedSides.length}>
            Submit
          </Button>
        )}
        {loading && <LoadingSpinner />}
      </SubmitWrapper>
      <OfferResult data={data} error={error} />
    </ViewWrapper>
  );
}

export default BestOfferView;

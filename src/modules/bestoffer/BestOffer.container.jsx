import React from 'react';
import { FlexCol } from '../common';
import BestOfferView from './BestOffer.view';
import useBestOffer from './hooks/useBestOffer';
import { BestOfferContext } from './utils/context';

function BestOfferContainer() {
  const { data, loading, error, setError, getOrderBookData } = useBestOffer();
  const submitHandler = React.useCallback(
    function () {
      getOrderBookData();
    },
    [getOrderBookData]
  );
  return (
    <FlexCol>
      <BestOfferContext.Provider value={{data, loading, error, setError,submitHandler}}>
        <BestOfferView />
      </BestOfferContext.Provider>
    </FlexCol>
  );
}
export default BestOfferContainer;

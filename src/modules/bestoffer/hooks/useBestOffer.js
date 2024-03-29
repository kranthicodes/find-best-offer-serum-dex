import React, { useState } from 'react';
import { Market } from '@project-serum/serum';
import { Connection } from '@solana/web3.js';
import { useBestOfferStore } from '../api/store';
import { getBestOfferFromOrderBook } from '../api/orderBookHelpers';
import { execBasedOnOrderSide, checkEq } from '../utils/iterableHelpers';
import { SOLANA_MAINNET_CLUSTER_URL } from '../utils/constants';

export default function useBestOffer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [selectedSides, selectedPair, assetSize] = useBestOfferStore(({ moduleState }) => [
    moduleState.selectedSides,
    moduleState.selectedPair,
    moduleState.assetSize
  ]);
  const connection = React.useMemo(() => new Connection(SOLANA_MAINNET_CLUSTER_URL), []);

  const getOrderBookData = React.useCallback(
    async function () {
      try {
        if (error) {
          setError(null);
          setData([]);
        }
        setLoading(true);
        const { address: marketAddress, programId: programAddress } = selectedPair;
        const market = await Market.load(connection, marketAddress, {}, programAddress);
        const bestOfferData = await execBasedOnOrderSide(
          connection,
          selectedSides,
          +assetSize,
          market,
          getBestOfferFromOrderBook,
          checkEq
        );
        setData(bestOfferData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    },
    [connection, selectedPair, selectedSides, error, assetSize]
  );
  return { data, loading, error, setError, getOrderBookData };
}

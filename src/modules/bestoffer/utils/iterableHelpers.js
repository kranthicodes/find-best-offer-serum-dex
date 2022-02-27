export async function execBasedOnOrderSide(connection, sides, size, market, getOfferFn, checkEq) {
  switch (true) {
    case sides.indexOf('Bid') > -1 && sides.indexOf('Ask') > -1: {
      const bids = await market.loadBids(connection);
      const asks = await market.loadAsks(connection);
      const bestBidOffer = await getOfferFn(bids, size, 'Buy', checkEq);
      const bestAskOffer = await getOfferFn(asks, size, 'Sell', checkEq);
      return [bestBidOffer, bestAskOffer];
    }
    case sides.indexOf('Bid') > -1: {
      const bids = await market.loadBids(connection);
      const bestBidOffer = await getOfferFn(bids, size, 'Buy', checkEq);
      return [bestBidOffer];
    }
    case sides.indexOf('Ask') > -1: {
      const asks = await market.loadAsks(connection);
      const bestAskOffer = await getOfferFn(asks, size, 'Sell', checkEq);
      return [bestAskOffer];
    }
    default:
      return [];
  }
}
export function checkEq(a, b) {
  if (Number.parseFloat(a).toFixed(4) === Number.parseFloat(b).toFixed(4)) {
    return true;
  } else {
    return false;
  }
}

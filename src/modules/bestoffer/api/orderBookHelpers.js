import { MARKETS } from "@project-serum/serum";

export function getBestOfferFromOrderBook(orderBookData, size, side, checkEq) {
  const orderBookArr = Array.from(orderBookData);
  const notFoundObj = { side, price: 'Not found.' };
  return new Promise((resolve, reject) => {
    const isSizeAvailable = size !== 0;
    let order = null;
    if (!orderBookArr.length) {
      reject(new Error("No Data available, Try again later."));
    }
    switch (side) {
      case 'Buy': {
        if (isSizeAvailable) {
          for (let i = orderBookArr.length - 1; i >= 0; i--) {
            order = orderBookArr[i];
            if (checkEq(size, order.size)) {
              resolve({ ...order, price: order.price.toFixed(2) });
              return;
            }
          }
          resolve(notFoundObj);
        } else {
          order = orderBookArr[orderBookArr.length - 1];
          resolve({ ...order, price: order.price.toFixed(2) });
        }
        return;
      }
      case 'Sell': {
        if (isSizeAvailable) {
          for (let i = 0; i < orderBookArr.length; i++) {
            order = orderBookArr[i];
            if (checkEq(size, order.size)) {
              resolve({ ...order, price: order.price.toFixed(2) });
              return;
            }
          }
          resolve(notFoundObj);
        } else {
          order = orderBookArr[0];
          resolve({ ...order, price: order.price.toFixed(2) });
        }
        return;
      }
    }
  });
}
export const getMarketDetails = (from, to) => {
  const assetPair = `${from}/${to}`;
  for (let i = 0; i < MARKETS.length; i++) {
    const market = MARKETS[i];
    if (market.name === assetPair && !market.deprecated) {
      return market;
    }
  }
  throw new Error('Pair not supported.')
};
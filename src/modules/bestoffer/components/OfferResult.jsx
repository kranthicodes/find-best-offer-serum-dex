import React from 'react';
import {
  OfferLabel,
  OfferResultWrapper,
  OfferValue,
  OfferWrapper,
  Seperator,
  OfferErrorText
} from './styled';

function OfferResult({ data, error }) {
  if (error) {
    return (
      <>
        <Seperator />
        <OfferResultWrapper>
          <OfferErrorText data-testid="offer-error">
            {error instanceof Error
              ? error.toString().replace(/^Error:\s*/, '')
              : 'Something went wrong while fetching the best offer.'}
          </OfferErrorText>
        </OfferResultWrapper>
      </>
    );
  }
  if (!data.length) {
    return null;
  }
  return (
    <>
      <Seperator />
      <OfferResultWrapper>
        {data.map((offer,idx) => (
          <OfferWrapper data-testid={`offer-${idx+1}`} key={idx}>
            <OfferLabel>{offer.side}</OfferLabel>
            <OfferValue side={offer.side}>{offer.price}</OfferValue>
          </OfferWrapper>
        ))}
      </OfferResultWrapper>
    </>
  );
}
export default React.memo(OfferResult);
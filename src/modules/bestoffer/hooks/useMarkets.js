import React from 'react';
import { MARKETS } from '@project-serum/serum';

export default function useMarkets() {
  const [options, setOptions] = React.useState({ from: [], to: [] });
  const [defaultOption, setDefaultOptions] = React.useState(null);

  function transformMarketsToOptions() {
    const fromCounter = {};
    const toCounter = {};
    const data = MARKETS.reduce(
      (accumulator, currentValue) => {
        if (!currentValue.deprecated) {
          const [from, to] = currentValue.name.split('/');
          const fromOption = { value: from, label: from, pairSide: 'from' };
          const toOption = { value: to, label: to, pairSide: 'to' };
          if (!fromCounter[from]) {
            fromCounter[from] = true;
            accumulator.from.push(fromOption);
          }
          if (!toCounter[to]) {
            toCounter[to] = true;
            accumulator.to.push(toOption);
          }
        }
        return accumulator;
      },
      { from: [], to: [] }
    );
    setOptions(data);
    setDefaultOptions(data[0]);
  }

  React.useEffect(() => {
    transformMarketsToOptions();
  }, []);

  return [options, defaultOption];
}

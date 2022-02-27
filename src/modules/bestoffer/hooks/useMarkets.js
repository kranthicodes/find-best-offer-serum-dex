import React from 'react';
import { MARKETS } from '@project-serum/serum';

export default function useMarkets() {
  const [options, setOptions] = React.useState([]);
  const [defaultOption, setDefaultOptions] = React.useState(null);

  function transformMarketsToOptions() {
    const data = MARKETS.reduce((accumulator, currentValue) => {
      if (!currentValue.deprecated) {
        const option = { value: currentValue, label: currentValue.name };
        accumulator.push(option);
      }
      return accumulator;
    }, []);
    setOptions(data);
    setDefaultOptions(data[0]);
  }

  React.useEffect(() => {
    transformMarketsToOptions();
  }, []);

  return [options, defaultOption];
}

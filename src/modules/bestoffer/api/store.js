import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';

export const useBestOfferStore = create(
  devtools((set, get) => ({
    moduleState: {
      selectedPair: null,
      assetSize: 0,
      selectedSides: []
    },
    actions: {
      setSelectedPair(pairVal) {
        set(
          produce((state) => {
            state.moduleState.selectedPair = pairVal;
          })
        );
      },
      setAssetSize(size) {
        set(
          produce((state) => {
            state.moduleState.assetSize = size;
          })
        );
      },
      setSelectedSides(sides) {
        set(
          produce((state) => {
            state.moduleState.selectedSides = sides;
          })
        );
      }
    }
  }))
);

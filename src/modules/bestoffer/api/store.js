import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';

export const useBestOfferStore = create(
  devtools((set, get) => ({
    moduleState: {
      fromAsset: null,
      toAsset:null,
      assetSize: 0,
      selectedSides: []
    },
    actions: {
      setFromAsset(val) {
        set(
          produce((state) => {
            state.moduleState.fromAsset = val;
          })
        );
      },
      setToAsset(val) {
        set(
          produce((state) => {
            state.moduleState.toAsset = val;
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

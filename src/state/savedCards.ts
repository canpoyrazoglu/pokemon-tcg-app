import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "./store";

type SavedCardsState = {
    savedIds: string[];
}

type Action<T> = {
    payload: T
}

type StringAction = Action<string>

const initialState: SavedCardsState = {
    savedIds: []
}

/** State representing data and functions for saved cards. */
export const savedCards = createSlice({
    name: 'savedCards',
    initialState,
    reducers: {
        addCard: (state, action: StringAction) => {
            console.log(action);
            state.savedIds = [...state.savedIds, action.payload];
        },
        removeCard: (state, action: StringAction) => {
            console.log(action);
            state.savedIds = state.savedIds.filter(id => id != action.payload);
        },
    }
})

type PartialSavedCardsState = Pick<StoreState, 'savedCards'>;

export const savedIdsSelector = (state: PartialSavedCardsState) => state.savedCards.savedIds;
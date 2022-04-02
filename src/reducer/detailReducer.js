const initialState = [
    {  title: "", desc: "", mode: "", pg: "" }
];

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            state = [...state, action.payload];
            return state
        default:
            return state
    }
}
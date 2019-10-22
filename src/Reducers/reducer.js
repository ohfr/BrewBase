export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const initialState = [

]
export const reducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_ITEM:
            return state.filter(cur => {
                return cur.id !== action.payload.id
            })
    }

}
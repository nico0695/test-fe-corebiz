const initialState = [];

export default function productsReducer(state = initialState, action){
    switch (action.type) {
        
        case "ADD_PRODUCT": {
            const prod = Array.from(state);
            prod.push(action.payload.id)
            return prod
        }
        case "CLEAN_PRODUCT": {
            return initialState
        }
        default: 
            return state;
    }

}
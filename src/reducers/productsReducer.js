export default function productsReducer(state = [], action){
    switch (action.type) {
        
        case "ADD_PRODUCT": {
            const prod = Array.from(state);
            prod.push(action.payload.id)
            return prod
        }
        default: 
            return state;
    }

}
const initialState = [];

export default function productsReducer(state = initialState, action){
    switch (action.type) {
        // Agrega el id de un producto al store de productos
        case "ADD_PRODUCT": {
            const prod = Array.from(state);
            prod.push(action.payload.id)
            return prod
        }
        // Limpia el store de productos
        case "CLEAN_PRODUCT": {
            return initialState
        }
        // Carga los productos del localStorage en el store
        case "RESTORE_PRODUCT": {
            let prod = action.payload.products
            return prod;
        }
        default: 
            return state;
    }

}
export const addProduct = (id) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            id,
        }
    }
}
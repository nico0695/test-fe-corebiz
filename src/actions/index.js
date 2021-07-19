export const addProduct = (id) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            id,
        }
    }
}

export const cleanProduct = (id) => {
    return {
        type: "CLEAN_PRODUCT",
    }
}
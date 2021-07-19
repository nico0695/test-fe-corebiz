export const addProduct = (id) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            id,
        }
    }
}

export const cleanProduct = () => {
    return {
        type: "CLEAN_PRODUCT",
    }
}

export const restoreProduct = (products) => {
    return {
        type: "RESTORE_PRODUCT",
        payload: {
            products,
        }
    }
}
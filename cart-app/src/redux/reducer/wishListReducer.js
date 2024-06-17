const initialState = {
    wishList: [],
    wishListedItemId:[]
}

const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishList: [...state.wishList, action.payload],
                wishListedItemId: [...state.wishListedItemId, action.payload.id]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishList: state.wishList.filter(item => item.id !== action.payload.id),
                wishListedItemId: state.wishListedItemId.filter(item => item !== action.payload.id)
            }
        default:
            return state
    }
}

export default wishListReducer
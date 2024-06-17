const initialState = {
    Cart: [],
    // unit: []
};

const addToCartreducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                Cart: [...state.Cart, action.payload],
                // unit:[...state.unit , {product:action.payload.id , quantity:}]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                Cart: state.Cart.filter((item) => item.id !== action.payload.id),

            };
        case "EMPTY_CART":
            return {
                Cart:[],
            };

        default:
            return state;
    }
};
export default addToCartreducer;
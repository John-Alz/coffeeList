
export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case "All Products":
            return state;
        case "Available Now":
            console.log(state.filter(coffe => coffe.available === true));
            break;
        default:
            return state;
    }

}
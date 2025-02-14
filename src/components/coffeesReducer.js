
export const coffeesReducer = (state, action) => {
    switch (action.type) {
        case 'set_products':
            return { ...state, coffees: action.payload, allCoffees: action.payload, loading: false };
        case 'all_products':
            return { ...state, coffees: state.allCoffees };
        case 'available_products':
            return { ...state, coffees: state.coffees.filter(coffee => coffee.available === true) }

        default:
            return state;
    }
}
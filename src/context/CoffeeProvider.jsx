import { useReducer } from "react"
import { CoffeeContext } from "./CoffeeContext"
import { coffeesReducer } from "../components/coffeesReducer"

const initialState = {
    coffees: [],
    allCoffees: [],
    loading: true
}

export const CoffeeProvider = ({ children }) => {

    const [state, dispatch] = useReducer(coffeesReducer, initialState)

    return (
        <CoffeeContext.Provider value={[state, dispatch]}>
            {children}
        </CoffeeContext.Provider>
    )
}

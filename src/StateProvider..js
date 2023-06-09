// setup data layer
// we need this
import react,{useReducer, useContext, createContext} from 'react'

// THIS IS DATA LAYER 
const StateContext = createContext()
// BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext )





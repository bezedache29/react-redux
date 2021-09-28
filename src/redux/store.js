import { createStore, combineReducers } from "redux"
import phoneReducer from "./phone/reducerPhone"
import tvReducer from "./tv/reducerTv"

// On merge les 2 reducers pour les passer a la création de store
const routeReducer = combineReducers({
  phones: phoneReducer,
  tv: tvReducer
})

const store = createStore(routeReducer)

export default store
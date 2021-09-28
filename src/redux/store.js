import { createStore, combineReducers, applyMiddleware } from "redux"
import phoneReducer from "./phone/reducerPhone"
import tvReducer from "./tv/reducerTv"
import commentsReducer from "./comments/reducerComments"
import thunk from "redux-thunk"

// On merge les 3 reducers pour les passer a la création de store
const routeReducer = combineReducers({
  phone: phoneReducer,
  tv: tvReducer,
  comments: commentsReducer
})

const store = createStore(routeReducer, applyMiddleware(thunk))

export default store
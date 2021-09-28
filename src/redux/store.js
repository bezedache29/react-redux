import { createStore, combineReducers, applyMiddleware } from "redux"
import phoneReducer from "./phone/reducerPhone"
import tvReducer from "./tv/reducerTv"
import commentsReducer from "./comments/reducerComments"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'


// On merge les 3 reducers pour les passer a la création de store
const routeReducer = combineReducers({
  phone: phoneReducer,
  tv: tvReducer,
  comments: commentsReducer
})

// const store = createStore(routeReducer, applyMiddleware(thunk))
const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
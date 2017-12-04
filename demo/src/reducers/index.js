import { combineReducers } from 'redux'
import { responsiveDrawer } from 'material-ui-responsive-drawer'
import { responsiveStateReducer } from 'redux-responsive'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer: responsiveDrawer,
  routing: routerReducer
})

export default reducers

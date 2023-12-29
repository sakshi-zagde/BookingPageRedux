// rootReducer.ts
import { combineReducers } from 'redux';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  //customer holds updated form data
  customers: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

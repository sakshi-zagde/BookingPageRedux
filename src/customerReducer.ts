
import { ADD_CUSTOMER,VIEW_CUSTOMER } from './customerActions';

const initialState: any[] = [];
//  how the application's state changes in response to actions sent to the store
const customerReducer = (state = initialState, action: any) => {
  console.log("Action type:", action.type);
  console.log("Action payload:", action.payload);
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload];
    case VIEW_CUSTOMER:
      return action.payload ||[] // Replace state with action payload for VIEW_CUSTOMER
    default:
      return state;
  }
};

export default customerReducer;


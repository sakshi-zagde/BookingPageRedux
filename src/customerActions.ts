// customerActions.ts
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const VIEW_CUSTOMER = 'VIEW_CUSTOMER';

export const addCustomer = (customer: any) => {
  return {
    type: ADD_CUSTOMER,
    payload: customer,
  };
};

export const viewCustomer = (customerData: any[]) => {
  return {
    type: VIEW_CUSTOMER,
    payload: customerData,
  };
};


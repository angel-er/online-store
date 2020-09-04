import {actions} from './actions';

const initState = {
  products: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.INIT_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

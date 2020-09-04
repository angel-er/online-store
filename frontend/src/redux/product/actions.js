export const actions = {
  INIT_PRODUCTS: 'INIT_PRODUCTS',
  INIT_PRODUCTS_SAGA: 'INIT_PRODUCTS_SAGA',
};

export const initProducts = () => ({
  type: actions.INIT_PRODUCTS_SAGA,
});

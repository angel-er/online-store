const server = process.env.REACT_APP_URL_SERVER;

export default {
  siteName: 'Store Online',
  siteIcon: 'icon-flash',
  footerText: `2020 (c) STORE ONLINE @ ${new Date().getFullYear()} created by Angel, Inc`,
  apiUrl: server,
  apiProduct: server + '/api/products',
  apiClient: server + '/api/clients',
  apiCategory: server + '/api/categories',
};

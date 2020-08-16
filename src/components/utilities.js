export const getTokenFromUrl = () => {
  const token = window.location.hash
    .substring(1)
    .split('&')
    .reduce((accum, item) => {
      let parts = item.split('=');
      accum[parts[0]] = decodeURIComponent(parts[1]);

      return accum;
    }, {});
  return token;
};

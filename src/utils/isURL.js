const isURL = (url) => {
  const regexp = new RegExp('([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?');

  if (regexp.test(url)) {
    return true;
  }

  return false;
};

module.exports = isURL;

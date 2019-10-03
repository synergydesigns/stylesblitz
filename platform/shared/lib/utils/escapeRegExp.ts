export default (str) => {
  if (!str) return '';
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
};

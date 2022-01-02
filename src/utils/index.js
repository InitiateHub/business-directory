export const truncateString = (str, maxLength) => {
  // If the length of str is less than or equal to maxLength
  return str?.length <= maxLength
    ? // just return str--don't truncate it.
      str
    : // Return str truncated with '...' concatenated to the end of str.
      `${str?.substr(0, str.lastIndexOf(' ', maxLength))}...`;
  // str.slice(0, maxLength - 1)
};

export const dialogTriggerPreProcess = val => {
  if (val) {
    document.querySelector('body').setAttribute('style', '');
  } else {
    document.querySelector('body').setAttribute('style', 'overflow: hidden;');
  }
};

export const quickNavigate = url => {
  window.open(url, '_blank');
};

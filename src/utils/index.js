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

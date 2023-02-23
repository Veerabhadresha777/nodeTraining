const urlget = (url) => {
  //return url.replace('/',"");
  return url.split('/')[1];
};
module.export = urlget;

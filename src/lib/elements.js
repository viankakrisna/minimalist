const { elements } = require('./lib');
const preact = require('preact');
module.exports = {
  ...elements(preact.h),
  e: preact.h,
  renderer: preact.render
};

import { elements } from './lib';
import preact from 'preact';
module.exports = {
  ...elements(preact.h),
  e: preact.h,
  renderer: preact.render
};


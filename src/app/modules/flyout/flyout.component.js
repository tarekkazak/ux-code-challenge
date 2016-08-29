import controller from './flyout.controller.js';
import template from './flyout.html';

const FlyoutComponent = {
  controller,
  template,
  bindings: {
    data: '<',
  },
};

export default FlyoutComponent;

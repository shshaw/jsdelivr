/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(t,a){a.qoopido.register("function/proximity",t)}(function(t,a,o,r){"use strict";return function(t,a){var o=!1;return t="object"==typeof t&&null!==t?t:{x:r,y:r},a="object"==typeof a&&null!==a?a:{x:r,y:r},t.x!==r&&t.y!==r&&a.x!==r&&a.y!==r&&(t.x=parseFloat(t.x),t.y=parseFloat(t.y),a.x=parseFloat(a.x),a.y=parseFloat(a.y),o={x:parseFloat(Math.abs(a.x-t.x)),y:parseFloat(Math.abs(a.y-t.y)),total:parseFloat(Math.sqrt(Math.pow(a.x-t.x,2)+Math.pow(a.y-t.y,2)))}),o}},this);
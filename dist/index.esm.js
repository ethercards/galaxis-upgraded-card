import React, { useState } from 'react';

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".upgraded-card {\r\n  margin: 10px;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\n.upgraded-card-img {\r\n  max-width: 100%;\r\n}\r\n.upgraded-card-traits {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  background-color: #fff;\r\n  color: #000;\r\n  border-radius: 5px;\r\n  width: 35px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 35px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  font-weight: 600;\r\n  caret-color: transparent;\r\n}\r\n.upgraded-card-traits-panel {\r\n  z-index: 1;\r\n  background-color: rgba(0, 0, 0, 0.797);\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  transition: all 1s;\r\n  padding-top: 20px;\r\n}\r\n.upgraded-card-traits-panel ul {\r\n  color: #fff;\r\n  text-align: left;\r\n  list-style: none;\r\n  padding-left: 30px;\r\n}\r\n.upgraded-card-traits-close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n";
styleInject(css_248z);

var Card = function Card(_ref) {
  var metadata = _ref.metadata;
    _ref.traitTypes;
    _ref.horizontalPadding;
    _ref.imageContainerWidth;
    _ref.apiUrl;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    areTraitsVisible = _useState2[0],
    setTraitsVisible = _useState2[1];
  var handleClose = function handleClose() {
    setTraitsVisible(false);
  };
  var renderTraits = function renderTraits() {
    return /*#__PURE__*/React.createElement("div", {
      className: "upgraded-card-traits-panel",
      style: {
        opacity: areTraitsVisible ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("ul", null, metadata.traits.map(function (trait, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: "trait" + index
      }, trait.name);
    })), /*#__PURE__*/React.createElement("div", {
      className: "upgraded-card-traits-close-btn",
      onClick: handleClose
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://explorer.ether.cards/static/media/close_button.8b0db979.svg"
    })));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, metadata && /*#__PURE__*/React.createElement("div", {
    className: "upgraded-card"
  }, /*#__PURE__*/React.createElement("img", {
    className: "upgraded-card-img",
    src: metadata.image
  }), metadata.traits && !areTraitsVisible && /*#__PURE__*/React.createElement("div", {
    className: "upgraded-card-traits",
    onClick: function onClick() {
      return setTraitsVisible(!areTraitsVisible);
    }
  }, /*#__PURE__*/React.createElement("p", null, metadata.traits.length)), metadata.traits && renderTraits()));
};

export { Card as GalaxisCard };

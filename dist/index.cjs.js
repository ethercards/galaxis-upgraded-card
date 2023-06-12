'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var css_248z = ".upgraded-card {\r\n  margin: 10px;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\n.upgraded-card-img {\r\n  max-width: 100%;\r\n}\r\n.upgraded-card-traits {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  font-weight: 600;\r\n}\r\n.upgraded-card-traits-panel {\r\n  z-index: 1;\r\n  background-color: rgba(0, 0, 0, 0.797);\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  transition: all 1s;\r\n  padding-top: 20px;\r\n}\r\n.upgraded-card-traits-panel ul {\r\n  color: #fff;\r\n  text-align: left;\r\n  list-style: none;\r\n}\r\n.upgraded-card-traits-close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n";
styleInject(css_248z);

const Card = _ref => {
  let {
    metadata,
    traitTypes,
    horizontalPadding = 20,
    imageContainerWidth = null,
    apiUrl
  } = _ref;
  const [areTraitsVisible, setTraitsVisible] = React.useState(false);
  const handleClose = () => {
    setTraitsVisible(false);
  };
  const renderTraits = () => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "upgraded-card-traits-panel",
      style: {
        opacity: areTraitsVisible ? 1 : 0
      }
    }, /*#__PURE__*/React__default["default"].createElement("ul", null, metadata.traits.map((trait, index) => {
      return /*#__PURE__*/React__default["default"].createElement("li", {
        key: `trait` + index
      }, trait.name);
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "upgraded-card-traits-close-btn",
      onClick: handleClose
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: "https://explorer.ether.cards/static/media/close_button.8b0db979.svg"
    })));
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, metadata && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upgraded-card"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "upgraded-card-img",
    src: metadata.image
  }), metadata.traits && !areTraitsVisible && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upgraded-card-traits",
    onClick: () => setTraitsVisible(!areTraitsVisible)
  }, metadata.traits.length), metadata.traits && renderTraits()));
};

exports.GalaxisCard = Card;

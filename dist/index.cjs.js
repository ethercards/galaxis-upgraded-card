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

var css_248z = ".card-title {\r\n  font-family: 'poppins-semibold';\r\n  font-size: 18px;\r\n  margin: 8px;\r\n  padding: 5px;\r\n}\r\n.upgraded-card {\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n.upgraded-card-img {\r\n  max-width: 100%;\r\n}\r\n.upgraded-card-traits {\r\n  font-family: 'poppins-semibold';\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  background-color: #000000;\r\n  color: #fff;\r\n  border-radius: 6px;\r\n  width: 45px;\r\n  height: 45px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  font-weight: 600;\r\n  caret-color: transparent;\r\n  transition: all 0.2s;\r\n}\r\n.upgraded-card-traits:hover {\r\n  background-color: #ff2c85;\r\n}\r\n.upgraded-card-traits-panel {\r\n  z-index: 1;\r\n  background-color: #080826;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  transition: all 1s;\r\n  padding-top: 20px;\r\n  font-family: 'poppins-semibold';\r\n  font-size: 18px;\r\n}\r\n.upgraded-card-traits-panel ul {\r\n  color: #fff;\r\n  text-align: left;\r\n  list-style: none;\r\n  padding-left: 30px;\r\n  padding-bottom: 20px;\r\n  overflow-y: auto;\r\n  max-height: 80%;\r\n}\r\n\r\n.upgraded-card-traits-panel ul::-webkit-scrollbar {\r\n  width: 0;\r\n}\r\n\r\n.upgraded-card-traits-close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n.upgraded-card-traits-close-btn:hover img {\r\n  /* #ff2c85; */\r\n  filter: invert(37%) sepia(50%) saturate(5507%) hue-rotate(316deg)\r\n    brightness(99%) contrast(105%);\r\n}\r\n.upgraded-card-trait-icons-container {\r\n  position: absolute;\r\n  top: 65px;\r\n  right: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.upgraded-card-trait-icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  margin-top: 15px;\r\n  background-color: #ff2c85;\r\n  border-radius: 5px;\r\n}\r\n.upgraded-card-trait-icon img {\r\n  max-width: 80%;\r\n  max-height: 80%;\r\n}\r\n";
styleInject(css_248z);

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13.622' height='13.622' viewBox='0 0 13.622 13.622'%3e %3cg id='Group_3436' data-name='Group 3436' transform='translate(-577.293 -681.227)'%3e %3cline id='Line_1' data-name='Line 1' x2='11.394' y2='11.394' transform='translate(578.407 682.31)' fill='none' stroke='%23fffcfc' stroke-width='2'/%3e %3cline id='Line_2' data-name='Line 2' y1='12.208' x2='12.208' transform='translate(578 681.935)' fill='none' stroke='%23fffcfc' stroke-width='2'/%3e %3c/g%3e%3c/svg%3e";

const Card = _ref => {
  let {
    metadata,
    traitTypes,
    horizontalPadding = 20,
    apiUrl
  } = _ref;
  const [areTraitsVisible, setTraitsVisible] = React.useState(false);
  const [areTraitIconsVisible, setIconsVisible] = React.useState(false);
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
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("li", {
        key: `trait` + index,
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          width: '25px'
        }
      }, index + 1 + '. '), ' ', trait.name));
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "upgraded-card-traits-close-btn",
      onClick: handleClose
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: img
    })));
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, metadata && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upgraded-card"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "upgraded-card-img",
    src: metadata.image
  }), metadata.traits && !areTraitsVisible && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upgraded-card-traits",
    onMouseEnter: () => setIconsVisible(!areTraitIconsVisible),
    onClick: e => {
      e.stopPropagation();
      console.log(e, 'Stop propagation');
      setTraitsVisible(!areTraitsVisible);
    }
  }, /*#__PURE__*/React__default["default"].createElement("p", null, metadata.traits.length)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upgraded-card-trait-icons-container"
  }, metadata.traits.map(trait => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "upgraded-card-trait-icon "
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: trait.icon_url
    }));
  }))), metadata.traits && renderTraits()), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "card-title"
  }, metadata.name)));
};

exports.GalaxisCard = Card;

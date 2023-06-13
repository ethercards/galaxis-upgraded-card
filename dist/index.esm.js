import React, { useState } from 'react';

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

var css_248z = ".card-title {\r\n  font-family: 'poppins-semibold';\r\n  font-size: 18px;\r\n}\r\n.upgraded-card {\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n.upgraded-card-img {\r\n  max-width: 100%;\r\n}\r\n.upgraded-card-traits {\r\n  font-family: 'poppins-semibold';\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  background-color: #000000;\r\n  color: #fff;\r\n  border-radius: 6px;\r\n  width: 45px;\r\n  height: 45px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  font-weight: 600;\r\n  caret-color: transparent;\r\n  transition: all 2s;\r\n}\r\n.upgraded-card-traits:hover {\r\n  background-color: #ff2c85;\r\n}\r\n.upgraded-card-traits-panel {\r\n  z-index: 1;\r\n  background-color: #080826;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  transition: all 1s;\r\n  padding-top: 20px;\r\n  font-family: 'poppins-semibold';\r\n  font-size: 18px;\r\n}\r\n.upgraded-card-traits-panel ul {\r\n  color: #fff;\r\n  text-align: left;\r\n  list-style: none;\r\n  padding-left: 30px;\r\n}\r\n.upgraded-card-traits-close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n";
styleInject(css_248z);

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13.622' height='13.622' viewBox='0 0 13.622 13.622'%3e %3cg id='Group_3436' data-name='Group 3436' transform='translate(-577.293 -681.227)'%3e %3cline id='Line_1' data-name='Line 1' x2='11.394' y2='11.394' transform='translate(578.407 682.31)' fill='none' stroke='%23fffcfc' stroke-width='2'/%3e %3cline id='Line_2' data-name='Line 2' y1='12.208' x2='12.208' transform='translate(578 681.935)' fill='none' stroke='%23fffcfc' stroke-width='2'/%3e %3c/g%3e%3c/svg%3e";

const Card = _ref => {
  let {
    metadata,
    traitTypes,
    horizontalPadding = 20,
    imageContainerWidth = null,
    apiUrl
  } = _ref;
  const [areTraitsVisible, setTraitsVisible] = useState(false);
  const handleClose = () => {
    setTraitsVisible(false);
  };
  const renderTraits = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: "upgraded-card-traits-panel",
      style: {
        opacity: areTraitsVisible ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("ul", null, metadata.traits.map((trait, index) => {
      return /*#__PURE__*/React.createElement("li", {
        key: `trait` + index
      }, trait.name);
    })), /*#__PURE__*/React.createElement("div", {
      className: "upgraded-card-traits-close-btn",
      onClick: handleClose
    }, /*#__PURE__*/React.createElement("img", {
      src: img
    })));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, metadata && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "upgraded-card"
  }, /*#__PURE__*/React.createElement("img", {
    className: "upgraded-card-img",
    src: metadata.image
  }), metadata.traits && !areTraitsVisible && /*#__PURE__*/React.createElement("div", {
    className: "upgraded-card-traits",
    onClick: () => setTraitsVisible(!areTraitsVisible)
  }, /*#__PURE__*/React.createElement("p", null, metadata.traits.length)), metadata.traits && renderTraits()), /*#__PURE__*/React.createElement("p", {
    className: "card-title"
  }, metadata.name)));
};

export { Card as GalaxisCard };

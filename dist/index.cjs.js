'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var spinnersReact = require('spinners-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3e %3cg id='Group_1817' data-name='Group 1817' transform='translate(-912 -5536)'%3e %3cg id='Group_1814' data-name='Group 1814' transform='translate(912 5535.843)' opacity='0.4'%3e %3crect id='Rectangle_370' data-name='Rectangle 370' width='70' height='70' rx='7' transform='translate(0 0.157)'/%3e %3cg id='physical_redeem' data-name='physical redeem' transform='translate(18.543 14.423)'%3e %3cpath id='Path_211' data-name='Path 211' d='M120.119%2c77c2.377%2c1.414%2c4.765%2c2.828%2c7.142%2c4.243q4.706%2c2.8%2c9.436%2c5.574a1.175%2c1.175%2c0%2c0%2c1%2c.642%2c1.129q-.018%2c9.572%2c0%2c19.133a1.135%2c1.135%2c0%2c0%2c1-.618%2c1.093q-8.093%2c4.759-16.186%2c9.567a1.162%2c1.162%2c0%2c0%2c1-1.331%2c0q-8.075-4.8-16.186-9.567a1.1%2c1.1%2c0%2c0%2c1-.618-1.058q.018-9.626%2c0-19.252a1.033%2c1.033%2c0%2c0%2c1%2c.547-.986q8.325-4.9%2c16.637-9.816a.119.119%2c0%2c0%2c0%2c.048-.059Zm4.813%2c18.408c-.166.1-.285.143-.392.214-1.188.7-2.365%2c1.4-3.553%2c2.092a.631.631%2c0%2c0%2c0-.368.63c.012%2c3.839.012%2c7.689.012%2c11.527v.357c-.012.594-.3.927-.761.927s-.725-.333-.749-.9v-.357c0-3.838%2c0-7.689.012-11.527a.656.656%2c0%2c0%2c0-.38-.654q-6.542-3.85-13.084-7.725c-.642-.38-.82-.761-.57-1.2s.7-.475%2c1.319-.107q6.56%2c3.868%2c13.12%2c7.76a.571.571%2c0%2c0%2c0%2c.677%2c0c1.2-.725%2c2.412-1.426%2c3.613-2.139.107-.059.2-.143.345-.226-.119-.071-.19-.131-.273-.178q-7.309-4.332-14.629-8.651a.446.446%2c0%2c0%2c0-.535%2c0c-1.474.879-2.959%2c1.759-4.445%2c2.626a.615.615%2c0%2c0%2c0-.357.63q.018%2c9.02%2c0%2c18.052a.642.642%2c0%2c0%2c0%2c.357.63q7.2%2c4.243%2c14.391%2c8.5c.119.071.238.143.416.238.012-.2.024-.321.024-.452%2c0-.63-.012-1.26%2c0-1.878.012-.547.3-.844.749-.844s.737.309.749.844c.012.654%2c0%2c1.307.012%2c1.961%2c0%2c.107.024.214.036.368a1.7%2c1.7%2c0%2c0%2c0%2c.226-.119q7.326-4.332%2c14.677-8.663a.48.48%2c0%2c0%2c0%2c.25-.487V89.359c0-.1-.024-.19-.036-.333-1.224.725-2.4%2c1.426-3.589%2c2.115a.536.536%2c0%2c0%2c0-.309.535c.012%2c1.961%2c0%2c3.922.012%2c5.883a.916.916%2c0%2c0%2c1-.487.891c-1.747%2c1.022-3.494%2c2.068-5.241%2c3.09a.769.769%2c0%2c0%2c1-1.236-.665%2c2.889%2c2.889%2c0%2c0%2c1%2c0-.321v-4.6C124.932%2c95.753%2c124.932%2c95.61%2c124.932%2c95.408Zm10.113-7.784a2.963%2c2.963%2c0%2c0%2c0-.285-.19q-7.291-4.314-14.593-8.628a.5.5%2c0%2c0%2c0-.582%2c0c-1.129.677-2.27%2c1.343-3.411%2c2.02-.071.048-.143.1-.238.155.309.178.57.333.832.5l4.884%2c2.888a.772.772%2c0%2c0%2c1%2c.38%2c1.105c-.226.392-.665.463-1.153.2-.083-.048-.166-.1-.238-.143-1.961-1.165-3.922-2.317-5.883-3.482a.553.553%2c0%2c0%2c0-.677.012c-1.022.63-2.056%2c1.224-3.09%2c1.842-.155.1-.3.178-.487.3.107.071.154.107.214.143q7.362%2c4.349%2c14.736%2c8.711a.41.41%2c0%2c0%2c0%2c.5-.012l3.066-1.818c.19-.107.38-.226.606-.368-.178-.107-.3-.19-.428-.261-1.878-1.117-3.767-2.222-5.645-3.339-.606-.357-.784-.749-.535-1.188s.713-.475%2c1.331-.119c2.175%2c1.283%2c4.338%2c2.555%2c6.5%2c3.85a.464.464%2c0%2c0%2c0%2c.57%2c0c1.105-.666%2c2.222-1.319%2c3.339-1.985A1.693%2c1.693%2c0%2c0%2c0%2c135.045%2c87.624Zm-4.67%2c4.552c-1.307.772-2.531%2c1.485-3.755%2c2.234a.545.545%2c0%2c0%2c0-.166.392c-.012%2c1.462-.012%2c2.935%2c0%2c4.4%2c0%2c.1.024.19.036.333.951-.559%2c1.83-1.165%2c2.769-1.616a1.716%2c1.716%2c0%2c0%2c0%2c1.129-1.961C130.291%2c94.731%2c130.375%2c93.495%2c130.375%2c92.176Z' transform='translate(-102.4 -77)'/%3e %3cpath id='Path_212' data-name='Path 212' d='M128.161%2c290.158c0-.475-.012-.963%2c0-1.438a.756.756%2c0%2c1%2c1%2c1.509-.059q.036%2c1.515%2c0%2c3.03a.743.743%2c0%2c0%2c1-.784.737.755.755%2c0%2c0%2c1-.713-.808C128.149%2c291.144%2c128.161%2c290.645%2c128.161%2c290.158Z' transform='translate(-125.095 -262.837)'/%3e %3cpath id='Path_213' data-name='Path 213' d='M153.661%2c302.937c0-.475-.012-.963%2c0-1.438a.75.75%2c0%2c1%2c1%2c1.5-.048q.036%2c1.5%2c0%2c2.995a.758.758%2c0%2c0%2c1-.784.772.767.767%2c0%2c0%2c1-.713-.844Z' transform='translate(-147.564 -274.106)'/%3e %3c/g%3e %3c/g%3e %3cg id='flip_02' data-name='flip 02' transform='translate(845.179 5473.328)'%3e %3cpath id='Path_225' data-name='Path 225' d='M92.524%2c117.689a7.86%2c7.86%2c0%2c0%2c1-1.044-.333%2c3.738%2c3.738%2c0%2c0%2c1-2.408-3.594c-.024-3.7-.012-5.557-.012-9.254v-.551H85.124a4.029%2c4.029%2c0%2c0%2c1-2.443-.769%2c3.692%2c3.692%2c0%2c0%2c1-1.613-3.02c-.024-1.78-.024-3.548%2c0-5.327a3.909%2c3.909%2c0%2c0%2c1%2c3.89-3.766c1.34-.023%2c2.692%2c0%2c4.1%2c0V81.822A3.937%2c3.937%2c0%2c0%2c1%2c93.307%2c77.7H108.8a3.937%2c3.937%2c0%2c0%2c1%2c4.246%2c4.122V96.23h.949a37.19%2c37.19%2c0%2c0%2c1%2c3.76.092%2c3.767%2c3.767%2c0%2c0%2c1%2c3.273%2c3.639c.036%2c1.8.036%2c3.605%2c0%2c5.419a3.908%2c3.908%2c0%2c0%2c1-3.866%2c3.743c-1.2.023-2.4.011-3.593.011h-.522V113.6a3.885%2c3.885%2c0%2c0%2c1-3.344%2c4.041.375.375%2c0%2c0%2c0-.119.057Q101.04%2c117.683%2c92.524%2c117.689ZM91.73%2c98.825V113.6a1.355%2c1.355%2c0%2c0%2c0%2c1.554%2c1.5H108.82c1.044%2c0%2c1.554-.494%2c1.565-1.493V109.56c0-.138-.012-.276-.024-.436h-3.843a1.317%2c1.317%2c0%2c0%2c1-1.459-1.378c0-1.665-.012-3.318%2c0-4.983a1.3%2c1.3%2c0%2c0%2c1%2c1.423-1.366c1.139-.011%2c2.277%2c0%2c3.416%2c0h.486V81.684a1.323%2c1.323%2c0%2c0%2c0-1.471-1.412H93.283a1.355%2c1.355%2c0%2c0%2c0-1.554%2c1.5v9.265H94.4V89.87a1.261%2c1.261%2c0%2c0%2c1%2c.688-1.217%2c1.346%2c1.346%2c0%2c0%2c1%2c1.459.092q3.932%2c2.532%2c7.863%2c5.075a1.254%2c1.254%2c0%2c0%2c1%2c0%2c2.216c-2.621%2c1.711-5.266%2c3.4-7.9%2c5.1a1.317%2c1.317%2c0%2c0%2c1-1.388.092%2c1.268%2c1.268%2c0%2c0%2c1-.723-1.194V98.825Zm4.756-.861s3.392-2.113%2c4.815-3.031c-1.447-.93-4.815-3.111-4.815-3.111l-.024%2c1.791-1.079.034H85.219c-.771%2c0-1.34.356-1.435%2c1.01a11.039%2c11.039%2c0%2c0%2c0-.012%2c1.653c.854-.034%2c1.672-.08%2c2.491-.092%2c3.06-.011%2c9.191%2c0%2c9.191%2c0l1.008-.011Zm11.231%2c8.519c.047.034.059.057.071.057%2c3.107%2c0%2c6.215.011%2c9.322%2c0a1.181%2c1.181%2c0%2c0%2c0%2c1.2-.976%2c11.648%2c11.648%2c0%2c0%2c0%2c.012-1.7c-.759.034-1.494.092-2.23.092-2.633.011-5.266%2c0-7.9%2c0h-.474Zm5.337-5.1c1.388%2c0%2c2.74.023%2c4.092-.011a1.276%2c1.276%2c0%2c0%2c0%2c1.21-1.263%2c1.241%2c1.241%2c0%2c0%2c0-1.139-1.274c-1.388-.046-2.763-.011-4.175-.011C113.054%2c99.675%2c113.054%2c100.5%2c113.054%2c101.385ZM89.038%2c98.814h-3.9a1.306%2c1.306%2c0%2c0%2c0-1.4%2c1.3%2c1.323%2c1.323%2c0%2c0%2c0%2c1.423%2c1.274c1.2.011%2c2.4%2c0%2c3.594%2c0a2.4%2c2.4%2c0%2c0%2c0%2c.285-.034Z' fill='%23fcfcfc'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var CardBack = function CardBack(_ref) {
  var backImage = _ref.backImage,
      _onClick = _ref.onClick;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showFlipIcon = _useState2[0],
      setshowFlipIcon = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2);
      _useState6[0];
      _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mobileView = _useState8[0],
      setmobileView = _useState8[1];

  React.useEffect(function () {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-back-root",
    style: {
      backgroundImage: "url(".concat(backImage, ")")
    },
    onMouseOver: function onMouseOver() {
      setshowFlipIcon(true);
    },
    onMouseLeave: function onMouseLeave() {
      setshowFlipIcon(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-icons-holder"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$5,
    className: "flip-icon",
    alt: "not found",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: function onClick(e) {
      _onClick(e);
    }
  }))));
};

var img$4 = "data:image/png;base64,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";

const TraitCard = _ref => {
  let {
    trait,
    onClick,
    image,
    traitImg
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "close-button",
    src: img$4,
    alt: "",
    onClick: e => onClick(e)
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-root",
    style: {
      backgroundImage: `url(${image})`
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-content-holder"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-trait-icon-holder"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: traitImg,
    alt: ""
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-title-holder"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "trait-card-title"
  }, trait.name)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-description-holder"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "trait-card-description"
  }, trait.description))))));
};

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

var css_248z$5 = ".card-image-container{\r\n  position: relative;\r\n  /* min-height: 500px; */\r\n  margin: auto;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.pyramid_anim_container {\r\n  z-index: 2;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n.resizer-container{\r\n  padding: 10px;\r\n}\r\n\r\n.scope span {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transform-origin: center;\r\n  transform-style: preserve-3d;\r\n}\r\n.scope span:first-child {\r\n  transform: rotateY(calc(0deg)) translateZ(1px) rotateX(0deg);\r\n}\r\n.scope span:nth-child(2) {\r\n  transform: rotateY(calc(0deg)) translateZ(0px) rotateX(0deg);\r\n}\r\n\r\n.scope {\r\n  position: relative;\r\n  transform-style: preserve-3d;\r\n  animation: slid 5s linear infinite;\r\n  border-radius: 12px;\r\n  transition: 1.5s all;\r\n  padding: 10px;\r\n  /* box-shadow: 0px 55px 88px 0px rgba(0,0,0,0.42); */\r\n}\r\n.scope span {\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n}\r\n.front.active::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 100%;\r\n  display: block;\r\n  background: linear-gradient(112deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\r\n  background-position-x: 0;\r\n  background-repeat: no-repeat;\r\n  transition: all .35s ease-in-out;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n  animation: shiningEffect1 2s ease-in-out normal ;\r\n}\r\n.back.active::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  right: 100%;\r\n  display: block;\r\n  background: linear-gradient(250deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\r\n  background-position-x: 0;\r\n  background-repeat: no-repeat;\r\n  transition: all .35s ease-in-out;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n  animation: shiningEffect2 2s ease-in-out normal ;\r\n}\r\n\r\n.badge-img{\r\n  position: absolute;\r\n  width: 75px;\r\n  height: 75px;\r\n  bottom: 15px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n}\r\n.flip-icon {\r\n  /* position: absolute; */\r\n  width: 40px;\r\n  height: 40px;\r\n  /* margin-top: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;*/\r\n  cursor: pointer; \r\n}\r\n.fullscreen-icon{\r\n  /* position: absolute; */\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  /* margin-top: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0; */\r\n  cursor: pointer;\r\n}\r\n.back_card{\r\n  animation: hideBack 2s ease-in-out normal;\r\n  transition: all 1s;\r\n  visibility: hidden;\r\n  border-radius: 12px;\r\n}\r\n.back_card.active{\r\n  visibility: visible;\r\n}\r\n.card-back-root {\r\n  height: 100%;\r\n  transform: rotateY(180deg);\r\n  border-radius: 12px;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  -webkit-box-pack: end;\r\n  justify-content: flex-end;\r\n  position: relative;\r\n}\r\n.card-icons-holder{\r\n  position: absolute;\r\n  inset: 0px;\r\n  margin: auto;\r\n  width: 100%;\r\n  max-height: 40px;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n}\r\n.trait-container {\r\n  position: absolute;\r\n  display: flex;\r\n  -webkit-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n.trait-holder{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 8px;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n.trait-holder:hover {\r\n  background-color: #fc6405;\r\n}\r\n.trait-holder img{\r\n  width: 30px;\r\n  height: 25px;\r\n}\r\n.trait-card-root{\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  transform: rotateY(180deg);\r\n  -webkit-background-position: center;\r\n  background-position: center;\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.close-button {\r\n  width: 20.5px;\r\n  height: 20.5px;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 30px;\r\n  z-index: 5;\r\n  transform: rotateX(0deg);\r\n}\r\n.trait-card-content {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  background-color: #fc6405b3;\r\n}\r\n.trait-card-content-holder{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 30px;\r\n \r\n}\r\n\r\n.trait-card-trait-icon-holder {\r\n  width: 55px;\r\n  height: 55px;\r\n  margin-bottom: 20px;\r\n  margin-top: 10px;\r\n}\r\n.trait-card-trait-icon-holder img{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.trait-card-title-holder{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.trait-card-title {\r\n  margin: 0px;\r\n  font-weight: 400;\r\n  color: rgb(250, 250, 242);\r\n  font-size: 36px;\r\n  font-family: Poppins-semibold;\r\n  line-height: 42px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  max-width: 250px;\r\n  min-width: 250px;\r\n}\r\n.trait-card-description-holder{\r\n  margin-top: 25px;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  overflow-y: auto;\r\n}\r\n .trait-card-description-holder::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n.trait-card-description-holder::-webkit-scrollbar-track {\r\n  background: #ffffff49;\r\n} \r\n.trait-card-description-holder::-webkit-scrollbar-thumb  {\r\n  background: #ffffff;\r\n} \r\n.trait-card-description{\r\n  margin: 0px;\r\n  font-weight: 400;\r\n  color: rgb(250, 250, 242);\r\n  font-family: poppins;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  text-align: center;\r\n  max-width: 90%;\r\n  min-width: 200px;\r\n}\r\n\r\n@keyframes shiningEffect1 {\r\n  0%{\r\n\r\n    left: -100%;\r\n  }\r\n 100%{\r\n\r\n  left: 100%;\r\n }\r\n}\r\n@keyframes shiningEffect2 {\r\n  0%{\r\n\r\n    right: -100%;\r\n  }\r\n 100%{\r\n  right: 100%;\r\n }\r\n}\r\n\r\n@keyframes hideBack {\r\n from{\r\n  visibility: visible;\r\n  }\r\n to{\r\n    visibility: hidden;\r\n  }\r\n}\r\n.flipped-img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n  object-fit: cover;\r\n  transition: 2s;\r\n}\r\n.buttonHolder{\r\n  position: fixed;\r\n  height: 16px;\r\n  width: 16px;\r\n  top: 4%;\r\n  left: 4%;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  line-height: 1rem;\r\n  color: #fff;\r\n  transition: color .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  /* .card-image-container {\r\n      min-height: 300px;\r\n  } */\r\n  .scope {\r\n    position: relative;\r\n    height: 440px;\r\n    transform-style: preserve-3d;\r\n    animation: slid 5s linear infinite;\r\n    transition: 2s all;\r\n  }\r\n  .arrow{\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (max-width: 350px) {\r\n  .badge-img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  .scope {\r\n    position: relative;\r\n    /* width: 250px !important;\r\n    height: 340px; */\r\n    transform-style: preserve-3d;\r\n    animation: slid 5s linear infinite;\r\n    transition-property: position;\r\n    transition: 2s;\r\n  }\r\n}\r\n\r\n.c-medium .trait-holder{\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.c-medium .trait-card-trait-icon-holder{\r\n  margin-bottom: 10px;\r\n}\r\n.c-medium .trait-card-title{\r\n  font-size: 32px;\r\n}\r\n.c-medium .trait-card-description{\r\n  line-height: 23px;\r\n}\r\n.c-small .trait-holder{\r\n  width: 30px;\r\n  height: 30px;\r\n}";
styleInject(css_248z$5);

const useContainerDimensions = myRef => {
  const getDimensions = () => ({
    width: myRef.current.offsetWidth,
    height: myRef.current.offsetHeight
  });

  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
  return dimensions;
};

var GalaxisCard = function GalaxisCard(_ref) {
  var metadata = _ref.metadata,
      traitTypes = _ref.traitTypes,
      _ref$horizontalPaddin = _ref.horizontalPadding,
      horizontalPadding = _ref$horizontalPaddin === void 0 ? 20 : _ref$horizontalPaddin,
      _ref$imageContainerWi = _ref.imageContainerWidth,
      imageContainerWidth = _ref$imageContainerWi === void 0 ? null : _ref$imageContainerWi;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      traitsVisible = _useState2[0],
      setTraitsVisible = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedTrait = _useState4[0],
      setSelectedTrait = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showBackCard = _useState6[0],
      setshowBackCard = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showFlipIcon = _useState8[0],
      setshowFlipIcon = _useState8[1];

  var _useState9 = React.useState(traitTypes ? traitTypes[0] : null),
      _useState10 = _slicedToArray(_useState9, 2),
      traitType = _useState10[0],
      setTraitType = _useState10[1]; // const [randomImages, setrandomImages] = useState([ARTARRAY[0]]);


  var _useState11 = React.useState(false),
      _useState12 = _slicedToArray(_useState11, 2);
      _useState12[0];
      _useState12[1];

  var _useState13 = React.useState(null),
      _useState14 = _slicedToArray(_useState13, 2);
      _useState14[0];
      _useState14[1];

  var _useState15 = React.useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      mobileView = _useState16[0],
      setmobileView = _useState16[1];

  var _useState17 = React.useState(true),
      _useState18 = _slicedToArray(_useState17, 2),
      loading = _useState18[0],
      setLoading = _useState18[1];

  var imageRef = React.useRef();

  var _useState19 = React.useState(imageContainerWidth ? imageContainerWidth - horizontalPadding : 400),
      _useState20 = _slicedToArray(_useState19, 2);
      _useState20[0];
      var setDefaultScopeWidth = _useState20[1];

  var GALAXIS_BASE_URL = 'https://galaxis-web-backend-staging.herokuapp.com';
  var containerRef = React.useRef();

  var _useContainerDimensio = useContainerDimensions(containerRef),
      width = _useContainerDimensio.width,
      height = _useContainerDimensio.height;

  var _useState21 = React.useState(0),
      _useState22 = _slicedToArray(_useState21, 2),
      imageRatio = _useState22[0],
      setImageRatio = _useState22[1];

  var _useState23 = React.useState({
    width: 0,
    height: 0
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      resizerComponentSize = _useState24[0],
      setResizerComponentSize = _useState24[1];

  var _useState25 = React.useState('medium'),
      _useState26 = _slicedToArray(_useState25, 2),
      containerSize = _useState26[0],
      setContainerSize = _useState26[1];

  React.useEffect(function () {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }

    if (window.innerWidth < 410) {
      setDefaultScopeWidth(window.innerWidth - horizontalPadding);
    }

    if (metadata.traits) {
      setSelectedTrait(metadata.traits[0]);
    }
  }, []);

  var showTraits = function showTraits(e) {
    e.stopPropagation();
    setTraitsVisible(true);
    document.getElementById('scope').style.transform = 'perspective(1000px) rotateY(180deg)';
  };

  var hideTraits = function hideTraits(e) {
    e.stopPropagation();
    setTraitsVisible(false);
    setshowBackCard(false);
    document.getElementById('scope').style.transform = 'perspective(1000px) rotateY(0deg)';
  };

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var setTheImageRatio = function setTheImageRatio(width, height) {
    setImageRatio(height / width);
  };

  React.useEffect(function () {
    if (imageRatio != 0) {
      setResizerComponentSize({
        width: width < height / imageRatio ? 100 + '%' : height / imageRatio,
        height: width < height / imageRatio ? width * imageRatio : "100%"
      });
    } // setResizerComponentSize({width:width<height/1.365?100+'%':height/1.365, height: width<height/1.365? width*1.365 : "100%"})

  }, [imageRatio, width, height]);
  React.useEffect(function () {
    if (width) {
      var cSize = '';

      if (width > 500) {
        cSize = 'c-xlarge';
      } else if (width > 400) {
        cSize = 'c-large';
      } else if (width > 300) {
        cSize = 'c-medium';
      } else if (width > 240) {
        cSize = 'c-small';
      } else {
        cSize = 'c-xsmall';
      }

      setContainerSize(cSize); // console.log(containerSize)
    }
  }, [width]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, loading && /*#__PURE__*/React__default["default"].createElement(spinnersReact.SpinnerCircular, {
    size: 100,
    color: "rgb(252, 108, 3)",
    style: {
      position: 'absolute',
      margin: 'auto',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    secondaryColor: 'white'
  }), metadata && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-image-container ".concat(containerSize),
    ref: containerRef,
    style: {
      opacity: loading ? '0' : '1'
    },
    onClick: function onClick(e) {
      return stopPropagation(e);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pyramid_anim_container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "resizer-container",
    style: {
      opacity: resizerComponentSize.width === 0 ? 0 : 1,
      width: resizerComponentSize.width,
      height: resizerComponentSize.height
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "scope ".concat(traitsVisible ? 'active' : '', "  "),
    style: {
      width: "100%",
      height: "100%"
    },
    id: "scope",
    onTransitionEnd: function onTransitionEnd() {
      return console.log('hello');
    },
    onMouseOver: function onMouseOver() {
      setshowFlipIcon(true);
    },
    onMouseLeave: function onMouseLeave() {
      setshowFlipIcon(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "front ".concat(!traitsVisible ? 'active' : '', " "),
    id: "front-span"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "flipped-img",
    src: metadata.sides && metadata.sides.length > 1 ? metadata.sides[0].image : metadata.image,
    alt: "not found",
    ref: imageRef,
    onLoad: function onLoad() {
      setTheImageRatio(imageRef.current.naturalWidth, imageRef.current.naturalHeight); // document.getElementById(
      //   'scope'
      // ).style.width = `${defaultScopeWidth}px`;
      // document.getElementById(
      //   'scope'
      // ).style.height = `${calculateSize(
      //   imageRef.current.naturalWidth,
      //   imageRef.current.naturalHeight
      // )}px`;

      setLoading(false);
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-icons-holder"
  }, metadata.sides && metadata.sides.length > 1 && /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$5,
    className: "flip-icon",
    alt: "not found",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: function onClick(e) {
      showTraits(e);
      setshowBackCard(true);
    }
  })), metadata.traits && traitTypes && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-container ".concat(traitsVisible ? 'hide' : '')
  }, metadata.traits.map(function (elem, metadataIndex) {
    return traitTypes.map(function (traitElem, index) {
      if (parseInt(elem.type) === traitElem.id) return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "trait-holder",
        key: index,
        onClick: function onClick(e) {
          setSelectedTrait(metadata.traits[metadataIndex]);
          setTraitType(traitTypes[index]);
          showTraits(e);
        }
      }, ' ', /*#__PURE__*/React__default["default"].createElement("img", {
        src: GALAXIS_BASE_URL + traitElem.icon_white,
        alt: "undefined"
      }), ' ');
    });
  }))), metadata.traits && traitTypes && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "back ".concat(traitsVisible ? 'active' : '', " "),
    id: "trait-span"
  }, /*#__PURE__*/React__default["default"].createElement(TraitCard, {
    trait: selectedTrait,
    onClick: hideTraits,
    image: metadata.sides && metadata.sides.length > 1 ? metadata.sides[0].image : metadata.image,
    traitImg: GALAXIS_BASE_URL + traitType.icon_white
  })), metadata.sides && metadata.sides.length > 1 && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "back_card ".concat(showBackCard ? 'active' : '', " "),
    id: "back-span"
  }, /*#__PURE__*/React__default["default"].createElement(CardBack, {
    onClick: hideTraits,
    backImage: metadata.sides[1].image
  })))))));
};

var css_248z$4 = ".dust-pool-card {\r\n  width: 100%;\r\n  max-width: 540px;\r\n  display: flex;\r\n  -webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \r\n  box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n  margin: 0 auto;\r\n}\r\n.dust-pool-card-img {\r\n  height: 265px;\r\n  background-size: cover;\r\n}\r\n.text-box {\r\n  width: 50%;\r\n  padding: 15px;\r\n}\r\n.dust-pool-title {\r\n  font-family: poppins-semibold;\r\n  min-height: 42px;\r\n  font-weight: 600;\r\n  font-size: 22px;\r\n  color: rgb(0, 0, 0);\r\n  margin-bottom: 10px;\r\n  line-height: 21px;\r\n}\r\n.dust-pool-card-label {\r\n  text-transform: uppercase;\r\n  margin-bottom: 0;\r\n  font-size: 12px;\r\n}\r\n.dust-pool-btn {\r\n  border: 2px solid rgb(255, 105, 43);\r\n  color: rgb(255, 105, 43);\r\n  background-color: transparent;\r\n  font-family: poppins;\r\n  font-size: 14px;\r\n  border-radius: 5px;\r\n  padding: 10px 20px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n}\r\n.dust-pool-btn:hover {\r\n  background-color: rgb(255, 105, 43);\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.dust-pool-btn:focus {\r\n  outline: none;\r\n}\r\n";
styleInject(css_248z$4);

var css_248z$3 = ".counter-body{\r\n    font-size: 1em;\r\n    line-height: 1em;\r\n    vertical-align: center;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.counter-body .counter-item{\r\n    display: inline-block;\r\n    width: 10px;\r\n    height: 1.3em;\r\n    margin: 0 2px 0 0;\r\n    background-color: #ff6b2b3d;\r\n}\r\n\r\n.counter-item.active{\r\n    background-color: #FF692B;\r\n}";
styleInject(css_248z$3);

const CounterBar = props => {
  const ITEM_COUNT = 10;
  const [items, setItems] = React.useState([]);
  const [currentValue, setCurrentValue] = React.useState(null);
  const [maxValue, setMaxValue] = React.useState(null);
  const [progress, setProgress] = React.useState(null);
  React.useEffect(() => {
    let a = [];

    for (let i = 0; i < ITEM_COUNT; i++) {
      a.push(i);
    }

    setItems(a);
  }, []);
  React.useEffect(() => {
    if (props.value && props.value !== currentValue) {
      setCurrentValue(props.value);
    }

    if (props.maxValue && props.maxValue !== maxValue) {
      setMaxValue(props.maxValue);
    }
  }, [props]);
  React.useEffect(() => {
    if (maxValue && maxValue > 0) {
      let p = Math.floor(currentValue / maxValue * ITEM_COUNT);

      if (p === 0 && currentValue > 0) {
        p = 1;
      }

      setProgress(p); //console.log(currentValue,p);
    }
  }, [currentValue, maxValue]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, items.length > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-body"
  }, items.map((e, i) => {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: `counter-item ${i < progress ? 'active' : ''}`,
      key: 'c' + i
    });
  })));
};

const DustPoolCard = _ref => {
  let {
    card,
    handleClick,
    address
  } = _ref;
  React.useEffect(() => {
    console.log('card', card);
  }, []);

  const onClickHandler = () => {
    console.log('address on click', address);

    if (address) {
      handleClick(card.poolId);
    } else {
      handleClick(null);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-card"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "dust-pool-card-img",
    src: card.imgSrc
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title"
  }, card.name), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "COUNTER"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/React__default["default"].createElement("b", null, "60 out of 100 left")), /*#__PURE__*/React__default["default"].createElement(CounterBar, {
    value: 100,
    maxValue: 200
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "Price"), /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement("b", null, "10.000 D")), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    onClick: onClickHandler
  }, address ? 'Exchange' : 'Connect'))));
};

var img$3 = "data:image/jpeg;base64,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";

var css_248z$2 = "/* @font-face {\r\n    font-family: 'bau';\r\n    src: local('poppins'), url(../../assets/fonts/Poppins.ttf) format('truetype');\r\n  }\r\n/* @font-face {\r\n    font-family: 'poppins';\r\n    src: local('poppins'), url(../../assets/fonts/Poppins.ttf) format('truetype');\r\n  }\r\n   */\r\n  /* @font-face {\r\n    font-family: 'Poppins-semibold';\r\n    src: local('poppins-semibold'),\r\n      url(../../assets/fonts/Poppins-SemiBold.ttf) format('truetype');\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: 'poppins-medium';\r\n    src: local('poppins-medium'),\r\n      url(../../assets/fonts/Poppins-Medium.ttf) format('truetype');\r\n  } */ \r\n  \r\n\r\nbody{\r\n    background-color: rgb(250, 249, 245);\r\n}\r\n\r\n.dust-pool-root{\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n}\r\n.dust-pool-textbox{\r\n text-align: center;\r\n max-width: 600px;\r\n margin: 0 auto;\r\n}\r\n.pool-subtitle{\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n}\r\n.tab-choose{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 70px;\r\n}\r\n.tab-choose div{\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    padding: 10px 15px\r\n}\r\n.tab-choose div:hover{\r\n    cursor: pointer;\r\n}\r\n.tab-choose .active-tab{\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.tab-choose div:first-child{\r\n    border: 2px solid #000;\r\n    border-top-left-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n.tab-choose div:nth-child(2){\r\n    border-top: 2px solid #000;\r\n    border-bottom: 2px solid #000;\r\n}\r\n.tab-choose div:nth-child(3){\r\n    border: 2px solid #000;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n\r\n/*classes from bootstrap*/\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n.container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.mt-5, .my-5 {\r\n    margin-top: 3rem!important;\r\n}\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n.col-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n}\r\n.col-12, .col-lg-6, .col-lg-3{\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 1px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n.col-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n}\r\n.mb-1{\r\n    margin-bottom: 0.25rem!important;\r\n}\r\n.pb-4{\r\n    padding-bottom: 1.5rem!important;\r\n}\r\n.mb-2{\r\n\r\n}\r\n.w-100 {\r\n    width: 100%!important;\r\n}\r\n.dust-pool-card p {\r\n    margin-block-start: 0;\r\n}\r\n\r\n@media (min-width: 576px){\r\n.container {\r\n    max-width: 540px;\r\n}\r\n}\r\n@media (min-width: 768px){\r\n    .container {\r\n        max-width: 720px;\r\n    }}\r\n@media (min-width: 992px){\r\n    .container {\r\n        max-width: 960px;\r\n    }\r\n    .col-lg-6 {\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .col-lg-3 {\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px){\r\n    .container {\r\n        max-width: 1140px;\r\n    }\r\n}\r\n";
styleInject(css_248z$2);

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='25.53' height='48.317' viewBox='0 0 25.53 48.317'%3e %3cg id='kozepso_white' data-name='kozepso white' transform='translate(-132.737 -28.1)'%3e %3crect id='Rectangle_356' data-name='Rectangle 356' width='2.722' height='48.317' transform='translate(132.744 28.1)' fill='%23ff692b'/%3e %3crect id='Rectangle_357' data-name='Rectangle 357' width='2.711' height='25.53' transform='translate(132.738 53.615) rotate(-90)' fill='%23ff692b'/%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='25.53' height='48.316' viewBox='0 0 25.53 48.316'%3e %3cg id='kozepso_white' data-name='kozepso white' transform='translate(0 0)'%3e %3crect id='Rectangle_356' data-name='Rectangle 356' width='2.722' height='48.316' transform='translate(22.801 0)' fill='%23ff692b'/%3e %3crect id='Rectangle_357' data-name='Rectangle 357' width='2.711' height='25.53' transform='translate(0 25.515) rotate(-90)' fill='%23ff692b'/%3e %3c/g%3e%3c/svg%3e";

var css_248z$1 = ".upcoming-dust-pool-card {\r\n    height: 86px;\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n    -webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \r\n  box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    margin-bottom: 50px;\r\n}\r\n.upcoming-dust-pool-card img{\r\n    max-height: 100%;\r\n}\r\n.upcoming-dust-pool-card-title{\r\n     line-height: 16px;\r\n     min-height: 32px;\r\n     margin-bottom: 10px;\r\n    }\r\n.upcoming-dust-pool-card-text{\r\n    padding: 10px;\r\n}";
styleInject(css_248z$1);

const UpcomingCard = props => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upcoming-dust-pool-card"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: props.imgSrc
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upcoming-dust-pool-card-text"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "upcoming-dust-pool-card-title"
  }, /*#__PURE__*/React__default["default"].createElement("b", null, props.name)), /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      fontFamily: "poppins"
    }
  }, props.price, " D")));
};

var css_248z = "\r\n.pool-ps-root{\r\n    max-width: 848px;\r\n    width: 100%;\r\n    margin: auto auto 60px;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 10px;\r\n}\r\n.pool-ps-card-and-descipton{\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n.pool-ps-card-and-descipton-inner{\r\n    flex-basis: 50%;\r\n    -webkit-box-flex: 0;\r\n    flex-grow: 0;\r\n    max-width: 50%;\r\n}\r\n.pool-ps-card-and-descipton-inner p{\r\n    margin-top: 0;\r\n}\r\n.ps-left{\r\n    background-color: rgb(255, 255, 255);\r\n    padding: 50px;\r\n    border: 1px solid #000;\r\n    border-radius: 15px;\r\n}\r\n.ps-left img{\r\n    border-radius: 15px;\r\n}\r\n.ps-right{\r\n    position: relative;\r\n}\r\n.ps-text-bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n.snp-root{\r\n    margin: 15px auto 30px;\r\n    max-width: 848px;\r\n    width: 100%;\r\n    max-height: 86px;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    justify-content: space-between;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n.previous-box{\r\n    display: flex;\r\n    width: 48%;\r\n    gap: 16px;\r\n    -webkit-box-pack: start;\r\n    justify-content: flex-start;\r\n    cursor: pointer;\r\n}\r\n.snp-divider{\r\n    width: 4%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n}\r\n.next-box{\r\n    display: flex;\r\n    width: 48%;\r\n    gap: 16px;\r\n    -webkit-box-pack: end;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n.snp-text{\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    text-transform: uppercase;\r\n}\r\n.snp-text span{\r\n    margin: 0px;\r\n    font-family: poppins;\r\n    font-size: 14px;\r\n    color: rgb(112, 112, 112);\r\n    cursor: pointer;\r\n}\r\n.snp-text-p-n{\r\n    margin: 0px;\r\n    font-weight: 400;\r\n    font-family: poppins-semibold;\r\n    line-height: 20px;\r\n    font-size: 18px;\r\n    max-height: 45px;\r\n    width: 100%;\r\n    max-width: 180px;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.pool-ps-btn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    font-weight: 700;\r\n}\r\n.pool-ps-btn p{\r\n    margin-block-start: 0;\r\n    margin-block-end: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    font-size: 18px;\r\n}\r\n.pool-ps-btn span{\r\n    font-size: 42px;\r\n    line-height: 16px;\r\n    padding-right: 2px;\r\n}\r\n.pool-ps-btn:hover{\r\n    cursor: pointer;\r\n}\r\n.pool-ps-btn:focus{\r\n    outline: none;\r\n}\r\n.pool-ps-card-and-descipton-inner .dust-pool-title{\r\n    font-size: 28px;\r\n    margin-bottom: 0;\r\n    line-height: 40px;\r\n}";
styleInject(css_248z);

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABICAYAAADcdSQuAAAABHNCSVQICAgIfAhkiAAAACJJREFUKFNjZGBgsAPi/4xQBgOIAQZUYIyajByYo6GBOzQAZxUMIQH+P1cAAAAASUVORK5CYII=";

const ShowNextPreviosProject = () => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "previous-box snp-box"
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$3,
    style: {
      maxHeight: "100%"
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "previous"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text-p-n"
  }, "Mutant ape yacht club"))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-divider"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "next-box snp-box"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text text-right"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "next"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text-p-n"
  }, "Mutant ape yacht club")), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$3,
    style: {
      maxHeight: "100%"
    }
  }))));
};

const ProjectSubpage = _ref => {
  let {
    handleBack
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-root"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "pool-ps-btn",
    onClick: handleBack
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "\uD83E\uDC90"), /*#__PURE__*/React__default["default"].createElement("p", null, "Back")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-left"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$3,
    style: {
      maxWidth: '100%'
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-right"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-box w-100"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "POOL"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title "
  }, "Girls, Robots, Dragons"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "Price"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/React__default["default"].createElement("b", null, "10.000 D")), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "COUNTER"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/React__default["default"].createElement("b", null, "60 out of 100 left")), /*#__PURE__*/React__default["default"].createElement(CounterBar, {
    value: 100,
    maxValue: 200
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "ps-text-bottom"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "Your dust balance"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "mb-2"
  }, /*#__PURE__*/React__default["default"].createElement("b", null, "10000 D")), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn"
  }, "Buy Now"))))), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label mt-2",
    style: {
      fontFamily: "poppins-semibold",
      textTransform: "capitalize",
      fontSize: "18px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("b", null, "Description")), /*#__PURE__*/React__default["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"), /*#__PURE__*/React__default["default"].createElement(ShowNextPreviosProject, null));
};

const UPCOMING_POOLS = [{
  imgSrc: img$3,
  name: "Paul Timbuktu",
  price: 10000
}, {
  imgSrc: img$3,
  name: "Paul Timbuktu two row",
  price: 10000
}, {
  imgSrc: img$3,
  name: "Paul Timbuktu",
  price: 10000
}, {
  imgSrc: img$3,
  name: "Paul Timbuktu",
  price: 10000
}];

const TopSectionDividers = () => /*#__PURE__*/React__default["default"].createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '25px 0'
  }
}, /*#__PURE__*/React__default["default"].createElement("img", {
  src: img$2,
  style: {
    maxHeight: '50px'
  }
}), /*#__PURE__*/React__default["default"].createElement("img", {
  src: img$1,
  style: {
    maxHeight: '50px'
  }
}));

const DustPools = _ref => {
  let {
    address,
    ethersProvider,
    deployedChainId,
    handleConnect
  } = _ref;
  const [selectedPoolId, setSelectedPoolId] = React.useState(null);
  const [selectedFilter, setSelectedFilter] = React.useState('ALL');
  const [pools, setPools] = React.useState([{
    imgSrc: img$3,
    poolId: 0,
    name: 'Girls, Robots, Dragons'
  }, {
    imgSrc: img$3,
    poolId: 0,
    name: 'Girls, Robots, Dragons'
  }, {
    imgSrc: img$3,
    poolId: 0,
    name: 'Girls, Robots, Dragons'
  }]);
  React.useEffect(() => {
    console.log('address???', address);
  }, [address]);
  React.useEffect(() => {
    if (selectedFilter === 'SOLD_OUT') {
      setPools([]);
    } else if (selectedFilter === 'ACTIVE') {
      setPools([]);
    } else {
      setPools([{
        imgSrc: img$3,
        poolId: 0,
        name: 'Girls, Robots, Dragons'
      }, {
        imgSrc: img$3,
        poolId: 0,
        name: 'Girls, Robots, Dragons'
      }, {
        imgSrc: img$3,
        poolId: 0,
        name: 'Girls, Robots, Dragons'
      }]);
    }
  }, [selectedFilter]);

  const connectOrExchange = poolId => {
    if (poolId !== null) {
      setSelectedPoolId(poolId);
    } else {
      handleConnect();
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, selectedPoolId === null ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-textbox"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "pool-subtitle"
  }, "Dust pools"), /*#__PURE__*/React__default["default"].createElement("p", null, "You can exchange your Dust for some awesome items including Cryptopunks and other valuable NFTs."), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tab-choose"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: `${selectedFilter === 'ALL' ? "active-tab" : ''}`,
    onClick: () => setSelectedFilter('ALL')
  }, "All"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `${selectedFilter === 'ACTIVE' ? "active-tab" : ''}`,
    onClick: () => setSelectedFilter('ACTIVE')
  }, "Active"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `${selectedFilter === 'SOLD_OUT' ? "active-tab" : ''}`,
    onClick: () => setSelectedFilter('SOLD_OUT')
  }, "Sold out"))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container  mt-5"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "row",
    style: {
      rowGap: '25px'
    }
  }, pools.map((card, idx) => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: idx,
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/React__default["default"].createElement(DustPoolCard, {
      card: card,
      address: address,
      handleClick: connectOrExchange
    }));
  })), /*#__PURE__*/React__default["default"].createElement(TopSectionDividers, null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-textbox"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "pool-subtitle"
  }, "Dust utility token"), /*#__PURE__*/React__default["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    style: {
      marginTop: "20px"
    }
  }, "Go to blog")), /*#__PURE__*/React__default["default"].createElement(TopSectionDividers, null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-textbox pb-4"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "pool-subtitle"
  }, "Upcoming Dust Pools"), /*#__PURE__*/React__default["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "row",
    style: {
      maxHeight: "86px"
    }
  }, UPCOMING_POOLS.map((card, idx) => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: idx,
      className: "col-6 col-lg-3"
    }, /*#__PURE__*/React__default["default"].createElement(UpcomingCard, {
      imgSrc: card.imgSrc,
      name: card.name,
      price: card.price
    }));
  })))) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-root"
  }, /*#__PURE__*/React__default["default"].createElement(ProjectSubpage, {
    handleBack: () => setSelectedPoolId(null)
  })));
};

exports.DustPools = DustPools;
exports.GalaxisCard = GalaxisCard;

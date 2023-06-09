import React, { useState, useEffect, useRef } from 'react';
import { SpinnerCircular } from 'spinners-react';

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

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3e %3cg id='Group_1817' data-name='Group 1817' transform='translate(-912 -5536)'%3e %3cg id='Group_1814' data-name='Group 1814' transform='translate(912 5535.843)' opacity='0.4'%3e %3crect id='Rectangle_370' data-name='Rectangle 370' width='70' height='70' rx='7' transform='translate(0 0.157)'/%3e %3cg id='physical_redeem' data-name='physical redeem' transform='translate(18.543 14.423)'%3e %3cpath id='Path_211' data-name='Path 211' d='M120.119%2c77c2.377%2c1.414%2c4.765%2c2.828%2c7.142%2c4.243q4.706%2c2.8%2c9.436%2c5.574a1.175%2c1.175%2c0%2c0%2c1%2c.642%2c1.129q-.018%2c9.572%2c0%2c19.133a1.135%2c1.135%2c0%2c0%2c1-.618%2c1.093q-8.093%2c4.759-16.186%2c9.567a1.162%2c1.162%2c0%2c0%2c1-1.331%2c0q-8.075-4.8-16.186-9.567a1.1%2c1.1%2c0%2c0%2c1-.618-1.058q.018-9.626%2c0-19.252a1.033%2c1.033%2c0%2c0%2c1%2c.547-.986q8.325-4.9%2c16.637-9.816a.119.119%2c0%2c0%2c0%2c.048-.059Zm4.813%2c18.408c-.166.1-.285.143-.392.214-1.188.7-2.365%2c1.4-3.553%2c2.092a.631.631%2c0%2c0%2c0-.368.63c.012%2c3.839.012%2c7.689.012%2c11.527v.357c-.012.594-.3.927-.761.927s-.725-.333-.749-.9v-.357c0-3.838%2c0-7.689.012-11.527a.656.656%2c0%2c0%2c0-.38-.654q-6.542-3.85-13.084-7.725c-.642-.38-.82-.761-.57-1.2s.7-.475%2c1.319-.107q6.56%2c3.868%2c13.12%2c7.76a.571.571%2c0%2c0%2c0%2c.677%2c0c1.2-.725%2c2.412-1.426%2c3.613-2.139.107-.059.2-.143.345-.226-.119-.071-.19-.131-.273-.178q-7.309-4.332-14.629-8.651a.446.446%2c0%2c0%2c0-.535%2c0c-1.474.879-2.959%2c1.759-4.445%2c2.626a.615.615%2c0%2c0%2c0-.357.63q.018%2c9.02%2c0%2c18.052a.642.642%2c0%2c0%2c0%2c.357.63q7.2%2c4.243%2c14.391%2c8.5c.119.071.238.143.416.238.012-.2.024-.321.024-.452%2c0-.63-.012-1.26%2c0-1.878.012-.547.3-.844.749-.844s.737.309.749.844c.012.654%2c0%2c1.307.012%2c1.961%2c0%2c.107.024.214.036.368a1.7%2c1.7%2c0%2c0%2c0%2c.226-.119q7.326-4.332%2c14.677-8.663a.48.48%2c0%2c0%2c0%2c.25-.487V89.359c0-.1-.024-.19-.036-.333-1.224.725-2.4%2c1.426-3.589%2c2.115a.536.536%2c0%2c0%2c0-.309.535c.012%2c1.961%2c0%2c3.922.012%2c5.883a.916.916%2c0%2c0%2c1-.487.891c-1.747%2c1.022-3.494%2c2.068-5.241%2c3.09a.769.769%2c0%2c0%2c1-1.236-.665%2c2.889%2c2.889%2c0%2c0%2c1%2c0-.321v-4.6C124.932%2c95.753%2c124.932%2c95.61%2c124.932%2c95.408Zm10.113-7.784a2.963%2c2.963%2c0%2c0%2c0-.285-.19q-7.291-4.314-14.593-8.628a.5.5%2c0%2c0%2c0-.582%2c0c-1.129.677-2.27%2c1.343-3.411%2c2.02-.071.048-.143.1-.238.155.309.178.57.333.832.5l4.884%2c2.888a.772.772%2c0%2c0%2c1%2c.38%2c1.105c-.226.392-.665.463-1.153.2-.083-.048-.166-.1-.238-.143-1.961-1.165-3.922-2.317-5.883-3.482a.553.553%2c0%2c0%2c0-.677.012c-1.022.63-2.056%2c1.224-3.09%2c1.842-.155.1-.3.178-.487.3.107.071.154.107.214.143q7.362%2c4.349%2c14.736%2c8.711a.41.41%2c0%2c0%2c0%2c.5-.012l3.066-1.818c.19-.107.38-.226.606-.368-.178-.107-.3-.19-.428-.261-1.878-1.117-3.767-2.222-5.645-3.339-.606-.357-.784-.749-.535-1.188s.713-.475%2c1.331-.119c2.175%2c1.283%2c4.338%2c2.555%2c6.5%2c3.85a.464.464%2c0%2c0%2c0%2c.57%2c0c1.105-.666%2c2.222-1.319%2c3.339-1.985A1.693%2c1.693%2c0%2c0%2c0%2c135.045%2c87.624Zm-4.67%2c4.552c-1.307.772-2.531%2c1.485-3.755%2c2.234a.545.545%2c0%2c0%2c0-.166.392c-.012%2c1.462-.012%2c2.935%2c0%2c4.4%2c0%2c.1.024.19.036.333.951-.559%2c1.83-1.165%2c2.769-1.616a1.716%2c1.716%2c0%2c0%2c0%2c1.129-1.961C130.291%2c94.731%2c130.375%2c93.495%2c130.375%2c92.176Z' transform='translate(-102.4 -77)'/%3e %3cpath id='Path_212' data-name='Path 212' d='M128.161%2c290.158c0-.475-.012-.963%2c0-1.438a.756.756%2c0%2c1%2c1%2c1.509-.059q.036%2c1.515%2c0%2c3.03a.743.743%2c0%2c0%2c1-.784.737.755.755%2c0%2c0%2c1-.713-.808C128.149%2c291.144%2c128.161%2c290.645%2c128.161%2c290.158Z' transform='translate(-125.095 -262.837)'/%3e %3cpath id='Path_213' data-name='Path 213' d='M153.661%2c302.937c0-.475-.012-.963%2c0-1.438a.75.75%2c0%2c1%2c1%2c1.5-.048q.036%2c1.5%2c0%2c2.995a.758.758%2c0%2c0%2c1-.784.772.767.767%2c0%2c0%2c1-.713-.844Z' transform='translate(-147.564 -274.106)'/%3e %3c/g%3e %3c/g%3e %3cg id='flip_02' data-name='flip 02' transform='translate(845.179 5473.328)'%3e %3cpath id='Path_225' data-name='Path 225' d='M92.524%2c117.689a7.86%2c7.86%2c0%2c0%2c1-1.044-.333%2c3.738%2c3.738%2c0%2c0%2c1-2.408-3.594c-.024-3.7-.012-5.557-.012-9.254v-.551H85.124a4.029%2c4.029%2c0%2c0%2c1-2.443-.769%2c3.692%2c3.692%2c0%2c0%2c1-1.613-3.02c-.024-1.78-.024-3.548%2c0-5.327a3.909%2c3.909%2c0%2c0%2c1%2c3.89-3.766c1.34-.023%2c2.692%2c0%2c4.1%2c0V81.822A3.937%2c3.937%2c0%2c0%2c1%2c93.307%2c77.7H108.8a3.937%2c3.937%2c0%2c0%2c1%2c4.246%2c4.122V96.23h.949a37.19%2c37.19%2c0%2c0%2c1%2c3.76.092%2c3.767%2c3.767%2c0%2c0%2c1%2c3.273%2c3.639c.036%2c1.8.036%2c3.605%2c0%2c5.419a3.908%2c3.908%2c0%2c0%2c1-3.866%2c3.743c-1.2.023-2.4.011-3.593.011h-.522V113.6a3.885%2c3.885%2c0%2c0%2c1-3.344%2c4.041.375.375%2c0%2c0%2c0-.119.057Q101.04%2c117.683%2c92.524%2c117.689ZM91.73%2c98.825V113.6a1.355%2c1.355%2c0%2c0%2c0%2c1.554%2c1.5H108.82c1.044%2c0%2c1.554-.494%2c1.565-1.493V109.56c0-.138-.012-.276-.024-.436h-3.843a1.317%2c1.317%2c0%2c0%2c1-1.459-1.378c0-1.665-.012-3.318%2c0-4.983a1.3%2c1.3%2c0%2c0%2c1%2c1.423-1.366c1.139-.011%2c2.277%2c0%2c3.416%2c0h.486V81.684a1.323%2c1.323%2c0%2c0%2c0-1.471-1.412H93.283a1.355%2c1.355%2c0%2c0%2c0-1.554%2c1.5v9.265H94.4V89.87a1.261%2c1.261%2c0%2c0%2c1%2c.688-1.217%2c1.346%2c1.346%2c0%2c0%2c1%2c1.459.092q3.932%2c2.532%2c7.863%2c5.075a1.254%2c1.254%2c0%2c0%2c1%2c0%2c2.216c-2.621%2c1.711-5.266%2c3.4-7.9%2c5.1a1.317%2c1.317%2c0%2c0%2c1-1.388.092%2c1.268%2c1.268%2c0%2c0%2c1-.723-1.194V98.825Zm4.756-.861s3.392-2.113%2c4.815-3.031c-1.447-.93-4.815-3.111-4.815-3.111l-.024%2c1.791-1.079.034H85.219c-.771%2c0-1.34.356-1.435%2c1.01a11.039%2c11.039%2c0%2c0%2c0-.012%2c1.653c.854-.034%2c1.672-.08%2c2.491-.092%2c3.06-.011%2c9.191%2c0%2c9.191%2c0l1.008-.011Zm11.231%2c8.519c.047.034.059.057.071.057%2c3.107%2c0%2c6.215.011%2c9.322%2c0a1.181%2c1.181%2c0%2c0%2c0%2c1.2-.976%2c11.648%2c11.648%2c0%2c0%2c0%2c.012-1.7c-.759.034-1.494.092-2.23.092-2.633.011-5.266%2c0-7.9%2c0h-.474Zm5.337-5.1c1.388%2c0%2c2.74.023%2c4.092-.011a1.276%2c1.276%2c0%2c0%2c0%2c1.21-1.263%2c1.241%2c1.241%2c0%2c0%2c0-1.139-1.274c-1.388-.046-2.763-.011-4.175-.011C113.054%2c99.675%2c113.054%2c100.5%2c113.054%2c101.385ZM89.038%2c98.814h-3.9a1.306%2c1.306%2c0%2c0%2c0-1.4%2c1.3%2c1.323%2c1.323%2c0%2c0%2c0%2c1.423%2c1.274c1.2.011%2c2.4%2c0%2c3.594%2c0a2.4%2c2.4%2c0%2c0%2c0%2c.285-.034Z' fill='%23fcfcfc'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var CardBack = function CardBack(_ref) {
  var backImage = _ref.backImage,
    _onClick = _ref.onClick,
    type = _ref.type;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showFlipIcon = _useState2[0],
    setshowFlipIcon = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    mobileView = _useState4[0],
    setmobileView = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    backIsVideo = _useState6[0],
    setbackIsVideo = _useState6[1];
  useEffect(function () {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }
    if (type && type === 'video') {
      setbackIsVideo(true);
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "card-back-root",
    style: {
      backgroundImage: !backIsVideo ? "url(".concat(backImage, ")") : 'unset'
    },
    onMouseOver: function onMouseOver() {
      setshowFlipIcon(true);
    },
    onMouseLeave: function onMouseLeave() {
      setshowFlipIcon(false);
    }
  }, !backIsVideo ? /*#__PURE__*/React.createElement("img", {
    className: "flipped-img",
    src: backImage,
    alt: "not found"
  }) : /*#__PURE__*/React.createElement("video", {
    className: "flipped-img",
    alt: "not found",
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false
  }, /*#__PURE__*/React.createElement("source", {
    src: backImage,
    type: "video/mp4"
  }), "Sorry, your browser doesn't support embedded videos."), /*#__PURE__*/React.createElement("div", {
    className: "card-icons-holder"
  }, /*#__PURE__*/React.createElement("img", {
    src: img$1,
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

var img = "data:image/png;base64,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";

var TraitCard = function TraitCard(_ref) {
  var trait = _ref.trait,
    _onClick = _ref.onClick,
    image = _ref.image,
    traitImg = _ref.traitImg;
  //console.log(traitImg)

  // const handleClaim = () => {
  //     if (claimUrl) {
  //         window.open(`${claimUrl}`, '_blank')
  //     }
  // }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "close-button",
    src: img,
    alt: "",
    onClick: function onClick(e) {
      return _onClick(e);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "trait-card-root",
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "trait-card-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trait-card-content-holder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trait-card-trait-icon-holder"
  }, /*#__PURE__*/React.createElement("img", {
    src: traitImg,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "trait-card-title-holder"
  }, /*#__PURE__*/React.createElement("p", {
    className: "trait-card-title"
  }, trait.name)), /*#__PURE__*/React.createElement("div", {
    className: "trait-card-description-holder"
  }, /*#__PURE__*/React.createElement("p", {
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

var css_248z = ".card-image-container{\r\n  position: relative;\r\n  /* min-height: 500px; */\r\n  margin: auto;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.pyramid_anim_container {\r\n  z-index: 2;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n.resizer-container{\r\n  padding: 10px;\r\n}\r\n\r\n.scope span {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transform-origin: center;\r\n  transform-style: preserve-3d;\r\n}\r\n.scope span:first-child {\r\n  transform: rotateY(calc(0deg)) translateZ(1px) rotateX(0deg);\r\n}\r\n.scope span:nth-child(2) {\r\n  transform: rotateY(calc(0deg)) translateZ(0px) rotateX(0deg);\r\n}\r\n\r\n.scope {\r\n  position: relative;\r\n  transform-style: preserve-3d;\r\n  animation: slid 5s linear infinite;\r\n  border-radius: 12px;\r\n  transition: 1.5s all;\r\n  padding: 10px;\r\n  /* box-shadow: 0px 55px 88px 0px rgba(0,0,0,0.42); */\r\n}\r\n.scope span {\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n}\r\n.front.active::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 100%;\r\n  display: block;\r\n  background: linear-gradient(112deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\r\n  background-position-x: 0;\r\n  background-repeat: no-repeat;\r\n  transition: all .35s ease-in-out;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n  animation: shiningEffect1 2s ease-in-out normal ;\r\n}\r\n.back.active::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  right: 100%;\r\n  display: block;\r\n  background: linear-gradient(250deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\r\n  background-position-x: 0;\r\n  background-repeat: no-repeat;\r\n  transition: all .35s ease-in-out;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n  animation: shiningEffect2 2s ease-in-out normal ;\r\n}\r\n.back_card.active::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  right: 100%;\r\n  display: block;\r\n  background: linear-gradient(250deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\r\n  background-position-x: 0;\r\n  background-repeat: no-repeat;\r\n  transition: all .35s ease-in-out;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n  animation: shiningEffect2 2s ease-in-out normal ;\r\n}\r\n.badge-img{\r\n  position: absolute;\r\n  width: 75px;\r\n  height: 75px;\r\n  bottom: 15px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n}\r\n.flip-icon {\r\n  /* position: absolute; */\r\n  width: 40px;\r\n  height: 40px;\r\n  /* margin-top: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;*/\r\n  cursor: pointer; \r\n}\r\n.fullscreen-icon{\r\n  /* position: absolute; */\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  /* margin-top: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0; */\r\n  cursor: pointer;\r\n}\r\n.back_card{\r\n  animation: hideBack 2s ease-in-out normal;\r\n  transition: all 1s;\r\n  visibility: hidden;\r\n  border-radius: 12px;\r\n}\r\n.back_card.active{\r\n  visibility: visible;\r\n}\r\n.card-back-root {\r\n  height: 100%;\r\n  transform: rotateY(180deg);\r\n  border-radius: 12px;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  -webkit-box-pack: end;\r\n  justify-content: flex-end;\r\n  position: relative;\r\n}\r\n.card-icons-holder{\r\n  position: absolute;\r\n  inset: 0px;\r\n  margin: auto;\r\n  width: 100%;\r\n  max-height: 40px;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n}\r\n.trait-container {\r\n  position: absolute;\r\n  display: flex;\r\n  -webkit-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.trait-holder{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 8px;\r\n  border:solid 2px white;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  overflow:hidden;\r\n  box-shadow: 2px 2px 4px rgba(0,0,0,0.35);\r\n}\r\n.trait-holder:hover {\r\n  border-color: #fc6405;\r\n  \r\n}\r\n.trait-holder img{\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events:none;\r\n}\r\n.trait-card-root{\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  transform: rotateY(180deg);\r\n  -webkit-background-position: center;\r\n  background-position: center;\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.close-button {\r\n  width: 20.5px;\r\n  height: 20.5px;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 12px;\r\n  z-index: 5;\r\n  transform: rotateX(0deg);\r\n}\r\n.trait-card-content {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  background-color: #fc6405b3;\r\n}\r\n.trait-card-content-holder{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 30px;\r\n \r\n}\r\n\r\n.trait-card-trait-icon-holder {\r\n  /* width: 100%; */\r\n  height: 40%;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n.trait-card-trait-icon-holder img{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.trait-card-title-holder{\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n.trait-card-title {\r\n  margin: 0px;\r\n  font-weight: 400;\r\n  color: rgb(250, 250, 242);\r\n  font-size: 36px;\r\n  font-family: Poppins-semibold;\r\n  line-height: 42px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  /* max-width: 250px; */\r\n  /* min-width: 250px; */\r\n}\r\n.trait-card-description-holder{\r\n  margin-top: 25px;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  overflow-y: auto;\r\n}\r\n .trait-card-description-holder::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n.trait-card-description-holder::-webkit-scrollbar-track {\r\n  background: #ffffff49;\r\n} \r\n.trait-card-description-holder::-webkit-scrollbar-thumb  {\r\n  background: #ffffff;\r\n} \r\n.trait-card-description{\r\n  margin: 0px;\r\n  font-weight: 400;\r\n  color: rgb(250, 250, 242);\r\n  font-family: poppins;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  text-align: center;\r\n  max-width: 90%;\r\n  min-width: 120px;\r\n  word-break: break-word\r\n}\r\n.trait-card-button-holder{\r\n  text-align: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n@keyframes shiningEffect1 {\r\n  0%{\r\n\r\n    left: -100%;\r\n  }\r\n 100%{\r\n\r\n  left: 100%;\r\n }\r\n}\r\n@keyframes shiningEffect2 {\r\n  0%{\r\n\r\n    right: -100%;\r\n  }\r\n 100%{\r\n  right: 100%;\r\n }\r\n}\r\n\r\n@keyframes hideBack {\r\n from{\r\n  visibility: visible;\r\n  }\r\n to{\r\n    visibility: hidden;\r\n  }\r\n}\r\n.flipped-img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n  object-fit: cover;\r\n  transition: 2s;\r\n}\r\n.buttonHolder{\r\n  position: fixed;\r\n  height: 16px;\r\n  width: 16px;\r\n  top: 4%;\r\n  left: 4%;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  line-height: 1rem;\r\n  color: #fff;\r\n  transition: color .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  /* .card-image-container {\r\n      min-height: 300px;\r\n  } */\r\n  .scope {\r\n    position: relative;\r\n    height: 440px;\r\n    transform-style: preserve-3d;\r\n    animation: slid 5s linear infinite;\r\n    transition: 2s all;\r\n  }\r\n  .arrow{\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (max-width: 350px) {\r\n  .badge-img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  .scope {\r\n    position: relative;\r\n    /* width: 250px !important;\r\n    height: 340px; */\r\n    transform-style: preserve-3d;\r\n    animation: slid 5s linear infinite;\r\n    transition-property: position;\r\n    transition: 2s;\r\n  }\r\n}\r\n\r\n\r\n.c-large.square .trait-card-trait-icon-holder{\r\n  /* width: 100%; */\r\n  height: 35%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.c-large.square .c-medium .trait-card-title{\r\n  font-size: 36px;\r\n}\r\n\r\n.c-large.square .trait-card-description{\r\n  line-height: 22px;\r\n}\r\n\r\n\r\n.c-medium .trait-holder{\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.c-medium .trait-card-trait-icon-holder{\r\n /*  width: 100%; */\r\n  height: 30%;\r\n  margin-bottom: 10px;\r\n}\r\n.c-medium .trait-card-title{\r\n  font-size: 32px;\r\n}\r\n.c-medium .trait-card-description{\r\n  line-height: 22px;\r\n}\r\n\r\n.c-medium.square .trait-card-trait-icon-holder{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.c-medium.square .trait-card-title{\r\n  font-size: 28px;\r\n  line-height:30px\r\n}\r\n\r\n\r\n.c-small .trait-holder{\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n.c-small .trait-card-content-holder{\r\n  padding: 20px 10px 20px 10px;\r\n}\r\n.c-small .trait-card-trait-icon-holder{\r\n  /* width: 100%; */\r\n  height: 25%;\r\n  margin-bottom:5px;\r\n}\r\n.c-small .trait-card-title{\r\n  font-size: 27px\r\n}\r\n\r\n.c-small .trait-card-description{\r\n  line-height: 16px;\r\n  line-height: 17px;\r\n}\r\n\r\n.c-small.square .trait-card-trait-icon-holder{\r\n  width: 52px;\r\n  height: 52px;\r\n  margin-top:0px;\r\n  margin-bottom:0px;\r\n}\r\n.c-small.square .trait-card-title{\r\n  font-size: 24px;\r\n  line-height: 25px;\r\n}\r\n\r\n.c-small.square .trait-card-content-holder{\r\n  padding: 15px 10px 15px 10px;\r\n}\r\n\r\n.c-small.square .trait-card-description-holder{\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n.c-xsmall .trait-card-content-holder{\r\n  padding: 30px 5px 20px 5px;\r\n}\r\n\r\n/* .c-small .trait-card-trait-icon-holder, */\r\n .c-xsmall .trait-card-trait-icon-holder{\r\n  display: none;\r\n}\r\n.c-xsmall .trait-card-content-holder .trait-card-title{\r\n  font-size: 20px;\r\n  line-height: 22px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.c-xsmall .trait-card-description{\r\n  line-height: 18px;\r\n}";
styleInject(css_248z);

const useContainerDimensions = myRef => {
  const getDimensions = () => ({
    width: myRef.current.offsetWidth,
    height: myRef.current.offsetHeight
  });
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
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
    imageContainerWidth = _ref$imageContainerWi === void 0 ? null : _ref$imageContainerWi,
    apiUrl = _ref.apiUrl;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    traitsVisible = _useState2[0],
    setTraitsVisible = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedTrait = _useState4[0],
    setSelectedTrait = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showBackCard = _useState6[0],
    setshowBackCard = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showFlipIcon = _useState8[0],
    setshowFlipIcon = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2);
    _useState10[0];
    _useState10[1];
  var _useState11 = useState(traitTypes ? traitTypes[0] : null),
    _useState12 = _slicedToArray(_useState11, 2),
    traitType = _useState12[0],
    setTraitType = _useState12[1];
  // const [randomImages, setrandomImages] = useState([ARTARRAY[0]]);
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2);
    _useState14[0];
    _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2);
    _useState16[0];
    _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    mobileView = _useState18[0],
    setmobileView = _useState18[1];
  var _useState19 = useState(true),
    _useState20 = _slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  var imageRef = useRef();
  var cardRef = useRef(null);
  var _useState21 = useState(imageContainerWidth ? imageContainerWidth - horizontalPadding : 400),
    _useState22 = _slicedToArray(_useState21, 2);
    _useState22[0];
    var setDefaultScopeWidth = _useState22[1];
  //const GALAXIS_BASE_URL = 'https://galaxis-web-backend-staging.herokuapp.com';
  var GALAXIS_BASE_URL = apiUrl ? apiUrl : 'https://galaxis-backend.herokuapp.com';

  //console.log('api url',GALAXIS_BASE_URL);

  var containerRef = useRef();
  var _useContainerDimensio = useContainerDimensions(containerRef),
    width = _useContainerDimensio.width,
    height = _useContainerDimensio.height;
  var _useState23 = useState(0),
    _useState24 = _slicedToArray(_useState23, 2),
    imageRatio = _useState24[0],
    setImageRatio = _useState24[1];
  var _useState25 = useState({
      width: 0,
      height: 0
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    resizerComponentSize = _useState26[0],
    setResizerComponentSize = _useState26[1];
  var _useState27 = useState('medium'),
    _useState28 = _slicedToArray(_useState27, 2),
    containerSize = _useState28[0],
    setContainerSize = _useState28[1];
  useEffect(function () {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }
    if (window.innerWidth < 410) {
      setDefaultScopeWidth(window.innerWidth - horizontalPadding);
    }
    if (metadata.traits && metadata.traits.length > 0) {
      setSelectedTrait(metadata.traits[0]);
    }
  }, []);
  var showTraits = function showTraits(e) {
    e.stopPropagation();
    setTraitsVisible(true);
    // document.getElementById('scope').style.transform =
    //   'perspective(1000px) rotateY(180deg)';
    cardRef.current.style.transform = 'perspective(1000px) rotateY(180deg)';
  };
  var hideTraits = function hideTraits(e) {
    e.stopPropagation();
    setTraitsVisible(false);
    setshowBackCard(false);
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg)';
  };
  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };
  var setTheImageRatio = function setTheImageRatio(width, height) {
    setImageRatio(height / width);
  };
  useEffect(function () {
    if (imageRatio != 0) {
      setResizerComponentSize({
        width: width < height / imageRatio ? 100 + '%' : height / imageRatio,
        height: width < height / imageRatio ? width * imageRatio : '100%'
      });
    }
  }, [imageRatio, width, height]);
  useEffect(function () {
    //console.log(imageRatio,width,height)
    if (width) {
      var cSize = '';
      if (width > 500) {
        cSize = 'c-xlarge';
      } else if (width > 400) {
        cSize = 'c-large';
      } else if (width > 330) {
        cSize = 'c-medium';
      } else if (width > 240) {
        cSize = 'c-small';
      } else {
        cSize = 'c-xsmall';
      }
      if (imageRatio > 0) {
        cSize += imageRatio === 1 ? ' square' : ' protrait';
      }
      setContainerSize(cSize);
      // console.log(containerSize)
    }
  }, [width, imageRatio]);
  useEffect(function () {
    if (metadata.sides && metadata.sides.length >= 1 && metadata.sides[0].original_height && metadata.sides[0].original_width) {
      var originalHeight = metadata.sides[0].original_height;
      var originalWidth = metadata.sides[0].original_width;
      //console.log(width, height);
      // console.log(originalHeight, originalWidth)
      if (imageRatio != 0) {
        //console.log(imageRatio)
        setResizerComponentSize({
          width: originalWidth < originalHeight / imageRatio ? 'auto' : originalHeight / imageRatio,
          height: originalWidth < originalHeight / imageRatio ? originalWidth * imageRatio : 'auto'
        });
      }
      setLoading(false);
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement(SpinnerCircular, {
    size: 80,
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
  }), metadata && /*#__PURE__*/React.createElement("div", {
    className: "card-image-container ".concat(containerSize),
    ref: containerRef,
    style: {
      opacity: loading ? '0' : '1'
    },
    onClick: function onClick(e) {
      return stopPropagation(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyramid_anim_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resizer-container",
    style: {
      opacity: resizerComponentSize.width === 0 ? 0 : 1,
      width: resizerComponentSize.width,
      height: resizerComponentSize.height
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "scope ".concat(traitsVisible ? 'active' : '', "  "),
    style: {
      width: '100%',
      height: '100%'
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
  }, /*#__PURE__*/React.createElement("span", {
    className: "front ".concat(!traitsVisible ? 'active' : '', " "),
    id: "front-span"
  }, metadata.sides && metadata.sides.length >= 1 && (!metadata.sides[0].type || metadata.sides[0].type !== 'video') || !metadata.sides ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "flipped-img",
    src: metadata.sides && metadata.sides.length >= 1 && metadata.sides[0].image ? metadata.sides[0].image : metadata.image,
    alt: "not found",
    ref: imageRef,
    onLoad: function onLoad() {
      setTheImageRatio(imageRef.current.naturalWidth, imageRef.current.naturalHeight);
      setLoading(false);
    }
  }), metadata.overlays && metadata.overlays.length > 0 && metadata.overlays[0].layers && metadata.overlays[0].layers[0].length > 0 && /*#__PURE__*/React.createElement("img", {
    src: metadata.overlays[0].layers[0],
    className: "flipped-img",
    alt: "overlay"
  })) : /*#__PURE__*/React.createElement("video", {
    className: "flipped-img",
    alt: "not found",
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
    onLoadedData: function onLoadedData() {
      return setTheImageRatio(metadata.sides[0].original_width, metadata.sides[0].original_height);
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: metadata.sides[0].image,
    type: "video/mp4"
  }), "Sorry, your browser doesn't support embedded videos."), /*#__PURE__*/React.createElement("div", {
    className: "card-icons-holder"
  }, metadata.sides && metadata.sides.length > 1 && /*#__PURE__*/React.createElement("img", {
    src: img$1,
    className: "flip-icon",
    alt: "not found",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: function onClick(e) {
      showTraits(e);
      setshowBackCard(true);
    }
  })), metadata.traits && metadata.traits.length > 0 && traitTypes && /*#__PURE__*/React.createElement("div", {
    className: "trait-container ".concat(traitsVisible ? 'hide' : '')
  }, metadata.traits.map(function (elem, metadataIndex) {
    return elem.icon_url ? /*#__PURE__*/React.createElement(React.Fragment, null, parseInt(elem.status) === 1 && /*#__PURE__*/React.createElement("div", {
      className: "trait-holder",
      key: metadataIndex,
      onClick: function onClick(e) {
        setSelectedTrait(metadata.traits[metadataIndex]);
        // setTraitType(traitTypes[index]);
        showTraits(e);
      }
    }, ' ', /*#__PURE__*/React.createElement("img", {
      src: elem.icon_url,
      alt: "undefined"
    }), ' ')) : traitTypes.map(function (traitElem, index) {
      if (parseInt(elem.type) === traitElem.id) {
        return /*#__PURE__*/React.createElement("div", {
          className: "trait-holder",
          key: index,
          onClick: function onClick(e) {
            setSelectedTrait(metadata.traits[metadataIndex]);
            setTraitType(traitTypes[index]);
            showTraits(e);
          }
        }, ' ', /*#__PURE__*/React.createElement("img", {
          src: GALAXIS_BASE_URL + traitElem.icon_white,
          alt: "undefined"
        }), ' ');
      }
    });
  }))), metadata.traits && metadata.traits.length > 0 && traitTypes && /*#__PURE__*/React.createElement("span", {
    className: "back ".concat(traitsVisible ? 'active' : '', " "),
    id: "trait-span"
  }, /*#__PURE__*/React.createElement(TraitCard, {
    trait: selectedTrait,
    onClick: hideTraits,
    image: metadata.sides && metadata.sides.length > 1 ? metadata.sides[0].image : metadata.image,
    traitImg: selectedTrait.icon_url ? selectedTrait.icon_url : GALAXIS_BASE_URL + traitType.icon_white
    // claimUrl={selectedTrait.claim_url}
  })), metadata.sides && metadata.sides.length > 1 && /*#__PURE__*/React.createElement("span", {
    className: "back_card ".concat(showBackCard ? 'active' : '', " "),
    id: "back-span"
  }, /*#__PURE__*/React.createElement(CardBack, {
    onClick: hideTraits,
    backImage: metadata.sides[1].image,
    type: metadata.sides[1].type === 'video' && metadata.sides[1].type
  })))))));
};

export { GalaxisCard };

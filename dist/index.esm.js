import React, { useState, useEffect, useRef } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { ethers, BigNumber } from 'ethers';
import axios from 'axios';
import { toast } from 'react-toast';
import { Zoom } from 'zoom-next';

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3e %3cg id='Group_1817' data-name='Group 1817' transform='translate(-912 -5536)'%3e %3cg id='Group_1814' data-name='Group 1814' transform='translate(912 5535.843)' opacity='0.4'%3e %3crect id='Rectangle_370' data-name='Rectangle 370' width='70' height='70' rx='7' transform='translate(0 0.157)'/%3e %3cg id='physical_redeem' data-name='physical redeem' transform='translate(18.543 14.423)'%3e %3cpath id='Path_211' data-name='Path 211' d='M120.119%2c77c2.377%2c1.414%2c4.765%2c2.828%2c7.142%2c4.243q4.706%2c2.8%2c9.436%2c5.574a1.175%2c1.175%2c0%2c0%2c1%2c.642%2c1.129q-.018%2c9.572%2c0%2c19.133a1.135%2c1.135%2c0%2c0%2c1-.618%2c1.093q-8.093%2c4.759-16.186%2c9.567a1.162%2c1.162%2c0%2c0%2c1-1.331%2c0q-8.075-4.8-16.186-9.567a1.1%2c1.1%2c0%2c0%2c1-.618-1.058q.018-9.626%2c0-19.252a1.033%2c1.033%2c0%2c0%2c1%2c.547-.986q8.325-4.9%2c16.637-9.816a.119.119%2c0%2c0%2c0%2c.048-.059Zm4.813%2c18.408c-.166.1-.285.143-.392.214-1.188.7-2.365%2c1.4-3.553%2c2.092a.631.631%2c0%2c0%2c0-.368.63c.012%2c3.839.012%2c7.689.012%2c11.527v.357c-.012.594-.3.927-.761.927s-.725-.333-.749-.9v-.357c0-3.838%2c0-7.689.012-11.527a.656.656%2c0%2c0%2c0-.38-.654q-6.542-3.85-13.084-7.725c-.642-.38-.82-.761-.57-1.2s.7-.475%2c1.319-.107q6.56%2c3.868%2c13.12%2c7.76a.571.571%2c0%2c0%2c0%2c.677%2c0c1.2-.725%2c2.412-1.426%2c3.613-2.139.107-.059.2-.143.345-.226-.119-.071-.19-.131-.273-.178q-7.309-4.332-14.629-8.651a.446.446%2c0%2c0%2c0-.535%2c0c-1.474.879-2.959%2c1.759-4.445%2c2.626a.615.615%2c0%2c0%2c0-.357.63q.018%2c9.02%2c0%2c18.052a.642.642%2c0%2c0%2c0%2c.357.63q7.2%2c4.243%2c14.391%2c8.5c.119.071.238.143.416.238.012-.2.024-.321.024-.452%2c0-.63-.012-1.26%2c0-1.878.012-.547.3-.844.749-.844s.737.309.749.844c.012.654%2c0%2c1.307.012%2c1.961%2c0%2c.107.024.214.036.368a1.7%2c1.7%2c0%2c0%2c0%2c.226-.119q7.326-4.332%2c14.677-8.663a.48.48%2c0%2c0%2c0%2c.25-.487V89.359c0-.1-.024-.19-.036-.333-1.224.725-2.4%2c1.426-3.589%2c2.115a.536.536%2c0%2c0%2c0-.309.535c.012%2c1.961%2c0%2c3.922.012%2c5.883a.916.916%2c0%2c0%2c1-.487.891c-1.747%2c1.022-3.494%2c2.068-5.241%2c3.09a.769.769%2c0%2c0%2c1-1.236-.665%2c2.889%2c2.889%2c0%2c0%2c1%2c0-.321v-4.6C124.932%2c95.753%2c124.932%2c95.61%2c124.932%2c95.408Zm10.113-7.784a2.963%2c2.963%2c0%2c0%2c0-.285-.19q-7.291-4.314-14.593-8.628a.5.5%2c0%2c0%2c0-.582%2c0c-1.129.677-2.27%2c1.343-3.411%2c2.02-.071.048-.143.1-.238.155.309.178.57.333.832.5l4.884%2c2.888a.772.772%2c0%2c0%2c1%2c.38%2c1.105c-.226.392-.665.463-1.153.2-.083-.048-.166-.1-.238-.143-1.961-1.165-3.922-2.317-5.883-3.482a.553.553%2c0%2c0%2c0-.677.012c-1.022.63-2.056%2c1.224-3.09%2c1.842-.155.1-.3.178-.487.3.107.071.154.107.214.143q7.362%2c4.349%2c14.736%2c8.711a.41.41%2c0%2c0%2c0%2c.5-.012l3.066-1.818c.19-.107.38-.226.606-.368-.178-.107-.3-.19-.428-.261-1.878-1.117-3.767-2.222-5.645-3.339-.606-.357-.784-.749-.535-1.188s.713-.475%2c1.331-.119c2.175%2c1.283%2c4.338%2c2.555%2c6.5%2c3.85a.464.464%2c0%2c0%2c0%2c.57%2c0c1.105-.666%2c2.222-1.319%2c3.339-1.985A1.693%2c1.693%2c0%2c0%2c0%2c135.045%2c87.624Zm-4.67%2c4.552c-1.307.772-2.531%2c1.485-3.755%2c2.234a.545.545%2c0%2c0%2c0-.166.392c-.012%2c1.462-.012%2c2.935%2c0%2c4.4%2c0%2c.1.024.19.036.333.951-.559%2c1.83-1.165%2c2.769-1.616a1.716%2c1.716%2c0%2c0%2c0%2c1.129-1.961C130.291%2c94.731%2c130.375%2c93.495%2c130.375%2c92.176Z' transform='translate(-102.4 -77)'/%3e %3cpath id='Path_212' data-name='Path 212' d='M128.161%2c290.158c0-.475-.012-.963%2c0-1.438a.756.756%2c0%2c1%2c1%2c1.509-.059q.036%2c1.515%2c0%2c3.03a.743.743%2c0%2c0%2c1-.784.737.755.755%2c0%2c0%2c1-.713-.808C128.149%2c291.144%2c128.161%2c290.645%2c128.161%2c290.158Z' transform='translate(-125.095 -262.837)'/%3e %3cpath id='Path_213' data-name='Path 213' d='M153.661%2c302.937c0-.475-.012-.963%2c0-1.438a.75.75%2c0%2c1%2c1%2c1.5-.048q.036%2c1.5%2c0%2c2.995a.758.758%2c0%2c0%2c1-.784.772.767.767%2c0%2c0%2c1-.713-.844Z' transform='translate(-147.564 -274.106)'/%3e %3c/g%3e %3c/g%3e %3cg id='flip_02' data-name='flip 02' transform='translate(845.179 5473.328)'%3e %3cpath id='Path_225' data-name='Path 225' d='M92.524%2c117.689a7.86%2c7.86%2c0%2c0%2c1-1.044-.333%2c3.738%2c3.738%2c0%2c0%2c1-2.408-3.594c-.024-3.7-.012-5.557-.012-9.254v-.551H85.124a4.029%2c4.029%2c0%2c0%2c1-2.443-.769%2c3.692%2c3.692%2c0%2c0%2c1-1.613-3.02c-.024-1.78-.024-3.548%2c0-5.327a3.909%2c3.909%2c0%2c0%2c1%2c3.89-3.766c1.34-.023%2c2.692%2c0%2c4.1%2c0V81.822A3.937%2c3.937%2c0%2c0%2c1%2c93.307%2c77.7H108.8a3.937%2c3.937%2c0%2c0%2c1%2c4.246%2c4.122V96.23h.949a37.19%2c37.19%2c0%2c0%2c1%2c3.76.092%2c3.767%2c3.767%2c0%2c0%2c1%2c3.273%2c3.639c.036%2c1.8.036%2c3.605%2c0%2c5.419a3.908%2c3.908%2c0%2c0%2c1-3.866%2c3.743c-1.2.023-2.4.011-3.593.011h-.522V113.6a3.885%2c3.885%2c0%2c0%2c1-3.344%2c4.041.375.375%2c0%2c0%2c0-.119.057Q101.04%2c117.683%2c92.524%2c117.689ZM91.73%2c98.825V113.6a1.355%2c1.355%2c0%2c0%2c0%2c1.554%2c1.5H108.82c1.044%2c0%2c1.554-.494%2c1.565-1.493V109.56c0-.138-.012-.276-.024-.436h-3.843a1.317%2c1.317%2c0%2c0%2c1-1.459-1.378c0-1.665-.012-3.318%2c0-4.983a1.3%2c1.3%2c0%2c0%2c1%2c1.423-1.366c1.139-.011%2c2.277%2c0%2c3.416%2c0h.486V81.684a1.323%2c1.323%2c0%2c0%2c0-1.471-1.412H93.283a1.355%2c1.355%2c0%2c0%2c0-1.554%2c1.5v9.265H94.4V89.87a1.261%2c1.261%2c0%2c0%2c1%2c.688-1.217%2c1.346%2c1.346%2c0%2c0%2c1%2c1.459.092q3.932%2c2.532%2c7.863%2c5.075a1.254%2c1.254%2c0%2c0%2c1%2c0%2c2.216c-2.621%2c1.711-5.266%2c3.4-7.9%2c5.1a1.317%2c1.317%2c0%2c0%2c1-1.388.092%2c1.268%2c1.268%2c0%2c0%2c1-.723-1.194V98.825Zm4.756-.861s3.392-2.113%2c4.815-3.031c-1.447-.93-4.815-3.111-4.815-3.111l-.024%2c1.791-1.079.034H85.219c-.771%2c0-1.34.356-1.435%2c1.01a11.039%2c11.039%2c0%2c0%2c0-.012%2c1.653c.854-.034%2c1.672-.08%2c2.491-.092%2c3.06-.011%2c9.191%2c0%2c9.191%2c0l1.008-.011Zm11.231%2c8.519c.047.034.059.057.071.057%2c3.107%2c0%2c6.215.011%2c9.322%2c0a1.181%2c1.181%2c0%2c0%2c0%2c1.2-.976%2c11.648%2c11.648%2c0%2c0%2c0%2c.012-1.7c-.759.034-1.494.092-2.23.092-2.633.011-5.266%2c0-7.9%2c0h-.474Zm5.337-5.1c1.388%2c0%2c2.74.023%2c4.092-.011a1.276%2c1.276%2c0%2c0%2c0%2c1.21-1.263%2c1.241%2c1.241%2c0%2c0%2c0-1.139-1.274c-1.388-.046-2.763-.011-4.175-.011C113.054%2c99.675%2c113.054%2c100.5%2c113.054%2c101.385ZM89.038%2c98.814h-3.9a1.306%2c1.306%2c0%2c0%2c0-1.4%2c1.3%2c1.323%2c1.323%2c0%2c0%2c0%2c1.423%2c1.274c1.2.011%2c2.4%2c0%2c3.594%2c0a2.4%2c2.4%2c0%2c0%2c0%2c.285-.034Z' fill='%23fcfcfc'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

const CardBack = _ref => {
  let {
    backImage,
    onClick
  } = _ref;
  const [showFlipIcon, setshowFlipIcon] = useState(false);
  useState(false);
  useState(null);
  const [mobileView, setmobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "card-back-root",
    style: {
      backgroundImage: `url(${backImage})`
    },
    onMouseOver: () => {
      setshowFlipIcon(true);
    },
    onMouseLeave: () => {
      setshowFlipIcon(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-icons-holder"
  }, /*#__PURE__*/React.createElement("img", {
    src: img$5,
    className: "flip-icon",
    alt: "not found",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: e => {
      onClick(e);
    }
  }))));
};

var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABuCSURBVHgB7V1/jFXVnf/eNzMMv1GjMjMdU7PQNgsxWTEblthE22TjampEF12oUsPCpiogiNrFbVKff3TbdFvqlh8iYBWBlB1nqxSXarSuZCWssUIbd6Z/LBoTkZnB32gjAr7b8zlzvud9z/ee++a9eReSJpzkzL3v3jvnfn+f7/me7zmX6Gw5W86Ws+VsOVvOlrPlbDlbznhJqMmSpmliSqrbMtfJXA8u0Z9PsYBLHHBubwzjWlgpUWMliVSiLCPBFQ+0/F8wjApgfBEFsDh4iI8Uga1cLttrjhkeB4XfaQGQa4zwEmAGxp4bgEv6GQG0/v8zWhzRLUyUFYoAJ36eInjwufpN6rmmAKUcoiUaeHG/5Kp8psTPMWNi7TUNcJ348LuVkGQERD4nYC9xGxHiB4Io6Ncc0KQIJgAv1VMZcIkMKY2ppf4FloBoOcJVogbxEngQ5WhR3SUGlJIUDUjCwKC+++67Xzhx4uOHDx/+/24H3EhI5WoVFVOi2srtK430Ei5hfPfdtxxOh7spnwle0ylu1uruL/JMTQYw/RsAfvbZsd0G2N/i+N57h7uF9GcA5/9X0j8qoPNKzNRpovFRwsrnECiJE3DMw0mZ4VEJ1Uh2PbdK4nNlJtT6P0WEvL5lNISnHPscSDtrroCpxf1uAewxnFgT8hhBORpBOQKl3dBhg2bcrWTY52JV9Q/wOY433nhjcujQoS9ccMHkh8zjnbIh/J44cfJDuK/aSbgNvEO2LcsDDzyQOHgaZkIyXOTv4B4JXCU+uAaX89Ch17oAewwn4Aqc+vr68uBKEzUAkk1QXlFeQtTWCYlpQX377UMXaSnRVUhNy5VXXtmKo2Fci2sjzzQFZqlBU5SReqpKY0ZaHSyMU6shbkM4if/P9I3sPcm+JoOLds/kUdtFJhyOMbNTB8CtrrYo5ANGU44dpRqFxyyU7WwzTOb3skAApssuu6ytHoGSOIFZaEMIZS4Oir5VaXHD7aSKh9WgJGJ27DMGeHrwwR90nX/+hRu0io5AoIHDh99aunjx0iMXXHBB+sQTTySmLRzZzHiTIN6dkjJDDsDYK+QzftRK8ZIYwtl7L774or1giNl50UWN4/TWW0fvWLJkyYBpJwVtZs6cmUbMairgCsMDjuBMeImMRNwfRwOoBPjQobeWGiAHjMTRq6++CqA9QACez9kmp9UYjCRsKuCnGEOUYHmc0G+98847CQhvYEgMDMnrr/d1dHdftL5JnN42MKeqT/F4uHMINguVB8oj4R6IvcebgOPHj20olZJZNMoimcCXjDRCElOJgHg+1cRnYeFr8ojOG23wQyA4axkkFMT/+OOPQXjb/oEDB7pmzpy+bjTE51KppAfGjp18O9o377IwarQFPoEWaNvqz9kUoKLHZ8B7eh7vHK20CCAG+voOLZs1a9YRaMKkSZNSNktUNTv+/dLsiHMt/bW8Jmty2Nzg94wZM5Lt27d3Nk/8yuDbbx++Y9q0mUcYPW2KhHmpCPgsjiUS9kmrjzv3CEFqzIsG+/peW4YX0ygLEAbikL5PP/00OXr0aMkQn13iTIfr+iQdRPNay0iyuZLwG8Lbdh3xQXjbOW7fvrkQ4vf3/99SQ5MBCTO0QNLSET8uHMI10l5Di6jWS0A152MMEmP6+w988fjxj56ux2Oo5UkYJnwR7TmPpM1V7ylRZOQt3WIdRtADK+fxeNhR8c56vZ28Ctz37//vi5keAm6uMVdeDggt/Uti0KU7Lcsx5y1YmwlpxY3+/n4jSbMGDh48UIgmwBRAC3DNvM/2CSiw3+JZ3z/df//9wSAq9gzDDrPmOnzbliF+IZIP3OfM+ZqVfEMPdOj2nc6pyB24OI31JjXohCmrIvzbmwfDbcuA6dOnw3VL9u59tnP27L9ZWyqVOmiUBX3C668fWjZv3i0DQAbFEA/2kti9y+ncGKnAVUZx/xOMIYoi/u9//7vls2dfMSDgSR1dIDypM3eaETHY05Ls1BgZCu1w4l7AxLcXT506Ze/ffPPiwZde+p87m9WEadOGNcEwlv3zEtttEB8ElSXirdn/Y42VxAfcRREfuM6dO39IvhOFtYCJ7+ANNJKfd+ZnuBNms5PjfvKDULMUL2ECvfnmm7bBzz//PFm48J8KYQII1NOztYNUKIKqTPC/nSpbN9PFZWyFp4YjfHxyxC/K2wGOwHVgYIC6u7stjLAEXJxry6bPCo2ia0YLEjEAC0Zjzn8mRgb2nxkA04MbAAIMcAAmmzat7bzqqqsebNYcHTjw6nKMmPnauHHjUoecVWs2L9xXSPdSHY3k7zPEv6Rp4r/wwgsrrrnm+oHOzk5yDLDEbG1tTVENTdjkeLOEPzy2cVUOLAPPRw5oPBLajrL9JyGZAAjFAGV/79rV01EUE0wnd0ReN4LAjCDXsfpzFHS07hkLizE7HUVI/rPPPrvyuutugnanBt80xoAxY8bAQkjis6Cwm58Kd9QPyDKhBvV+2ReUwIATJ04ksP/GBHkNAPHNQMo+ZwZs9Mtf7uy6+uq/+2lLS8tUagLx/v7Xl5rBmkVc35f9Ebk+Cr8Zxm3btnVeeumMdc0IAmB47rnn7rr22nkMg5ZwPq8IeCpuZK+fSVOV5gIGsG8aK9yp+XO8wKga7L99wEQ4QXyikEDJDTfMH/j1r5+5yzBniEZZQDhI78GD+yG9Cfc9XJjY/E5mBjQUxJ81a+baZon/1FNPrQLxzz//fHtt6lQrT5nIgYLNjriNuam4uI+/zqEUdkW5gUyDqngmQcoYyYsvvjj57LPPSo4B/JxsJ9m5c2vHdddd17QmHDzYv2zBggWDztbyrWBk6dxi2r9/f9OSD8HZtWvXXfPn38pORYXfCROEE4d3xbyX7b+9z0FGUn0B5WmAHMKTmiVyXkeg/ixp0AIDRMzP9UwFAkVoAgi6devDnej8wXj5DueFWLO4d+/eriKID5gB+3nnnWfxMhpg6QANAOG5D4AJBtOhiagc16KqGxoEFxORrOY7YaqtARl3kG0sLoIgRiKs5MMLGhqydC7ptorSBDEAsgQBAYwZtJpgiN8xe/ZfrS1I8oGIFy7DgNRM0Ps+wHlCqRGG1Agi+h/7rOiEoTGW+Bi1q85Xxv/94Ksk7JVmSDLCeckB5DtitG0Atufnnntu8sEHH6Tbtj3SOW/e369plgkvvfSK8cUXDjrtSyCJjz32WOdXv/rXP2uW+L29/7lq4cLFutOPdr5MfGf6/D0j+RU9ao+F1PmeDWCJ2IrWADthgo7YuXr2Ocdx/1KopOugrBdkiO+fZVUDYrt3717VrDkCobdt2+wHa5s2beoqkPhDRmCCe+iAjWARhYIJ4lvzB/fTmR+LJ8L2pMy2DLGlYSJXVaLlIExObFB1PFACE3hAhuuwx84jsmbHMCGBKQITSGVcOE0gowkdRWjCCy/sW4Hzr3/98n8vwuYbz40FI4Xtf//996XpAW6pMbFSCyo0gqZo399dDLQgyZm60yUIyglGeG/IEDSFW+rMkfWcDCKJeDEYYIEpigkWoAJs/m23rTj64YcfBsEzxwRJVHsPJg/9jvZ+qDqzV4m8Ks37nYjpvWBSWI+K3VF3sPboNCHJeS5hiWItQOnp2dZx7bXXNsWEZoqy+YCN0Ffxfd3xusv2aIhfAfE5AoprLgpqn43NB9uTiEaUvDsUagEnRpF8MV6CI9s7vu7MUMYl5QGMkVL72yGYANmbblo41GyfMNqCd+7c+R93w+bzNcDm3E5LfNAFZocinS+7nmIewE6pclvS9eR0GfSvmsYoSa3f3CmrkKo9uqk90gE6UtJP8TCHv/b441s6b7xx3o/PlCaA+E8++eTd3/zmokEjCCk0Uks/uYGXs/s4BeErQtCCgRd8fxd60OYn1/Zzidr+vAkanqFyATq+H5w735z7AnnPMkaaIf7fRx99uGP+/H/4yelmgiT+OeecYz00RfhorIftPs7Z9ovAYIUnjMrVrA4epQejX9GuLyV9Q6Z4yCEyGkZkj6N7usA1NVJCDCjHiOCewo2DWuMCkIbEsbsHQqxc+R1LmNNpjtjsgPj4bTrd4D7DhwJ4OeQAHIATcDOlIsLO5I6Jy2dKYzNzMpuDsp1xJjk3muQUKamY++RRYIJYDQPK1+G6wS0F4bkzllIHQnz00Ud0++0rh3bs2HHP6WAC2kTbixZ927fN5kfjhT8GXm9KjPTbIwZdfE3FeyrS5rsxlacL9wF5dI1mR6O4yXp/Q/cDIovNqiM0AIMSMAFqKhuFLQUTDPE9Yo4JFWiAqfb5VavuK5wJTPy77/6XwSlTplj48U4Q3wiEx8ENHu05/kCDYfedRgdS7+I9pKKdtshgG/+uU6irJc0uI8pLoPUpK+RSPkxtd3WsqeOMKo83x/FGrSea40Sj6pMM4pPNOeqUc0ANI5Cuwg05b+PGn8349NMP/6uZtBFUtLFly/q/RJuTJ08+z73jHPfOKQ4G1EmAzdQJDC9gNwwADpx2YqvDldNmWiQ90mpScCzdJ1paYxdF1C5RqXSJ9nHNfCzP+vBIWU6U+I7YqTViROye5gGVDONaTDl1qsW+59ixY/6as/9BZwu7b2BMRXidA23BxI8wPdLmV4HPOi9pLQ0o5Vy3fjCqHg8oBnC6iC88USImq6OdD99jYhgJTUyljRs3Tr311vn/VoRHhDbQ1pYtW3xbw8JP0ue3JtKYTulCch+WOuKnkeq9HhfSl+mTlDawJmzEUmPe2BY5gU9hrN6OD5RrWkJ8HdFS1ynDJieGESUQ6uabix8TDPcDvfcsWbLERjpdB2yZYN5VgeTjOoeZibJxHQxCXf4qEYW5q0SkJ9uZPiNyoTTSAzx69plcLmwhGxeuaXDkWIkhvr3ooqY+wOXCE9YkPProoxeeDuKjoE20bRhs40bs/SDW4wKH/FxAdJ7yFGEGe11YgeD5Wv5+XhmRAW7uIEN0PU6gYSlJOFyhAPEShsIzTJBAEMMQ3wzErj+tAzFmgpkvDt7hQs22cIoNVV1ra04N8RMx2PIZ27Kd0RDf/h81VjiQlAkvyIUPFDFDVJ24AdIlFzc388Y7O+bOvXpNM1HNRgpPtt9xx12DiFE5bfRzvjzR4vDkVBh/3/5hD6Vqkv3IlxosI2pApCQyJZwvwgyxmsrJGzWJbv8fao/O70wTHwXvmjt37poNGzZ0sCmUhWe5GGa3isee80Vpkp2T0qgg+1L3P7qOOK3C4LmeRNYT8PxxIhK5UEqYtDGj46S3t7fzG9/425+eSeLLAk14+unn7po3b94Rl2xlpR/3hAZYyRdr2YKOVzXZsPSjFGaCxO9YoE6uGKRdu3q6ms2e49Fys5M6+/btW3HLLYsHhPeDYkf2LtZvq1z1Il1OEoE3GkVphAF+ulJN4GQiqsYElThRlStiREaySnv27Olsdhrx5MmTRzdvfmT1yZMnaNmypT8oYnrzmmuu4XRzb++d/Q8GbOJffawHJRZqrqc01AdIm29eqP+XVwBGmYoZs+eff76jiDncDRseWv3d75aHyuV/HVq3bv19zU70AybARm6emxwhIUQuy9pmOsPRiMyNBJECarA0MhDTS/AT4Q1YKQeQb7zxhmWMWE1jfxexkAOEfvjhzfetXHlvQPA1a3544e233/bDZjXh5Zd/t/yKK/zCCxlsJOcJBWFoimgENWiO6tWAzHyxW3xG2gxBapCdDB/azZal+/fv7yiC+A89tHG1Ir6Loq4+umXLz1c3qwlI7Nq7d68drMh8TzZDMel314M+sd4whH1vrZsc1dOhhyRcGuoLfHtOFXfxoEKylEFYENgQemjixIkpVwYT9b77vjdUFBOQXwr3WTDBLrqI5E2xFxiY3kjfmP/OvBtMeJXRy/fssRwuB+UF0Gx6kl/9qqejCOJv2rT5n5cvXxWkC37yySf2aBjhwTJMGMSzReSivvzy3i7Mb5AjJEbDFHp2vjA9OM/W/U7r0YQRuZRmtzAgFYbl1Y2ElY6ctIXFETNmTFvfLPEfeeTn31m9+ntHJcHdeZ6tTdetWzN18eJ//FERWdmLFy8+IsPRSD3ESc7UbKq8Inut1ntKkRbkOlZPfKkBOnsangIW1TGgvDKlWeL/4hc77122bNWg8zJsNcT352CG0wCepbJAm/+xjGtWE7DGYMeOR7o4KAfzioQEXq/GSQoiNuQDl9JhrPWepNY1mZaiRrsWRv7tMsLsYKuIZUEg3Natj9972213DhrC8sI7m/5hzj2M7rc/Z/jxjJlbqDz44I86Fixobm4htcul+pbPmTPHLpfiZKxYEi7/izqv6RUlI13n+L9kgoz/C+IXshSU53CXLFk6ROHIW3Z0qYI1dYyyR2gMz4CZKUkTBb35x82aoz/8oX/ZpZfO8ftBUOiSypSU4YsueuxS0eVYISiZwRSR3/Ny+EISLmPVqyfROQ2vw91XJPEHMTumkcTRXEeFhJOZZPeEMMSv4BqYwCYL98HIJ57ovadZczRjxsy1EDBxWbqeqd7CTHow6vmwbf1AqpbRqDlP/1Leawfnw+twL2ma+MjbQfYCfhsJTgWB/Tmum1oBkZHOIu5bKTOza35qke9/61tLBpvNO0r8BiP77Jo1UnEvOTWrUxMTlSkhS64bijArp6jLBnnZKi8R7e8vxuyAQIsWfXvQEM1CiVQVSWB33Uu8kUo7MnUpLfY+/y8fXRqKLUjIKoYJl6xjTeD9IfCHV/LrOXP1/9lrFsPQ1fRcU54P77nDoWbq7d1utxholvi8OIKvibTBROVvWvA4wYtEn8CT7C4NHgyImde0iDTItLrfUbBfBA2Pl/Q+Qfp/g2sWSP0QTzKU3WZN2r4hSgizUwTxOUvZJWjZ65gjZmK7yXPO4ZTEt4lVrvo28RzyT8E4PO+OKNY0QcvA8GLM0QE2RxZW/JEWgztge1PMosnC2ykG7ccyvlDY5du8eXNXEWYHhABB8BtEF4skfJUEx29MpCOPExXnsro0eMssZphjSBAqAMMLZoK9JDboCPZGJeHckOqMpQkSIf78iZa+vt92TZ/+5fXNEl+sRuQSMF0Q3hLSJU5R5PlE3JPuaqLasee8UgfatnbtT6Y2u1InDffAq8jtCZw2+LiEG6AlidozTh6Dc9eAXyOGa8ePH1vfzKZ9LPl33nmPlXyRIOuB4uVByMNxhI0OdniSn2FGJrZYoxYwQ2mSx7GY5VLpgcsv/9pSnKuwNcXglv1ASeQyWsCkDeNtYJj4w3O8r31/tNvSgPhYFbNixb0DILzIkg5Gj7w2CwlTyCNyqeKBF8QpLvw/eAaZ2GyGzP9VVJv2hBdf8w0sUWrGHA3vafHa9+GSwzPk/UhjgzI+T3R0mY9lsRcbhXuutcoEVeyV1uh+cUiU7enZ9hXz/1Nccu4UkaRrE2SRuEvDSbI2UZaGk2RtRdKsS5wd5yoSZ8d2d3ePE9fGqzqRk4KpmoQr38kJulOMJnyl0YRguW+cqK1ya+ZydifdIHXRLydK1a6JauY/4cVoiJFjrzQMzevVBF4KetNNC21qIKRRpIbze/SiOE7ksufG1FTa29tZvb2aIx0e58hoQDo5hdrEaYf2nNesqffao9GEhjYYUfvGyfYSsf2mfhcH7BJpguyJSDkMCm96x1uWYaIC86bXX7/ATOH97/KRmMAd7g03zA+eAxPYXAjCeIKwicECiUi6iE3+xWybu1YRCyhS3stHIW5DFEYjAibBJLEbCxgB60hMAM6vvPLKnQsWLMrgDlq5xSvaFLFrH92MnL0GvQu4VSWZ/2+Q5tx/m////PNP/0WeOcL1nTu3ftk8N5nNjTA7k6ial+9NjszP5/cI89dOobrr2i6qNU+ook28w65RUOsUAtgAc545Ak7AmeFzawgYrmDtAExRWX17huktmeCJn0b2DRX7eUokxzoALMF+85s90zQTJPGdbQ/sPYX2eaIj0Hhn05nBGYLLvojP5bUInNxPjDcdM/cr8r1WEDSMvb07vhTDac+eJ6cxnCA+M0DsHdpG4Z6reu9TGUPy3MhIP3ckzACFJL/YS5fUBByBAFU7PUYw09EK6eRqieY0LUZY3oS1FbC58zYBYxtlV+oEAiOYMMEJwSRSHTTg3L2790sSJyf53hlwNPCCgverFTSlSM18HYRtU2bHWSDIO8/GJItCz2PCrl090//4x/e2gPiC0N7UKImfqAg/XiNE4a60emfaVmYCnzMzlLC0C63yHhUNm6MJCh6pFfb8mWd2WZxY8mPCgvcxnMwANj/l7KdO/OA3YAAzQbqgrkrkJBOs68fuobSzktA4d78nCCZ4yReuJRO+naVfbGncSqF7J9XbC4tgjN9imXI0QbybTZOFF+cC/kkC9oy2KvsfCMoIrmi0D0goZxEeCQ0QSAX2lasA3gItkJsgbLDvaN3/tytENPFzP3lCymzyuIVCrY1pb2yMIWGXWjpBMc33UxFTKYUlRvhsHyCOsX5Abqod8zYyA6CIXdda4pFQndgYqc4x4pfVZ1UiKi41oo3tMrfvCOY1mLJmZaTKQmNhR3vC5OnNx/03ZnK8oYAJsU9XSTc0ptbtwm6Pp4h6a+Ap23llVBjEUx/8KdVTy+IDQ+6a1ATfOQsmyJF0XcSnqgaNJeWNCTq1RKIKksaUa4LUP3lPSPUBXpKEK8aEHacJLgDP+M5C4jNunPSjKevOaY+ilAN/G2X7hcyYIQZ/ZM1wxkXWsAvHJWqCKOaG8lGrtHZFKZSkmF2VHZ2WlrFC8jKuJYVeTi2pD5CQzJDEjwkR1e6g8/AYKzQ2o7WKAa3yS1Pl8Lubcl4gOw6Q5ifGBFIeBqkOU3XOrOaW6GwrI8Rvo5yPNkg3Lk3DL7GWs5/LpdhYpgYD2iguSLYyLhFT6e9JwgvfP+izYi5orBOmCHdiSHDjbbJPEFLg3UccBcHbcwZV3jSI73llbLogNgliBzBTdRwT/Vwhqa+BUNyx8IwAPhJ+iZ8aY7Sp9loU3PLrsQlFBmGUZr9cl6f6MeBjCERDBsw08SmUjJeTZ+8jEh+YID3Ej5ihEfGQnlID1faNyl2Odr6UY/9lbFrb1KgtJWfnZAhAaUSmr4iNZgXQJart4+s51VjRyGW+exyb46BwkBnrqMdEfsfMZjT2Q5E+i2qZH6phhsQgR6tyq+yk5cd4JJOo2kFJSckbrse+sBoFXpbI/0Q1WuIiP2eocGlTcbBWyoZDWritGt+UrK0BFGdE8J3dsvv+YixepKVJxI4CQCXARPEBVbnGt+ip/pJEGFEaSbMjzobvn1SYQw+yMsRX75KWJb+k6qOeOcTJeBeRGhBdu2V5Ek9ZDRxRYmrgErTDjC3X+AYwhR12HpFzTY3GK83uuVQX4BQhQqmO2hIDghEqZz+HW5MBERgaLYk6zzVLMXgVrBkG1DE6jwpSTAv+BG+80PNop0l8AAAAAElFTkSuQmCC";

const TraitCard = _ref => {
  let {
    trait,
    onClick,
    image,
    traitImg
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "close-button",
    src: img$4,
    alt: "",
    onClick: e => onClick(e)
  }), /*#__PURE__*/React.createElement("div", {
    className: "trait-card-root",
    style: {
      backgroundImage: `url(${image})`
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

var css_248z$7 = ".card-image-container{\r\n  position: relative;\r\n  /* min-height: 500px; */\r\n  margin: auto;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.pyramid_anim_container {\r\n  z-index: 2;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n.resizer-container{\r\n  padding: 10px;\r\n}\r\n\r\n.scope span {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transform-origin: center;\r\n  transform-style: preserve-3d;\r\n}\r\n.scope span:first-child {\r\n  transform: rotateY(calc(0deg)) translateZ(1px) rotateX(0deg);\r\n}\r\n.scope span:nth-child(2) {\r\n  transform: rotateY(calc(0deg)) translateZ(0px) rotateX(0deg);\r\n}\r\n\r\n.scope {\r\n  position: relative;\r\n  transform-style: preserve-3d;\r\n  animation: slid 5s linear infinite;\r\n  border-radius: 12px;\r\n  transition: 1.5s all;\r\n  padding: 10px;\r\n  /* box-shadow: 0px 55px 88px 0px rgba(0,0,0,0.42); */\r\n}\r\n.scope span {\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n}\r\n.front.active::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 100%;\r\n  display: block;\r\n  background: linear-gradient(112deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\r\n  background-position-x: 0;\r\n  background-repeat: no-repeat;\r\n  transition: all .35s ease-in-out;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n  animation: shiningEffect1 2s ease-in-out normal ;\r\n}\r\n.back.active::after{\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  right: 100%;\r\n  display: block;\r\n  background: linear-gradient(250deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\r\n  background-position-x: 0;\r\n  background-repeat: no-repeat;\r\n  transition: all .35s ease-in-out;\r\n  pointer-events: none;\r\n  z-index: 2;\r\n  animation: shiningEffect2 2s ease-in-out normal ;\r\n}\r\n\r\n.badge-img{\r\n  position: absolute;\r\n  width: 75px;\r\n  height: 75px;\r\n  bottom: 15px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  left: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n}\r\n.flip-icon {\r\n  /* position: absolute; */\r\n  width: 40px;\r\n  height: 40px;\r\n  /* margin-top: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;*/\r\n  cursor: pointer; \r\n}\r\n.fullscreen-icon{\r\n  /* position: absolute; */\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  /* margin-top: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0; */\r\n  cursor: pointer;\r\n}\r\n.back_card{\r\n  animation: hideBack 2s ease-in-out normal;\r\n  transition: all 1s;\r\n  visibility: hidden;\r\n  border-radius: 12px;\r\n}\r\n.back_card.active{\r\n  visibility: visible;\r\n}\r\n.card-back-root {\r\n  height: 100%;\r\n  transform: rotateY(180deg);\r\n  border-radius: 12px;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  -webkit-box-pack: end;\r\n  justify-content: flex-end;\r\n  position: relative;\r\n}\r\n.card-icons-holder{\r\n  position: absolute;\r\n  inset: 0px;\r\n  margin: auto;\r\n  width: 100%;\r\n  max-height: 40px;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n}\r\n.trait-container {\r\n  position: absolute;\r\n  display: flex;\r\n  -webkit-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n.trait-holder{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 8px;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n.trait-holder:hover {\r\n  background-color: #fc6405;\r\n}\r\n.trait-holder img{\r\n  width: 30px;\r\n  height: 25px;\r\n}\r\n.trait-card-root{\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  transform: rotateY(180deg);\r\n  -webkit-background-position: center;\r\n  background-position: center;\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.close-button {\r\n  width: 20.5px;\r\n  height: 20.5px;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 30px;\r\n  z-index: 5;\r\n  transform: rotateX(0deg);\r\n}\r\n.trait-card-content {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  background-color: #fc6405b3;\r\n}\r\n.trait-card-content-holder{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 30px;\r\n \r\n}\r\n\r\n.trait-card-trait-icon-holder {\r\n  width: 55px;\r\n  height: 55px;\r\n  margin-bottom: 20px;\r\n  margin-top: 10px;\r\n}\r\n.trait-card-trait-icon-holder img{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.trait-card-title-holder{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.trait-card-title {\r\n  margin: 0px;\r\n  font-weight: 400;\r\n  color: rgb(250, 250, 242);\r\n  font-size: 36px;\r\n  font-family: Poppins-semibold;\r\n  line-height: 42px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  max-width: 250px;\r\n  min-width: 250px;\r\n}\r\n.trait-card-description-holder{\r\n  margin-top: 25px;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  overflow-y: auto;\r\n}\r\n .trait-card-description-holder::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n.trait-card-description-holder::-webkit-scrollbar-track {\r\n  background: #ffffff49;\r\n} \r\n.trait-card-description-holder::-webkit-scrollbar-thumb  {\r\n  background: #ffffff;\r\n} \r\n.trait-card-description{\r\n  margin: 0px;\r\n  font-weight: 400;\r\n  color: rgb(250, 250, 242);\r\n  font-family: poppins;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  text-align: center;\r\n  max-width: 90%;\r\n  min-width: 200px;\r\n}\r\n\r\n@keyframes shiningEffect1 {\r\n  0%{\r\n\r\n    left: -100%;\r\n  }\r\n 100%{\r\n\r\n  left: 100%;\r\n }\r\n}\r\n@keyframes shiningEffect2 {\r\n  0%{\r\n\r\n    right: -100%;\r\n  }\r\n 100%{\r\n  right: 100%;\r\n }\r\n}\r\n\r\n@keyframes hideBack {\r\n from{\r\n  visibility: visible;\r\n  }\r\n to{\r\n    visibility: hidden;\r\n  }\r\n}\r\n.flipped-img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n  object-fit: cover;\r\n  transition: 2s;\r\n}\r\n.buttonHolder{\r\n  position: fixed;\r\n  height: 16px;\r\n  width: 16px;\r\n  top: 4%;\r\n  left: 4%;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  line-height: 1rem;\r\n  color: #fff;\r\n  transition: color .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  /* .card-image-container {\r\n      min-height: 300px;\r\n  } */\r\n  .scope {\r\n    position: relative;\r\n    height: 440px;\r\n    transform-style: preserve-3d;\r\n    animation: slid 5s linear infinite;\r\n    transition: 2s all;\r\n  }\r\n  .arrow{\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (max-width: 350px) {\r\n  .badge-img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  .scope {\r\n    position: relative;\r\n    /* width: 250px !important;\r\n    height: 340px; */\r\n    transform-style: preserve-3d;\r\n    animation: slid 5s linear infinite;\r\n    transition-property: position;\r\n    transition: 2s;\r\n  }\r\n}\r\n\r\n.c-medium .trait-holder{\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.c-medium .trait-card-trait-icon-holder{\r\n  margin-bottom: 10px;\r\n}\r\n.c-medium .trait-card-title{\r\n  font-size: 32px;\r\n}\r\n.c-medium .trait-card-description{\r\n  line-height: 23px;\r\n}\r\n.c-small .trait-holder{\r\n  width: 30px;\r\n  height: 30px;\r\n}";
styleInject(css_248z$7);

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

const GalaxisCard = _ref => {
  let {
    metadata,
    traitTypes,
    horizontalPadding = 20,
    imageContainerWidth = null
  } = _ref;
  const [traitsVisible, setTraitsVisible] = useState(false);
  const [selectedTrait, setSelectedTrait] = useState({});
  const [showBackCard, setshowBackCard] = useState(false);
  const [showFlipIcon, setshowFlipIcon] = useState(false);
  const [traitType, setTraitType] = useState(traitTypes ? traitTypes[0] : null); // const [randomImages, setrandomImages] = useState([ARTARRAY[0]]);

  useState(false);
  useState(null);
  const [mobileView, setmobileView] = useState(false);
  const [loading, setLoading] = useState(true);
  const imageRef = useRef();
  const [defaultScopeWidth, setDefaultScopeWidth] = useState(imageContainerWidth ? imageContainerWidth - horizontalPadding : 400);
  const GALAXIS_BASE_URL = 'https://galaxis-web-backend-staging.herokuapp.com';
  const containerRef = useRef();
  const {
    width,
    height
  } = useContainerDimensions(containerRef);
  const [imageRatio, setImageRatio] = useState(0);
  const [resizerComponentSize, setResizerComponentSize] = useState({
    width: 0,
    height: 0
  });
  const [containerSize, setContainerSize] = useState('medium');
  useEffect(() => {
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

  const showTraits = e => {
    e.stopPropagation();
    setTraitsVisible(true);
    document.getElementById('scope').style.transform = 'perspective(1000px) rotateY(180deg)';
  };

  const hideTraits = e => {
    e.stopPropagation();
    setTraitsVisible(false);
    setshowBackCard(false);
    document.getElementById('scope').style.transform = 'perspective(1000px) rotateY(0deg)';
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  const setTheImageRatio = (width, height) => {
    setImageRatio(height / width);
  };

  useEffect(() => {
    if (imageRatio != 0) {
      setResizerComponentSize({
        width: width < height / imageRatio ? 100 + '%' : height / imageRatio,
        height: width < height / imageRatio ? width * imageRatio : "100%"
      });
    } // setResizerComponentSize({width:width<height/1.365?100+'%':height/1.365, height: width<height/1.365? width*1.365 : "100%"})

  }, [imageRatio, width, height]);
  useEffect(() => {
    if (width) {
      let cSize = '';

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
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement(SpinnerCircular, {
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
  }), metadata && /*#__PURE__*/React.createElement("div", {
    className: `card-image-container ${containerSize}`,
    ref: containerRef,
    style: {
      opacity: loading ? '0' : '1'
    },
    onClick: e => stopPropagation(e)
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
    className: `scope ${traitsVisible ? 'active' : ''}  `,
    style: {
      width: "100%",
      height: "100%"
    },
    id: "scope",
    onTransitionEnd: () => console.log('hello'),
    onMouseOver: () => {
      setshowFlipIcon(true);
    },
    onMouseLeave: () => {
      setshowFlipIcon(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `front ${!traitsVisible ? 'active' : ''} `,
    id: "front-span"
  }, /*#__PURE__*/React.createElement("img", {
    className: "flipped-img",
    src: metadata.sides && metadata.sides.length > 1 ? metadata.sides[0].image : metadata.image,
    alt: "not found",
    ref: imageRef,
    onLoad: () => {
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-icons-holder"
  }, metadata.sides && metadata.sides.length > 1 && /*#__PURE__*/React.createElement("img", {
    src: img$5,
    className: "flip-icon",
    alt: "not found",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: e => {
      showTraits(e);
      setshowBackCard(true);
    }
  })), metadata.traits && traitTypes && /*#__PURE__*/React.createElement("div", {
    className: `trait-container ${traitsVisible ? 'hide' : ''}`
  }, metadata.traits.map((elem, metadataIndex) => {
    return traitTypes.map((traitElem, index) => {
      if (parseInt(elem.type) === traitElem.id) return /*#__PURE__*/React.createElement("div", {
        className: "trait-holder",
        key: index,
        onClick: e => {
          setSelectedTrait(metadata.traits[metadataIndex]);
          setTraitType(traitTypes[index]);
          showTraits(e);
        }
      }, ' ', /*#__PURE__*/React.createElement("img", {
        src: GALAXIS_BASE_URL + traitElem.icon_white,
        alt: "undefined"
      }), ' ');
    });
  }))), metadata.traits && traitTypes && /*#__PURE__*/React.createElement("span", {
    className: `back ${traitsVisible ? 'active' : ''} `,
    id: "trait-span"
  }, /*#__PURE__*/React.createElement(TraitCard, {
    trait: selectedTrait,
    onClick: hideTraits,
    image: metadata.sides && metadata.sides.length > 1 ? metadata.sides[0].image : metadata.image,
    traitImg: GALAXIS_BASE_URL + traitType.icon_white
  })), metadata.sides && metadata.sides.length > 1 && /*#__PURE__*/React.createElement("span", {
    className: `back_card ${showBackCard ? 'active' : ''} `,
    id: "back-span"
  }, /*#__PURE__*/React.createElement(CardBack, {
    onClick: hideTraits,
    backImage: metadata.sides[1].image
  })))))));
};

var css_248z$6 = ".dust-pool-card {\r\n  width: 100%;\r\n  max-width: 540px;\r\n  display: flex;\r\n  -webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \r\n  box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n  margin: 0 auto;\r\n}\r\n.dust-pool-card-img {\r\n  height: 265px;\r\n  background-size: cover;\r\n}\r\n.text-box {\r\n  /* width: 50%; */\r\n  padding: 15px;\r\n}\r\n.dust-pool-title {\r\n  font-family: poppins-semibold;\r\n  font-weight: 600;\r\n  font-size: 22px;\r\n  color: rgb(0, 0, 0);\r\n  margin-bottom: 10px;\r\n  line-height: 21px;\r\n}\r\n.dust-pool-card-label {\r\n  text-transform: uppercase;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n}\r\n.dust-pool-btn {\r\n  border: 2px solid rgb(255, 105, 43);\r\n  font-family: 'poppins-semibold';\r\n  color: rgb(255, 105, 43);\r\n  background-color: transparent;\r\n  font-size: 14px;\r\n  border-radius: 5px;\r\n  padding: 10px 20px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n}\r\n.dust-pool-btn:hover {\r\n  background-color: rgb(255, 105, 43);\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.dust-pool-btn:focus {\r\n  outline: none;\r\n}\r\n\r\n.dust-pool-btn.disabled{\r\n  opacity:0.5;\r\n}\r\n\r\n.dust-pool-btn:hover.disabled{\r\n  background-color: transparent;\r\n  color: rgb(255, 105, 43);\r\n  cursor:not-allowed;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .dust-pool-card {\r\n    flex-direction: column;\r\n  }\r\n  .dust-pool-card img{\r\n    height: auto;\r\n    max-width: 100%;\r\n  }\r\n}\r\n";
styleInject(css_248z$6);

var css_248z$5 = ".counter-body{\r\n    font-size: 1em;\r\n    line-height: 1em;\r\n    vertical-align: center;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.counter-body .counter-item{\r\n    display: inline-block;\r\n    width: 12px;\r\n    height: 1.6em;\r\n    margin: 0 2px 0 0;\r\n    background-color: #ff6b2b3d;\r\n    border-radius: 3px;\r\n}\r\n\r\n.counter-item.active{\r\n    background-color: #FF692B;\r\n}";
styleInject(css_248z$5);

const CounterBar = props => {
  const ITEM_COUNT = 10;
  const [items, setItems] = useState([]);
  const [currentValue, setCurrentValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    let a = [];

    for (let i = 0; i < ITEM_COUNT; i++) {
      a.push(i);
    }

    setItems(a);
  }, []);
  useEffect(() => {
    if (props.value && props.value !== currentValue) {
      setCurrentValue(props.value);
    }

    if (props.maxValue && props.maxValue !== maxValue) {
      setMaxValue(props.maxValue);
    }
  }, [props]);
  useEffect(() => {
    if (maxValue && maxValue > 0) {
      let p = Math.floor(currentValue / maxValue * ITEM_COUNT);

      if (p === 0 && currentValue > 0) {
        p = 1;
      }

      setProgress(p); //console.log(currentValue,p);
    }
  }, [currentValue, maxValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, items.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "counter-body"
  }, items.map((e, i) => {
    return /*#__PURE__*/React.createElement("span", {
      className: `counter-item ${i < progress ? 'active' : ''}`,
      key: 'c' + i
    });
  })));
};

const DustPoolCard = _ref => {
  let {
    card,
    handleClick
  } = _ref;
  useEffect(() => {
    console.log('card', card);
  }, []);

  const onClickHandler = () => {
    console.log('card id on click', card.id);
    handleClick(card.id);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dust-pool-card"
  }, /*#__PURE__*/React.createElement("img", {
    className: "dust-pool-card-img",
    src: card.imgSrc
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-title"
  }, card.name), /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-card-label",
    style: {
      marginBlockEnd: 0
    }
  }, "COUNTER"), /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("b", null, card.vaultData.available, " out of ", card.totalSupply, " left")), /*#__PURE__*/React.createElement(CounterBar, {
    value: card.vaultData.available,
    maxValue: card.totalSupply
  }), /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-card-label",
    style: {
      marginBlockEnd: 0
    }
  }, "Price"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, card.vaultData.vaultPrice > 0 ? Number(ethers.utils.formatEther(card.vaultData.vaultPrice)).toLocaleString() + ' D' : 'TBA')), /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      bottom: "15px"
    },
    className: `dust-pool-btn ${card.vaultData.available === null || Number(card.vaultData.available) === 0 ? 'disabled' : ''}`,
    disabled: card.vaultData.available === null || Number(card.vaultData.available) === 0,
    onClick: onClickHandler
  }, "Details"))));
};

var img$3 = "data:image/jpeg;base64,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";

var css_248z$4 = "body{\r\n    background-color: rgb(250, 249, 245);\r\n}\r\n\r\n.dust-pool-root{\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n}\r\n.dust-pool-textbox{\r\n text-align: center;\r\n max-width: 600px;\r\n margin: 0 auto;\r\n}\r\n.pool-subtitle{\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n}\r\n.tab-choose{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 30px;\r\n    text-transform: uppercase;\r\n}\r\n.tab-choose div{\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding: 12px 15px\r\n}\r\n.tab-choose div:hover{\r\n    cursor: pointer;\r\n}\r\n.tab-choose .active-tab{\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.tab-choose div:first-child{\r\n    border: 2px solid #000;\r\n    border-top-left-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n.tab-choose div:nth-child(2){\r\n    border-top: 2px solid #000;\r\n    border-bottom: 2px solid #000;\r\n}\r\n.tab-choose div:nth-child(3){\r\n    border: 2px solid #000;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n\r\n/*classes from bootstrap*/\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n.container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.mt-5, .my-5 {\r\n    margin-top: 3rem!important;\r\n}\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n.col-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n}\r\n.col-12, .col-lg-6, .col-lg-3, .col-md-6{\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 1px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.col-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n}\r\n.mb-1{\r\n    margin-bottom: 0.25rem!important;\r\n}\r\n.mb-2{\r\n    margin-bottom: 0.5rem!important;\r\n}\r\n.mb-3{\r\n    margin-bottom: 0.75rem!important;\r\n}\r\n.mt-2{\r\n    margin-top: 0.5rem!important;\r\n}\r\n.pb-4{\r\n    padding-bottom: 1.5rem!important;\r\n}\r\n\r\n.w-100 {\r\n    width: 100%!important;\r\n}\r\n.text-right{\r\n    text-align: right!important;\r\n}\r\n.dust-pool-card p {\r\n    margin-block-start: 0;\r\n}\r\n\r\n@media (min-width: 576px){\r\n.container {\r\n    max-width: 540px;\r\n}\r\n}\r\n@media (max-width: 600px){\r\n    .dust-pool-card .dust-pool-btn{\r\n        position: unset!important;\r\n    }\r\n    }\r\n@media (min-width: 768px){\r\n    .container {\r\n        max-width: 720px;\r\n    }}\r\n    .col-md-6{\r\n        flex: 0 0 50%;\r\n        max-width: 50%; \r\n    }\r\n@media (min-width: 992px){\r\n    .container {\r\n        max-width: 960px;\r\n    }\r\n    .col-lg-6 {\r\n        flex: 0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n    .col-lg-3 {\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px){\r\n    .container {\r\n        max-width: 1140px;\r\n    }\r\n}\r\n@media only screen and (max-width: 945px) {\r\n    .dust-pool-root {\r\n      max-width: 100%;\r\n    }\r\n  }";
styleInject(css_248z$4);

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='25.53' height='48.317' viewBox='0 0 25.53 48.317'%3e %3cg id='kozepso_white' data-name='kozepso white' transform='translate(-132.737 -28.1)'%3e %3crect id='Rectangle_356' data-name='Rectangle 356' width='2.722' height='48.317' transform='translate(132.744 28.1)' fill='%23ff692b'/%3e %3crect id='Rectangle_357' data-name='Rectangle 357' width='2.711' height='25.53' transform='translate(132.738 53.615) rotate(-90)' fill='%23ff692b'/%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='25.53' height='48.316' viewBox='0 0 25.53 48.316'%3e %3cg id='kozepso_white' data-name='kozepso white' transform='translate(0 0)'%3e %3crect id='Rectangle_356' data-name='Rectangle 356' width='2.722' height='48.316' transform='translate(22.801 0)' fill='%23ff692b'/%3e %3crect id='Rectangle_357' data-name='Rectangle 357' width='2.711' height='25.53' transform='translate(0 25.515) rotate(-90)' fill='%23ff692b'/%3e %3c/g%3e%3c/svg%3e";

var css_248z$3 = ".upcoming-dust-pool-card {\r\n    height: 86px;\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n    -webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \r\n  box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    margin-bottom: 50px;\r\n}\r\n.upcoming-dust-pool-card img{\r\n    max-height: 100%;\r\n}\r\n.upcoming-dust-pool-card-title{\r\n     line-height: 16px;\r\n     height: 32px;\r\n     margin-bottom: 10px;\r\n    }\r\n.upcoming-dust-pool-card-text{\r\n    padding: 10px;\r\n}";
styleInject(css_248z$3);

const UpcomingCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "upcoming-dust-pool-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.imgSrc
  }), /*#__PURE__*/React.createElement("div", {
    className: "upcoming-dust-pool-card-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming-dust-pool-card-title"
  }, /*#__PURE__*/React.createElement("b", null, props.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "poppins"
    }
  }, props.price, " D")));
};

var css_248z$2 = "\r\n.pool-ps-root{\r\n    max-width: 848px;\r\n    width: 100%;\r\n    margin: auto auto 60px;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 10px;\r\n}\r\n.pool-ps-card-and-descipton{\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n.pool-ps-card-and-descipton-inner{\r\n    flex-basis: 50%;\r\n    -webkit-box-flex: 0;\r\n    flex-grow: 0;\r\n    max-width: 50%;\r\n}\r\n.pool-ps-card-and-descipton-inner p{\r\n    margin-top: 0;\r\n}\r\n.ps-left{\r\n    background-color: rgb(255, 255, 255);\r\n    padding: 50px;\r\n    border: 1px solid #000;\r\n    border-radius: 15px;\r\n}\r\n.ps-left img{\r\n    border-radius: 15px;\r\n}\r\n.ps-right{\r\n    position: relative;\r\n}\r\n.ps-text-bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n.snp-root{\r\n    margin: 15px auto 30px;\r\n    max-width: 848px;\r\n    width: 100%;\r\n    max-height: 86px;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    justify-content: space-between;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n.previous-box{\r\n    display: flex;\r\n    width: 48%;\r\n    gap: 16px;\r\n    -webkit-box-pack: start;\r\n    justify-content: flex-start;\r\n    cursor: pointer;\r\n}\r\n.snp-divider{\r\n    width: 4%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n}\r\n.next-box{\r\n    display: flex;\r\n    width: 48%;\r\n    gap: 16px;\r\n    -webkit-box-pack: end;\r\n    justify-content: flex-end;\r\n    cursor: pointer;\r\n}\r\n.snp-text{\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    text-transform: uppercase;\r\n}\r\n.snp-text span{\r\n    margin: 0px;\r\n    font-family: poppins;\r\n    font-size: 14px;\r\n    color: rgb(112, 112, 112);\r\n    cursor: pointer;\r\n}\r\n.snp-text-p-n{\r\n    margin: 0px;\r\n    font-weight: 400;\r\n    font-family: poppins-semibold;\r\n    line-height: 20px;\r\n    font-size: 18px;\r\n    max-height: 45px;\r\n    width: 100%;\r\n    max-width: 180px;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 2;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-transform: capitalize;\r\n}\r\n.pool-ps-btn{\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    font-weight: 700;\r\n}\r\n.pool-ps-btn p{\r\n    margin-block-start: 0;\r\n    margin-block-end: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    font-size: 18px;\r\n}\r\n.pool-ps-btn span{\r\n    font-size: 42px;\r\n    line-height: 16px;\r\n    padding-right: 2px;\r\n}\r\n.pool-ps-btn:hover{\r\n    cursor: pointer;\r\n}\r\n.pool-ps-btn:focus{\r\n    outline: none;\r\n}\r\n.pool-ps-card-and-descipton-inner .dust-pool-title{\r\n    margin-bottom: 0;\r\n    line-height: 40px;\r\n    font-size: 32px;\r\n}\r\n.dpc-box{\r\n    background-color: #fff;\r\n    padding: 15px 20px;\r\n    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1); \r\n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);\r\n    width: fit-content;\r\n    border-radius: 5px;\r\n    margin-top: 12px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.approval-mask{\r\n    box-sizing: border-box;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0,0,0,0.75);\r\n\tz-index: 1100;\r\n\tdisplay: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media only screen and (max-width: 825px) {\r\n    .pool-ps-card-and-descipton-inner{\r\n        flex-basis: 60%;\r\n        max-width: 60%;\r\n    }\r\n    .pool-ps-card-and-descipton{\r\n        justify-content: center;\r\n    }\r\n    .ps-text-bottom{\r\n        margin-top: 20px;\r\n        position: relative;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .pool-ps-card-and-descipton-inner{\r\n        flex-basis: 100%;\r\n        max-width: 100%;\r\n    }\r\n    .pool-ps-card-and-descipton{\r\n        justify-content: center;\r\n    }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n    .previous-box img, .next-box img{\r\n        display: none;\r\n    }\r\n}";
styleInject(css_248z$2);

const blockedCountries = {
  "AL": "Albania",
  "BB": "Barbados",
  "BW": "Botswana",
  "BF": "Burkina Faso",
  "CN": "China",
  "KH": "Cambodia",
  "KY": "Cayman Islands",
  "GH": "Ghana",
  "HT": "Haiti",
  "IR": "Iran",
  "JM": "Jamaica",
  "LY": "Libya",
  "MU": "Mauritius",
  "MT": "Malta",
  "MA": "Morocco",
  "MM": "Myanmar",
  "NI": "Nicaragua",
  "KP": "North Korea",
  "PK": "Pakistan",
  "PA": "Panama",
  "PH": "Philippines",
  "SN": "Senegal",
  "SS": "South Sudan",
  "SD": "Sudan",
  "SY": "Syria",
  "UG": "Uganda",
  "YE": "Yemen",
  "ZW": "Zimbabwe"
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABICAYAAADcdSQuAAAABHNCSVQICAgIfAhkiAAAACJJREFUKFNjZGBgsAPi/4xQBgOIAQZUYIyajByYo6GBOzQAZxUMIQH+P1cAAAAASUVORK5CYII=";

var css_248z$1 = ".terms-root{\r\n\tbox-sizing: border-box;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(255,255,255,0.3);\r\n\tz-index: 1100;\r\n\tdisplay: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.terms-box {\r\n\twidth:40%;\r\n\theight: 60%;\r\n\tmin-width: 400px;\r\n\tmin-height: 500px;\r\n\tbackground:white;\r\n\tborder-radius: 15px;\r\n\tpadding: 15px;\r\n\t-webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \r\n  \tbox-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\r\n}\r\n\r\n.scrollable-content{\r\n\twidth:100%;\r\n\theight: 100%;\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.scrollable-content h2{\r\n\ttext-align: center;\r\n\tpadding-bottom: 15px;\r\n\tposition: sticky;\r\n\ttop:0;\r\n\tbackground:white;\r\n\tbackground: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\r\n\tbackground: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\r\n\tbackground: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffffff\",endColorstr=\"#ffffff\",GradientType=1);\r\n}\r\n\r\n.tc-button-container{\r\n\ttext-align: center;\r\n}\r\n.tc-button-container button{\r\n\tmargin: 10px 5px;\r\n}";
styleInject(css_248z$1);

const terms = `<p><strong>NFT EXCHANGE TERMS AND CONDITIONS (THESE “TERMS”)</strong></p>
<p><em>Unless otherwise stated or if the context otherwise requires, all capitalised terms herein shall have the respective meanings as indicated in Annex 1 of these Terms. Headings in these Terms are included for convenience only and shall not be taken into account in construing these Terms. References to a “<strong>Paragraph</strong>” and “<strong>Annex</strong>” are to be construed as references to the paragraphs of and the annexes to these Terms.</em></p>
<ol type="1">
<li><p><strong><u>GENERAL</u></strong></p>
<ol type="1">
<li><p>These Terms govern the NFT Exchange between the NFT Vendor and you, for your intended exchange of Tokens, during the NFT Exchange Period made available on or via the <strong>[<a href="https://dust-pools.ether.cards"]>https://dust-pools.ether.cards</a></strong> (the “<strong>Website</strong>”).</p></li>
<li><p>In these Terms, “<strong>we</strong>”, “<strong>us</strong>” or “<strong>NFT Vendor</strong>” refers to a company incorporated in the British Virgin Islands named Equinoctial Inc (BVI Company Number: 2077416) and “<strong>our</strong>” shall be construed accordingly. “<strong>You</strong>” refers to any person participating in an NFT Exchange, and “your” shall be construed accordingly.</p></li>
</ol></li>
</ol>
<blockquote>
<p>Each of you and the NFT Vendor shall hereinafter be referred to as a “<strong>Party</strong>”, and collectively, you and the NFT Vendor shall hereinafter be referred to as the “<strong>Parties</strong>”.</p>
</blockquote>
<ol start="3" type="1">
<li><p>By accessing and/or using the Website or participating in NFT Exchange, you accept these Terms including the privacy of the NFT Vendor (available at <a href="https://ether.cards/privacy-policy">https://ether.cards/privacy-policy</a>) as adopted and updated from time to time, and agree to be bound by them. If you do not accept these Terms, please exit the Website immediately and cease all interaction with the Website and any Atomic NFT Swap Contract you may be interacting with.</p></li>
<li><p>These Terms will also apply to any updates or upgrades provided by us that replace and/or supplement the Website and/or the Atomic NFT Swap Contract, unless such updates or upgrades are accompanied by separate terms in which case those separate terms shall apply.</p></li>
<li><p>We may amend these Terms from time to time. Amendments shall take effect from the date the amended terms are published at the Website. If you use or access the Website or interact with any Atomic NFT Swap Contract after such amendments, you are deemed to have agreed to the amended terms and to be bound by them. It is your responsibility to check for the latest version of the terms prior to use of the Website and any interaction with the Atomic NFT Swap Contract.</p></li>
<li><p>We have no obligation to provide, or continue to provide NFT Exchange or any service related to NFT Exchange, now or in the future. We reserve the right, at any time, temporarily or permanently, in whole or in part, without prior notification and without incurring any liability to you, to: modify, suspend or discontinue the NFT Exchange and all related services; restrict or modify access to the Website and/or the Atomic NFT Swap Contract; and modify and/or waive any charges in connection with the NFT Exchange. You are deemed to agree to such modifications if you continue the use the Website or participate in the NFT Exchange.</p></li>
<li><p><strong>Please read these Terms carefully. The Designated NFTs acquired by the Project Group which are made available for NFT Exchange hereunder are created and issued by third parties. As such, the Designated NFTs are made available on an “as is” and “as available” basis with no representations or warranties whatsoever. To the maximum extent permitted by law, we disclaim all express representations and warranties and implied representations and warranties, including implied representations or warranties of accuracy, merchantability, fitness for a particular purpose and non-infringement in relation to the Designated NFTs. We are not responsible or liable for any error, delay or interruption in or lack of access to the Designated NFTs or for any loss of digital assets (including but not limited to Tokens and Designated NFTs) in connection with any NFT Exchange.</strong></p></li>
<li><p><strong>THE NFT EXCHANGE WILL BE CONDUCTED VIA THE WEBSITE USING THE ATOMIC NFT SWAP CONTRACT (IF APPLICABLE) WHICH IS DEVELOPED AND PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS BY THE NFT VENDOR, AND THE NFT VENDOR AND ITS AFFILIATES (SAVE TO THE EXTENT PROHIBITED BY APPLICABLE LAWS) EXPRESSLY DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND IN RESPECT THEREOF.</strong></p></li>
<li><p><strong>The Designated NFTs are not intended to constitute securities of any form, units in a business trust, units in a collective investment scheme, capital markets products, or any other form of regulated investment or investment product in any jurisdiction. These Terms do not constitute a prospectus or an offer document of any sort and are not intended to constitute an offer of securities of any form, units in a business trust, units in a collective investment scheme, capital markets products, or any other form of regulated investment or investment product, or a solicitation for any form of regulated investment or investment product in any jurisdiction. No regulatory authority has examined or approved of these Terms. No such action has been or will be taken by the NFT Vendor to obtain such approval under the laws, regulatory requirements or rules of any jurisdiction. The provision of these Terms to you does not imply that the applicable laws, regulatory requirements or rules have been complied with.</strong></p></li>
</ol>
<blockquote>
<p><strong>The Designated NFTs are not intended to be available for exchange by Disqualified Persons. If you are a Disqualified Person, you are not eligible to participate in any NFT Exchange.</strong></p>
</blockquote>
<ol start="10" type="1">
<li><p><strong>IF YOU ARE IN ANY DOUBT AS TO THE ACTION YOU SHOULD TAKE, YOU SHOULD CONSULT YOUR LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S). IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT ACCEPT THESE TERMS, OR PARTICIPATE IN ANY NFT EXCHANGE, OR ACQUIRE ANY TOKENS TO PARTICIPATE IN A NFT EXCHANGE.</strong></p></li>
</ol>
<ol start="2" type="1">
<li><p><strong><u>ELIGIBILITY TO MAKE A NFT EXCHANGE</u></strong></p></li>
</ol>
<blockquote>

</blockquote>
<ol type="1">
<li><p>You are viewing these Terms because you are interested in making a NFT Exchange.</p></li>
<li><p><strong>You shall not participate in the NFT Exchange if there are applicable legal restrictions in your country of residence or domicile. It is your sole responsibility to ensure that your participation in the NFT Exchange is not prohibited, restricted, curtailed, hindered, impaired, unauthorized or otherwise adversely affected in any way or in any form or manner, whether in full or in part under any applicable law, regulation or rule in your country of residence or domicile or in any jurisdiction applicable to you.</strong></p></li>
<li><p>You are not eligible to participate in, and you are not to make any NFT Exchange if:</p>
<ol type="a">
<li><p>where you are an individual, you are a citizen of, domiciled in, resident of, or physically present / located in an Excluded Jurisdiction; or</p></li>
<li><p>where you are a body corporate, you are a body corporate: (i) which is incorporated in, or operates out of, an Excluded Jurisdiction, or (ii) which is wholly or partially owned by or under the control of (aa) one or more individuals who is/are citizen(s) of, domiciled in, residents of, or physically present / located in, an Excluded Jurisdiction; (bb) one or more entities which is incorporated in, or operates out of, an Excluded Jurisdiction; and/or (cc) a Designated Person / Entity; or</p></li>
<li><p>you are an individual or body corporate : (i) included in the consolidated list published by the United Nations Security Council of individuals or entities subject to measures imposed by the United Nations Security Council accessible at <a href="https://www.un.org/securitycouncil/content/un-sc-consolidated-list">https://www.un.org/securitycouncil/content/un-sc-consolidated-list</a>; or (ii) included in the United Nations Lists (UN Lists) or within the ambit any regulations adopted by any jurisdiction relating to or implementing United Nations Security Council Resolutions (“<strong>Designated Person / Entity</strong>”); or</p></li>
<li><p>you are an individual or body corporate which is otherwise prohibited or ineligible in any way, whether in full or in part, under any laws applicable to such individual or body corporate from participating in any part of the transactions contemplated in these Terms, or</p></li>
<li><p>the NFT Exchange is prohibited, restricted, curtailed, hindered, impaired, unauthorized or otherwise adversely affected in any way or in any form or manner whether in full or in part under any applicable law, regulation or rule in your country of residence or domicile or in any jurisdiction applicable to you; or</p></li>
<li><p>if you are unable to make a true and affirmative representation in respect of the matters set out in Paragraph 9.1(q), (r) and (s),</p></li>
</ol></li>
</ol>
<blockquote>
<p>(collectively, the “<strong>Disqualified Persons</strong>”).</p>
</blockquote>
<ol start="4" type="1">
<li><p>The NFT Vendor does not intend to offer any Designated NFT for NFT Exchange or have any dealing with you if you are a Disqualified Person. <strong>Accordingly, if you are a Disqualified Person, you shall not participate in the NFT Exchange and exit the Website immediately.</strong></p></li>
<li><p>The Designated NFTs and the NFT Exchange Service will be made available on the Website from <strong>9 p.m. Singapore Time</strong> on <strong>8 October 2021</strong> and ending on such date and time as determined by the NFT Vendor, or such other period as the NFT Vendor may in its absolute discretion determine (“<strong>NFT Exchange Period</strong>”).</p></li>
<li><p>In the event the NFT Vendor determines that the NFT Exchange Period shall be such other period than as set out in Paragraph 2.5, the NFT Vendor will announce such revised period on the Website or on any of the Channels.</p></li>
</ol>
<ol start="3" type="1">
<li><p><strong><u>CRYPTOPUNK NFT EXCHANGE</u></strong> </p>
<ol type="1">
<li><p>The NFT Vendor will make available a total of <strong>27</strong> CryptoPunk NFTs (“<strong>CryptoPunk NFTs Pool</strong>”) to be exchanged for Tokens at an exchange rate of <strong><u>1,000,000</u></strong> Tokens (“<strong>CryptoPunk NFT Exchange Consideration</strong>”) per CryptoPunk NFT on a first-come-first-serve basis (“<strong>CryptoPunk NFT Exchange</strong>”), where a Participant is considered to be first in time over another Participant if the first-mentioned Participant first effects a Transaction Signing that is recorded on-chain ahead of the second-mentioned Participant.</p></li>
<li><p>Subject to Paragraph 3.3, in order to make a NFT Exchange for a CryptoPunk NFT, a Participant must:</p>
<ol type="a">
<li><p>have accumulated an amount of Tokens equivalent to or more than CryptoPunk NFT Exchange Consideration in a single wallet address (“<strong>Relevant Wallet Address</strong>”);</p></li>
<li><p>connect such Relevant Wallet Address to the Website using a Participating Digital Wallet;</p></li>
<li><p>sign a transaction (“<strong>Transaction Signing</strong>”) to effect a transfer of CryptoPunk NFT Exchange Consideration to a wallet address designated by us (“<strong>CryptoPunk NFT Exchange Consideration Transfer</strong>”) upon which an on-chain digital certificate (“<strong>Digital Certificate</strong>”) will be assigned to the Relevant Wallet Address which:</p>
<ol type="i">
<li><p>indicates the completion of CryptoPunk NFT Exchange Consideration Transfer; and</p></li>
<li><p>indicates the identification code of a CryptoPunk NFT (“<strong>Relevant CryptoPunk NFT</strong>”) that is randomly selected from the CryptoPunk NFTs Pool; and</p></li>
</ol></li>
<li><p>pay / provide for all gas/transaction fees (whether payable in ETH or otherwise) associated with the foregoing actions/transactions.</p></li>
</ol></li>
<li><p>On receipt of the Digital Certificate, the Participant shall, within <strong><u>30</u></strong> days of such receipt (or such other period as determined by NFT Vendor) notify the NFT Vendor of the same by contacting us at the following email address: exchange@ether.cards.</p></li>
<li><p>Subject to the NFT Vendor’s verification that the steps required of the Participant in Paragraph 3.2 is complete to the satisfaction of the NFT Vendor and the completion of any other steps as may be requested by the NFT Vendor of the Participant (“<strong>CryptoPunk NFT Exchange Verification</strong>”), the NFT Vendor shall, within <strong><u>5</u></strong> days following the completion of CryptoPunk NFT Exchange Verification (or such other period as the NFT Vendor may otherwise determine in its sole and absolute discretion), effect a transfer of the Relevant CryptoPunk NFT to the Relevant Wallet Address.</p></li>
<li><p><strong>Notwithstanding each CryptoPunk NFT being unique and the graphical representation of each CryptoPunk NFT being generally unique in attributes, the NFT Vendor is entitled to transfer any CryptoPunk NFT to the Participant and no Participant shall be entitled to make a claim for a specific CryptoPunk NFT from the CryptoPunk NFTs Pool.</strong></p></li>
<li><p>In the event that you purport to participate in a CryptoPunk NFT Exchange other than in accordance with Paragraph 3 in respect of a CryptoPunk NFT, you shall be in material breach of these Terms and acknowledge and agree as follows :</p>

<ol type="a">
<li><blockquote>
<p>that the NFT Vendor shall have no obligation to deliver, and you shall have no right to receive, any CryptoPunk NFT; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall at the NFT Vendor’s request, return such CryptoPunk NFT received/acquired by you, without any entitlement on your part to, or obligation on the part of NFT Vendor to provide any refund for any part of the CryptoPunk NFT Exchange Consideration for your attempted NFT Exchange for such CryptoPunk NFT in breach of these Terms; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall be deemed to have waived all rights, claims and/or causes of action (present or future) under law (including any tortious claims) or contract against the NFT Vendor and the Indemnified Persons in connection with or arising from such attempted NFT Exchange, and shall further hold harmless, the NFT Vendor and the Indemnified Persons from and against any and all losses, damages, taxes, liabilities and expenses that may be incurred by you in connection with or arising from such attempted NFT Exchange.</p>
</blockquote>
</li>
</ol>
</li>
<li><p>In the event that you receive a Digital Certificate as a Participant, you hereby undertake not to transfer such Digital Certificate or ownership or control over the Relevant Wallet Address containing such Digital Certificate prior to the NFT Vendor’s transfer of the Relevant CryptoPunk NFT to the Relevant Wallet Address.</p></li>
</ol>
</li>


</ol>

<ol start="4" type="1">
<li><p><strong><u>OTHER NFTS EXCHANGE</u></strong></p>
<ol type="1">
<li><p>In addition to the CryptoPunk NFTs, the NFT Vendor may from time to time make available other NFTs (“<strong>Other NFTs</strong>”) on the Website for NFT Exchange.</p></li>
<li><p>The NFT Vendor may conduct a NFT Exchange for such Other NFTs (“<strong>Other NFTs Exchange</strong>”) in the following ways:</p>
<ol type="a" start="1">
<li><p>by transferring such Other NFTs to a smart contract which allows for Tokens to be atomically swapped for such Other NFTs (“<strong>Atomic NFT Swap Contract</strong>”); or</p></li>
<li><p>such other procedure as determined by NFT Vendor in its sole and absolute discretion.</p></li>
</ol></li>
<li><p>Where the NFT Vendor conducts an Other NFTs Exchange in the manner described in Paragraph 4.2(a), and a Participant wishes to make a NFT Exchange in respect of an Other NFT, such Participant must:</p>
<ol type="a">
<li><p>have accumulated an amount of Tokens equivalent to or more than the relevant amount of Tokens as required by the NFT Vendor for such NFT Exchange (“<strong>Other NFT Exchange Consideration</strong>”) in a single Relevant Wallet Address; and</p></li>
<li><p>sign a transaction to effect a transfer Other NFT Exchange Consideration to the designated address of the Atomic NFT Swap Contract, upon completion of which the Atomic NFT Swap Contract will effect an on-chain transfer of such Other NFT to the Relevant Wallet Address; and</p></li>
<li><p>pay / provide for all gas/transaction fees associated with the foregoing actions/transactions.</p></li>
</ol></li>
<li><p>Where the NFT Vendor conducts an Other NFTs Exchange in such other manner pursuant to Paragraph 4.2(b), each Participant shall comply with the instructions as set out by the NFT Vendor via the Channels or such other mode of communication as may be determined by the NFT Vendor.</p></li>
<li><p>The NFT Vendor may at its discretion pool together the Other NFTs in a single pool (such pool, “<strong>Other NFTs Pool</strong>”) and to distribute the Other NFTs in the Other NFTs Pool randomly to Participants who complete a transfer of Other NFT Exchange Consideration. <strong>Notwithstanding that NFTs are generally unique and the graphical representations associated with NFTs are generally unique in attributes, the NFT Vendor is entitled to transfer any Other NFT from the Other NFTs Pool to the Participant and no Participant shall be entitled to make a claim for a specific Other NFT from such Other NFTs Pool.</strong></p></li>
<li><p>In the event that you purport to participate in an Other NFT Exchange other than in accordance with Paragraph 4 in respect of an Other NFT, you shall be in material breach of these Terms and acknowledge and agree as follows :</p>
<ol type="a">
<li><blockquote>
<p>that the NFT Vendor shall have no obligation to deliver, and you shall have no right to receive, any Other NFT;</p>
</blockquote></li>
<li><blockquote>
<p>that you shall at the NFT Vendor’s request, return such Other NFT received/acquired by you, without any entitlement on your part to, or obligation on the part of NFT Vendor to provide any refund for any part of the Other NFT Exchange Consideration for your attempted NFT Exchange for such Other NFT; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall be deemed to have waived all rights, claims and/or causes of action (present or future) under law (including any tortious claims) or contract against the NFT Vendor and the Indemnified Persons in connection with or arising from such attempted NFT Exchange, and shall further hold harmless, the NFT Vendor and the Indemnified Persons from and against any and all losses, damages, taxes, liabilities and expenses that may be incurred by you in connection with or arising from such attempted NFT Exchange.</p>
</blockquote></li>
</ol>

</li>
</ol></li>
</ol>

<blockquote>

</blockquote>
<ol start="5" type="1">
<li><p><strong><u>ADMINISTRATIVE AND/OR THIRD PARTY CHARGES</u></strong></p></li>
</ol>
<blockquote>

</blockquote>
<ol type="1">
<li><p>The Designated NFT Exchange Consideration (payable in the form of Tokens) shall be exclusive of all administrative and/or third party charges and/or other transaction fees (if any) that may be incurred in connection with NFT Exchange. Any such administrative and/or third party charges and/or other transaction fees (if any) incurred in connection with your intended NFT Exchange shall be borne by you.</p></li>
<li><p>Any amount(s) of transaction fees (if any) published on the Website, Channels, Participating Digital Wallet, or such other relevant interface is only indicative, and may not be representative or reflective of the actual amount(s) of transaction fees required for effecting a NFT Exchange.</p></li>
</ol>
<ol start="6" type="1">
<li><p><strong><u>ATTEMPTS TO DOUBLE SPEND AND NFT EXCHANGE IN BREACH OF TERMS OR VIOLATION OF APPLICABLE LAWS</u></strong></p></li>
</ol>
<blockquote>
<p>In the event that the NFT Vendor discovers, any attempt by you to make a double spend of Designated NFT Exchange Consideration subject of a NFT Exchange or any attempt to make a NFT Exchange in breach of applicable laws, such action shall be in breach of these Terms and you acknowledge and agree that such NFT Exchange shall be regarded as invalid and/or void <em>ab initio</em> (regardless of whether such double spending is successful or not) and:</p>
</blockquote>
<ol type="a">
<li><blockquote>
<p>that the NFT Vendor shall have no obligation to deliver, and you shall have no right to receive, any Designated NFT; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall at the NFT Vendor’s request, return all Designated NFT(s) received/acquired by you via NFT Exchange, without any entitlement on your part to, receive or obligation on the part of NFT Vendor to provide any refund for any part of the Designated NFT Exchange Consideration for your attempted NFT Exchange; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall be deemed to have waived all rights, claims and/or causes of action (present or future) under law (including any tortious claims) or contract against the NFT Vendor and the Indemnified Persons in connection with or arising from such attempted NFT Exchange, and shall further hold harmless, the NFT Vendor and the Indemnified Persons from and against any and all losses, damages, taxes, liabilities and expenses that may be incurred by you in connection with or arising from such attempted NFT Exchange.</p>
</blockquote></li>
</ol>
<blockquote>
<p><strong>IT IS YOUR SOLE RESPONSIBILITY TO ENSURE THAT THERE IS NO ATTEMPT TO DOUBLE SPEND IN ANY ATTEMPT TO MAKE A NFT EXCHANGE AND THAT SUCH NFT EXCHANGE IS NOT IN VIOLATION OF ANY APPLICABLE LAWS, REGULATIONS OR RULES.</strong></p>
</blockquote>
<ol start="7" type="1">
<li><p><strong><u>RESPONSIBILITY TO ESTABLISH AND MAINTAIN ACCESS TO PARTICIPATING DIGITAL WALLET AND RELEVANT WALLET ADDRESS</u></strong></p></li>
</ol>
<ol type="1">
<li><p>For purposes of your participation in the NFT Exchange (including for any receipt of Designated NFTs), you shall have the sole responsibility to establish, and maintain, in fully operational, secure and valid status, access to your Participating Digital Wallet and Relevant Wallet Address and maintain, in your fully secure possession, the credentials (including private keys) for accessing your Participating Digital Wallet and Relevant Wallet Address.</p></li>
<li><p>In the event of any hack, exploit, theft or permanent loss of access to the Participating Digital Wallet and/or Relevant Wallet Address resulting in a loss of Tokens and/or Designated NFTs from your Participating Digital Wallet and/or Relevant Wallet Address, you acknowledge and confirm that you shall have no right(s), claim(s) or causes of action in any way whatsoever against the NFT Vendor and the Indemnified Persons.</p></li>
<li><p>In the event that you are unable or otherwise fail to receive the Designated NFTs for which you have effected settlement of the Designated NFT Exchange Consideration due to malfunction of the underlying protocols or any interface which you use to access the digital assets in the Participating Digital Wallet and/or Relevant Wallet Address, you shall have no right(s), claim(s) or causes of action in any way whatsoever against the NFT Vendor and the Indemnified Persons whether for any Designated NFT and/or any Designated NFT Exchange Consideration.</p></li>
</ol>
<blockquote>

</blockquote>
<ol start="8" type="1">
<li><p><strong><u>NO REFUND OF DESIGNATED NFT EXCHANGE CONSIDERATION</u></strong></p></li>
</ol>
<blockquote>
<p>You acknowledge, agree, and confirm that there shall be no refund of the Designated NFT Exchange Consideration in respect of any NFT Exchange.</p>
</blockquote>
<ol start="9" type="1">
<li><p><strong><u>REPRESENTATIONS AND WARRANTIES</u></strong></p>
<ol type="1">
<li><p>By accepting these terms, you represent and warrant to the NFT Vendor as follows:</p></li>
</ol></li>
</ol>
<ol type="a">
<li><blockquote>
<p>you acknowledge and agree that the Tokens and the Designated NFTs are not intended to constitute securities of any form, units in a business trust, units in a collective investment scheme, capital markets product, or any other form of regulated investment or investment product in any jurisdiction;</p>
</blockquote></li>
<li><blockquote>
<p>you are not a citizen or resident of a country the laws of which prohibit or conflict with the NFT Exchange or your participation in the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that these Terms do not constitute a prospectus or offer document of any sort and is not intended to constitute an offer of securities of any form, units in a business trust, units in a collective investment scheme, capital markets product, or any other form of regulated investment or investment product in any jurisdiction or a solicitation for any form of investment in any jurisdiction;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that no Token and no Designated NFT is to be construed, interpreted, classified or treated as enabling, or according any opportunity to you to participate in or receive profits, income, or other payments or returns arising from or in connection with the NFT Vendor, Project Group, Project, the Tokens, Designated NFTs or the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that no regulatory authority has examined or approved of these Terms, no such action has been or will be taken under the laws, regulatory requirements or rules of any jurisdiction, and the provision of these Terms to you does not imply that the applicable laws, regulatory requirements or rules have been complied with;</p>
</blockquote></li>
<li><blockquote>
<p>the provision of these Terms, any part thereof or any copy thereof, or acceptance of the same by you, is not prohibited or restricted by the applicable laws, regulations or rules in your jurisdiction, and where any restrictions in relation to possession are applicable, you have observed and complied with all such restrictions at your own expense and without liability to the NFT Vendor;</p>
</blockquote></li>
<li><blockquote>
<p>you have read and understood all of these Terms including the Annexes hereto;</p>
</blockquote></li>
<li><blockquote>
<p>you are not a Disqualified Person;</p>
</blockquote></li>
<li><blockquote>
<p>you have full power and capacity to accept these Terms and perform all your obligations hereunder and in the case where you are accepting these Terms on behalf of a corporation:</p>
</blockquote>

<ol type="i">
<li><p>such corporation is duly incorporated and validly existing under the applicable laws; and</p></li>
<li><p>you are duly authorised to accept these Terms and procure the performance of obligations hereunder;</p></li>
</ol>

</li>
</ol>
<ol start="10" type="a">
<li><blockquote>
<p>if you are a natural person, you are of sufficient age and capacity under the applicable laws of the jurisdiction in which you reside and the jurisdiction of which you are a citizen to accept these Terms and perform all your obligations hereunder;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that the Tokens and the Designated NFTs are not to be construed, interpreted, classified or treated as:</p>
</blockquote>

<ol type="i">
<li><p>debentures, stocks or shares issued by the NFT Vendor;</p></li>
<li><p>rights, options or derivatives in respect of such debentures, stocks or shares;</p></li>
<li><p>rights under a contract for differences or under any other contract the purpose or pretended purpose of which is to secure a profit or avoid a loss;</p></li>
<li><p>units in a collective investment scheme;</p></li>
<li><p>units in a business trust;</p></li>
<li><p>derivatives of units in a business trust; or</p></li>
<li><p>any other security, class of securities or form of investment (whether regulated or otherwise);</p></li>
</ol>
</li>
</ol>
<ol start="12" type="a">
<li><blockquote>
<p>you have a basic degree of understanding of the operation, functionality, usage, storage, transmission mechanisms, and other material characteristics of cryptocurrencies, cryptographic utility tokens, NFTs, blockchain assets, and tokens including Tokens, blockchain-based software systems, cryptocurrency / cryptographic utility tokens wallets or other related token storage mechanisms, blockchain technology and smart contract technology;</p>
</blockquote></li>
<li><blockquote>
<p>you are fully aware of, understand and agree to assume all the risks (including direct, indirect or ancillary risks) associated with your access/use of the Website to participate in the NFT Exchange, your use of your Participating Digital Wallet and/or effect settlement of the Designated NFT Exchange Consideration payable by you in respect of your Tokens purchase;</p>
</blockquote></li>
<li><blockquote>
<p>these Terms constitute legal, valid, and binding obligations on you, enforceable in accordance with its terms and neither the purchase of, nor receipt, nor holding of Tokens is in breach or contravention of any applicable law, regulation or rule in your jurisdiction;</p>
</blockquote></li>
<li><blockquote>
<p>no consent, approval, order or authorisation of, or registration, qualification, designation, declaration or filing with, any regulatory authority in any jurisdiction (the “<strong>Approvals</strong>”) is required on your part in connection with any NFT Exchange, or where any Approvals are required, such Approvals have been obtained and remain valid and in full force and effect;</p>
</blockquote></li>
<li><blockquote>
<p>the Designated NFT Exchange Consideration that you will use to effect NFT Exchange, are not directly or indirectly derived from any activities that in connection with anti-money laundering and/or terrorism financing laws or regulations or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>none of you or (and in the case where you are accepting these Terms on behalf of a corporation) any of your related corporations (if any), any of your directors or officers nor, any of your employees, agents or any other person acting on behalf of your or any of your related corporations is an individual or entity that is, or is owned or controlled by an individual or entity that:</p>
</blockquote>

<ol type="i">
<li><blockquote>
<p>is listed by the Monetary Authority of Singapore as designated individuals or entities defined in the respective regulations promulgated under the Monetary Authority of Singapore Act (Chapter 186) of Singapore, the United Nations Act (Chapter 339) of Singapore, the Variable Capital Companies Act (No. 44 of 2018), or the Terrorism (Suppression of Financing) Act (Chapter 325) of Singapore or such other law, regulation or rule as may be prescribed by the MAS from time to time;</p>
</blockquote></li>
<li><blockquote>
<p>is currently the subject of any sanction administered by the OFAC or any other United States government authority, is not designated as a “Specially Designated National" or "Blocked Person" by OFAC or subject to any similar sanctions or measures imposed or administered by the United Nations Security Council, the European Union, Her Majesty’s Treasury of the United Kingdom or similar sanctions administered or imposed by the government of any other country (collectively, the “<strong>Sanctions</strong>”);</p>
</blockquote></li>
<li><blockquote>
<p>is located, organised or resident in a country or territory that is the subject of such Sanctions (including, without limitation, the Central African Republic, the Democratic People’s Republic of Korea, the Democratic Republic of Congo, Iran, Libya, Mali, Somalia, South Sudan, Sudan and Yemen) (“<strong>Sanctioned Countries</strong>”); or</p>
</blockquote></li>
<li><blockquote>
<p>has engaged in and is not now engaged in any dealings or transactions with any government, person, entity or project targeted by, or located in any country or territory, that at the time of the dealing or transaction is or was the subject of any Sanctions;</p>
</blockquote></li>
</ol>
</li>
</ol>
<ol start="18" type="a">
<li><blockquote>
<p>none of: (i) you; (ii) any person controlling or controlled by you; (iii) if you are a privately-held entity, any person having a beneficial interest in you; or (iv) any person for whom you are acting as agent or nominee in connection with your participation in the NFT Exchange is a senior foreign political figure, or any immediate family member or close associate of a senior foreign political figure, as such terms are defined below;</p>
</blockquote></li>
<li><blockquote>
<p>if you are affiliated with a Foreign Bank, or if you receive deposits from, make payments on behalf of, or handle other financial transactions related to a Foreign Bank, you represent and warrant to the NFT Vendor that: (i) the Foreign Bank has a fixed address, and not solely an electronic address, in a country in which the Foreign Bank is authorised to conduct banking activities; (ii) the Foreign Bank maintains operating records related to its banking activities; (iii) the Foreign Bank is subject to inspection by the banking authority that licensed the Foreign Bank to conduct its banking activities; and (iv) the Foreign Bank does not provide banking services to any other Foreign Bank that does not have a physical presence in any country and that is not a regulated affiliate;</p>
</blockquote></li>
<li><blockquote>
<p>you have sufficient Tokens to effect NFT Exchange in respect of any attempted NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>the Designated NFT(s) to be delivered to and received by you on a successful NFT Exchange will not be used for any purpose in connection with money laundering, terrorism financing or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>you are acquiring Designated NFT(s) as principal and for your own benefit and you are not acting on the instructions of, or as nominee or agent for or on behalf of, any other person;</p>
</blockquote></li>
<li><blockquote>
<p>you bear the sole responsibility to determine what tax implications your participation in the NFT Exchange may have for you and agree not to hold the NFT Vendor or any other person involved in the NFT Exchange liable for any tax liability associated with or arising therefrom;</p>
</blockquote></li>
<li><blockquote>
<p>you agree and acknowledge that the NFT Vendor is not liable for any direct, indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any acceptance of or reliance on these Terms or any part thereof by you;</p>
</blockquote></li>
<li><blockquote>
<p>you waive the right to participate in a class action lawsuit or a class wide arbitration against the NFT Vendor and/or any person involved in the NFT Exchange and/or with the creation and distribution of the Designated NFTs; and</p>
</blockquote></li>
<li><blockquote>
<p>all of the above representations and warranties are, and will continue to be, true, complete, accurate and non-misleading from the time of your acceptance of these Terms notwithstanding the receipt by you of any Designated NFT on a successful NFT Exchange.</p>
</blockquote>
</li>
</ol>
<ol type="1" start="2">
<li><p>The NFT Vendor does not make, and hereby disclaims, any representation or warranty in any form whatsoever, including any representation or warranty in relation to:</p>
<ol type="a">
<li><blockquote>
<p>the information set out on the Website, the Channels or any other place;</p>
</blockquote></li>
<li><blockquote>
<p>the NFT Vendor and the Project Group;</p>
</blockquote></li>
<li><blockquote>
<p>the Project;</p>
</blockquote></li>
<li><blockquote>
<p>the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>the Website;</p>
</blockquote></li>
<li><blockquote>
<p>the Designated NFTs;</p>
</blockquote></li>
<li><blockquote>
<p>the Tokens; and</p>
</blockquote></li>
<li><blockquote>
<p>any Supported Digital Wallet and your Relevant Wallet Address.</p>
</blockquote></li>
</ol>

</li>
</ol>

<ol start="10" type="1">
<li><p><strong><u>DISCLAIMERS</u></strong></p></li>
</ol>
<blockquote>
<p><u>The Website and Atomic NFT Swap Contract</u></p>
</blockquote>
<ol type="1">
<li><p><strong>IN ACCESSING AND/OR USING THE WEBSITE AND/OR THE ATOMIC NFT SWAP CONTRACT, YOU ACKNOWLEDGE AND AGREE THAT :</strong></p>
<ol type="a">
<li><p><strong>THE WEBSITE AND ATOMIC NFT SWAP CONTRACT IS PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS, AND NFT VENDOR AND ITS AFFILIATES (SAVE TO THE EXTENT PROHIBITED BY APPLICABLE LAWS) EXPRESSLY DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND IN RESPECT THEREOF, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT.</strong></p></li>
<li><p><strong>NFT VENDOR AND ITS AFFILIATES HAS NOT MADE AND MAKES NO REPRESENTATION, WARRANTY AND/OR CONDITION OF ANY KIND THAT THE WEBSITE AND THE ATOMIC NFT SWAP CONTRACT WILL MEET YOUR REQUIREMENTS, OR WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.</strong></p></li>
<li><p><strong>YOU SHALL HAVE NO CLAIM AGAINST NFT VENDOR AND/OR ITS AFFILIATES IN RESPECT OF ANY LOSS SUFFERED BY YOU IN RELATION TO OR ARISING FROM YOUR ACCESS AND/OR USE OF THE WEBSITE AND/OR THE ATOMIC NFT SWAP CONTRACT.</strong></p></li>
</ol></li>
</ol>
<blockquote>
<p><u>Participating Digital Wallet</u></p>
</blockquote>
<ol start="2" type="1">
<li><p><strong>IN ACCESSING AND/OR USING A PARTICIPATING DIGITAL WALLET TO PARTICIPATE IN THE NFT EXCHANGE, YOU ACKNOWLEDGE AND AGREE THAT :</strong></p>
<ol type="a">
<li><p><strong>PARTICIPATING DIGITAL WALLET ARE DEVELOPED AND PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS BY PERSON(S)/ENTITY(IES) OTHER THAN NFT VENDOR AND ITS AFFILIATES, AND NFT VENDOR AND ITS AFFILIATES (SAVE TO THE EXTENT PROHIBITED BY APPLICABLE LAWS) EXPRESSLY DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND IN RESPECT THEREOF, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT.</strong></p></li>
<li><p><strong>NFT VENDOR AND ITS AFFILIATES HAS NOT MADE AND MAKES NO REPRESENTATION, WARRANTY AND/OR CONDITION OF ANY KIND THAT ANY PARTICIPATING DIGITAL WALLET WILL MEET YOUR REQUIREMENTS OR THE REQUIREMENTS OR WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.</strong></p></li>
<li><p><strong>YOU SHALL HAVE NO CLAIM AGAINST NFT VENDOR AND/OR ITS AFFILIATES IN RESPECT OF ANY LOSS SUFFERED BY YOU IN RELATION TO OR ARISING FROM YOUR ACCESS AND/OR USE OF ANY PARTICIPATING DIGITAL WALLET.</strong></p></li>
</ol></li>
<li><p>To the maximum extent permitted by all applicable laws, regulations, and rules and except as otherwise provided in these Terms, the NFT Vendor hereby expressly disclaims its liability and shall in no case be liable to you or any person for:</p>


<ol type="a">
<li><blockquote>
<p>any transfer of Designated NFT(s) acquired or to be acquired by you pursuant to a NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>the Tokens used to make a NFT Exchange being obtained through any acts in connection with money laundering, terrorism financing or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>use of Tokens or Designated NFT(s) for any purpose in connection with money laundering, terrorism financing or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>any NFT Exchange being regarded as invalid and/or void <em>ab initio</em>;</p>
</blockquote></li>
<li><blockquote>
<p>any failure, malfunction or breakdown of, or disruption to, the Atomic NFT Swap Contract, the operation of the Website, any Participating Digital Wallet, the Tokens, Designated NFT(s) or any technology (including but not limited to smart contract technology) on which the Atomic NFT Swap Contract, the Website, the NFT Vendor, the Project Group, the Project, the Tokens, your Participating Digital Wallet or which the NFT Exchange relies on, due to occurrences of a forks, hacks, exploits, mining attacks (including but not limited to double-spend attacks, majority mining power attacks and “selfish-mining” attacks), cyber-attacks, distributed denials of service, errors, vulnerabilities, defects, flaws in programming or source code or otherwise, regardless of when such failure, malfunction, breakdown, or disruption occurs;</p>
</blockquote></li>
<li><blockquote>
<p>failure, malfunction or breakdown of, or disruption to, the operation of any blockchain, any blockchain-based software systems or any blockchain technology in connection with the operations of the NFT Vendor, the Project Group, the Project, the Tokens, the Designated NFTs, your Participating Digital Wallet and/or such other technology which the NFT Exchange relies on, due to occurrences of forks, hacks, exploits, mining attacks (including but not limited to double-spend attacks, majority mining power attacks and “selfish-mining” attacks), cyber-attacks, distributed denials of service, errors, vulnerabilities, defects, flaws in programming or source code or otherwise, regardless of when such failure, malfunction, breakdown, or disruption occurs;</p>
</blockquote></li>
<li><blockquote>
<p>any virus, error, bug, flaw, defect or otherwise adversely affecting the operation, functionality, usage, storage, transmission mechanisms, transferability or tradeability and other material characteristics of Tokens and/or the Designated NFTs;</p>
</blockquote></li>
<li><blockquote>
<p>decreases or volatility in traded prices or lack of trading liquidity for Tokens and/or the Designated NFTs in any forum;</p>
</blockquote></li>
<li><blockquote>
<p>failure or unfitness of Tokens and the Designated NFTs for any specific purpose;</p>
</blockquote></li>
<li><blockquote>
<p>the manner of utilisation of the Designated NFT Exchange Consideration received by the NFT Vendor from the NFT Exchange or is otherwise burned;</p>
</blockquote></li>
<li><blockquote>
<p>failure to disclose information relating to the progress of the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>loss of possession of the credentials for accessing, or loss or destruction of the private keys of, your Participating Digital Wallet in any manner and to any extent;</p>
</blockquote></li>
<li><blockquote>
<p>any rejection of trading of the Designated NFTs by any forum;</p>
</blockquote></li>
<li><blockquote>
<p>any prohibition, restriction or regulation by any government or regulatory authority in any jurisdiction of the operation, functionality, usage, storage, transmission mechanisms, transferability or tradeability or other material characteristics of the Tokens and the Designated NFTs;</p>
</blockquote></li>
<li><blockquote>
<p>any risks associated with the Website, the Channels, the NFT Vendor, the Project Group, the Project, the NFT Exchange, Tokens, Designated NFTs and your Participating Digital Wallet; and</p>
</blockquote></li>
<li><blockquote>
<p>all other risks, direct, indirect or ancillary, whether in relation to the Website, the Channels, the NFT Vendor, the Project Group, the Project, the NFT Exchange, Tokens, Designated NFTs, and your Participating Digital Wallet, which are not specifically or explicitly contained in or stated in these Terms.</p>
</blockquote></li>
</ol>


</li>
</ol>






<ol type="1" start="4">
<li><p>In the event of any exploit, hack or theft or other act resulting in a loss of Tokens or Designated NFTs or loss of access to your Participating Digital Wallet, you acknowledge and confirm that you shall have no right(s), claim(s) or causes of action in any way whatsoever against the NFT Vendor and/or Indemnified Persons.</p></li>
<li><p>In the event that the NFT Vendor discovers that you, in your participation in the NFT Exchange, have engaged in unfair, excessive or abusive usage or conduct, the NFT Vendor reserves the right to take such actions as may be necessary, to the fullest extent possible under law, to protect the NFT Vendor from losses, damages, harm or degradation of any form and manner.</p></li>
</ol></li>
</ol>









<ol start="11" type="1">
<li><p><strong><u>LIMITATION OF LIABILITY AND INDEMNIFICATION</u></strong></p>
<ol type="1">
<li><p>To the maximum extent permitted by the applicable laws, regulations and rules:</p>


<ol type="a">
<li><blockquote>
<p>the NFT Vendor and Indemnified Persons shall not be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any transaction as contemplated by these Terms;</p>
</blockquote></li>
<li><blockquote>
<p>in any event, the aggregate liability of the NFT Vendor, in tort, contract or otherwise, arising out of or in connection with any transaction as contemplated by these Terms shall be limited to the <strong>US$100</strong>; and</p>
</blockquote></li>
<li><blockquote>
<p>you hereby agree to waive all rights to assert any claims under the applicable laws, regulations and rules and you may make claims based only on these Terms.</p>
</blockquote>
</li>
</ol>

</li>
</ol>

<ol type="1" start="2">
<li><p>To the maximum extent permitted by the applicable laws, regulations and rules, you shall indemnify, defend, and hold the NFT Vendor and/or Indemnified Persons harmless from and against any and all claims, damages, losses, suits, actions, demands, proceedings, expenses, and/or liabilities (including but not limited to reasonable legal fees incurred and/or those necessary to successfully establish the right to indemnification) filed/incurred by you or any third party against any of the NFT Vendor or the Indemnified Persons arising out of a breach of any warranty, representation, or obligation hereunder.</p></li>
</ol>
</li>
</ol>



<ol start="12" type="1">
<li><p><strong><u>NO ASSIGNMENT</u></strong></p></li>
</ol>
<blockquote>
<p>Subject to these Terms, only you and no other person shall have the right to any claim against the NFT Vendor in connection with your participation in the NFT Exchange. You shall not assign, trade or transfer, or attempt to assign, trade or transfer, your right to any such claim. Any such assignment or transfer shall not impose any obligation or liability of the NFT Vendor to the assignee or transferee. The NFT Vendor may assign right under these Terms to any person without notice to you.</p>
</blockquote>
<ol start="13" type="1">
<li><p><strong><u>INTELLECTUAL PROPERTY RIGHTS</u></strong></p>
<ol type="1">
<li><p>These Terms shall not entitle you to any intellectual property rights, including the rights in relation to the use, for any purpose, of any information, image, user interface, logos, trademarks, trade names, Internet domain names or copyright in connection with the Website, the Channels, the NFT Vendor, the Project Group, the Project, the NFT Exchange, the Tokens, and the Designated NFTs.</p></li>
<li><p>There are no implied licences under these Terms, and any rights not expressly granted to you hereunder are reserved by the NFT Vendor.</p></li>
</ol></li>
<li><p><strong><u>NO WAIVER</u></strong></p></li>
</ol>
<blockquote>
<p>Any failure of the NFT Vendor to enforce these Terms or to assert any right(s), claim(s) or causes of action against you under these Terms shall not be construed as a waiver of the right of the NFT Vendor to assert any right(s), claim(s) or causes of action against you.</p>
</blockquote>
<ol start="15" type="1">
<li><p><strong><u>ENTIRE AGREEMENT</u></strong></p>
<ol type="1">
<li><p>These Terms contain the entire agreement and the understanding between the Parties and supersedes all prior agreements, understandings or arrangements (both oral and written) in relation to the NFT Exchange.</p></li>
</ol></li>
<li><p><strong><u>TAXES</u></strong></p>
<ol type="1">
<li><p>The Tokens transferred as Designated NFT Exchange Consideration shall be exclusive of all taxes that are applicable to your participation in the NFT Exchange in all jurisdictions (“<strong>Payable Tax</strong>”).</p></li>
<li><p>You shall be responsible for determining any Payable Tax and declaring, withholding, collecting, reporting and remitting the correct amount of Payable Tax to the appropriate tax authorities. You shall be solely liable for all penalties, claims, fines, punishments, or other liabilities arising from the non-fulfilment or non-performance to any extent of any of your obligations in relation to the Payable Tax.</p></li>
<li><p>The NFT Vendor shall not be responsible for determining any Payable Tax and declaring, withholding, collecting, reporting and remitting the correct amount of Payable Tax to the appropriate tax authorities.</p></li>
</ol></li>
</ol>
<ol start="17" type="1">
<li><p><strong><u>COMMUNICATIONS WITH NFT VENDOR</u></strong></p>
<ol type="1">
<li><p>Any communication between you and NFT Vendor shall be by electronic means, through the electronic mail (exchange@ether.cards). Any notification from the NFT Vendor may be in the form of notifications from the NFT Vendor through any of the Channels or the Website, or such other communication channel as the NFT Vendor may otherwise elect.</p></li>
<li><p>You :</p>
<ol type="a">
<li><p>consent to receive communications from NFT Vendor in any electronic form; and</p></li>
<li><p>acknowledge and agree that all terms and conditions, agreements, notices, disclosures, and other communications that NFT Vendor provides to you electronically satisfy any legal requirement that would also be satisfied if such communications were to be in a hardcopy writing.</p></li>
</ol></li>
</ol></li>
<li><p><strong><u>GOVERNING LAW AND JURISDICTION</u></strong></p>
<ol type="1">
<li><p>These Terms shall be governed by, and construed in accordance with, the laws of the Republic of Singapore.</p></li>
<li><p>Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity or termination, shall be referred to and finally be resolved by arbitration in Singapore in accordance with the rules of the SIAC for the time being in force, which rules are deemed to be incorporated by reference in this paragraph. The seat of the arbitration shall be Singapore. The tribunal shall consist of a sole arbitrator to be appointed by the Chairman of the SIAC. The language of the arbitration shall be English. This arbitration agreement shall be governed by the laws of the Republic of Singapore.</p></li>
<li><p>Each of the Parties irrevocably submits to the non-exclusive jurisdiction of the courts of Singapore to support and assist the arbitration process pursuant to Paragraph 18.2 of these Terms, including if necessary the grant of interlocutory relief pending the outcome of that process.</p></li>
</ol></li>
</ol>
<blockquote>

</blockquote>
<ol start="19" type="1">
<li><p><strong><u>RIGHTS OF THIRD PARTIES</u></strong></p>
<ol type="1">
<li><p>Subject to Paragraph 19.2, the Contracts (Rights of Third Parties) Act (Chapter 53B) of Singapore, as may be modified, amended or supplemented from time to time, shall apply to these Terms.</p></li>
<li><p>Save for the Indemnified Persons who shall have rights to the extent accorded thereto under these Terms, a person who is not a Party shall not have any rights whatsoever under these Terms or to enforce these Terms.</p></li>
</ol></li>
<li><p><strong><u>SEVERANCE AND PARTIAL INVALIDITY</u></strong></p>
<ol type="1">
<li><p>If any of these Terms is rendered void, illegal or unenforceable by any legislation to which it is subject, it shall be rendered void, illegal or unenforceable to that extent and no further and, for the avoidance of doubt, the rest of these Terms shall continue to be valid and in full force and effect and shall in no way be affected, impaired or invalidated, and the Parties hereto shall use their commercially reasonable efforts to find and employ an alternative means to achieve the same or substantially the same result as that contemplated by such term, provision, covenant or restriction. It is hereby stipulated and declared to be the intention of the Parties that they would have executed the remaining terms, provisions, covenants and restrictions without including any of such that may be hereafter declared invalid, illegal, void or unenforceable.</p></li>
<li><p>The illegality, invalidity or unenforceability of any provision of these Terms under the law of any jurisdiction shall not affect its legality, validity or enforceability under the law of any other jurisdiction nor the legality, validity or enforceability of any other provision.</p></li>
</ol></li>
</ol>
<p><strong>ANNEX 1</strong></p>
<p><strong><u>DEFINITIONS</u></strong></p>
<ol type="1">
<li><p>In these Terms, the following words and expressions shall, where not inconsistent with the context, have the following meanings respectively:</p></li>
</ol>
<blockquote>
<p>“<strong>Affiliate</strong>”, with respect to any person, means any other person directly or indirectly controlling, controlled by or under common control with such person.</p>
<p>“<strong>Approvals</strong>” has the meaning ascribed to it in Paragraph 9.1(o).</p>
<p>“<strong>Atomic NFT Swap Contract</strong>” has the meaning ascribed to it in Paragraph 4.2(a).</p>
<p>“<strong>Channels</strong>” means the Website, the social media channels associated with the Project, namely the Discord group at <a href="https://discord.com/invite/mBwauRSJNW">https://discord.com/invite/mBwauRSJNW</a> (“<strong>Discord Channel</strong>”), the Project’s blog account at <a href="https://blog.ether.cards">https://blog.ether.cards</a>, the Twitter account at <a href="https://twitter.com/ether_cards">https://twitter.com/ether_cards</a>, the Reddit board at <a href="https://www.reddit.com/r/Ether_Cards/">https://www.reddit.com/r/Ether_Cards/</a> or any other online channel of the Project the account of which is held by the NFT Vendor or its Affiliates.</p>
<p>“<strong>close associate</strong>” in relation to a senior foreign political figure means a person who is widely and publicly known to maintain an unusually close relationship with such senior foreign political figure, and includes a person who is in a position to conduct substantial domestic and international financial transactions on behalf of such senior foreign political figure.</p>
<p>“<strong>CryptoPunk NFT</strong>” means a NFT developed by Larva Labs which are native to the following smart contract address on the Ethereum blockchain : 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB.</p>
<p>“<strong>CryptoPunk NFT Exchange</strong>” has the meaning ascribed to in Paragraph 3.1.</p>
<p>“<strong>CryptoPunk NFT Exchange Consideration</strong>” has the meaning ascribed to in Paragraph 3.1.</p>
<p>“<strong>CryptoPunk NFT Exchange Consideration Transfer</strong>” has the meaning ascribed to in Paragraph 3.2.</p>
<p>“<strong>CryptoPunk NFT Exchange Verification</strong>” has the meaning ascribed to in Paragraph 3.4.</p>
<p>“<strong>CryptoPunk NFTs Pool</strong>” has the meaning ascribed to in Paragraph 3.1.</p>
<p>“<strong>Designated NFT Exchange Consideration</strong>” means the the CryptoPunk NFT Exchange Consideration or Other NFT Exchange Consideration, as the case may be.</p>
<p>“<strong>Designated NFTs</strong>” means the (a) CryptoPunk NFTs selected by the NFT Vendor to be subject of the Cryptopunk NFT Pool and (b) the Other NFTs.</p>
<p>“<strong>Designated Person / Entity</strong>” has the meaning ascribed to it in Paragraph 2.3(c).</p>
<p>“<strong>Digital Certificate</strong>” has the meaning ascribed to it in Paragraph 3.2(c).</p>
<p>“<strong>Discord Channel</strong>” means the Discord channel associated with the Project at <a href="https://discord.com/invite/mBwauRSJNW">https://discord.com/invite/mBwauRSJNW</a> (last accessed on 28 September 2021).</p>
<p>“<strong>Disqualified Persons</strong>” has the meaning ascribed to it in Paragraph 2.3.</p>
<p>“<strong>double spend</strong>” means to undertake, or attempt to undertake, two (2) or more different transactions on a blockchain network and spend the same account balance on each of the transactions.</p>
<p>“<strong>ETH</strong>” means Ether, the cryptographic token native to the Ethereum network.</p>
<p>“<strong>Excluded Jurisdiction</strong>” means any of the following :</p>
</blockquote>
<ol type="a">
<li><p>the People’s Republic of China, the United States of America, Democratic People’s Republic of Korea, Democratic Republic of Congo, Iran, Libya, Somalia, South Sudan, Sudan and Yemen;</p></li>
<li><p>a jurisdiction identified by the Financial Action Task Force (FATF) for strategic AML/CFT deficiencies and included in FATF’s listing of “High-risk and Other Monitored Jurisdictions” accessible at http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions; and</p></li>
<li><p>a jurisdiction (including but not limited to the Sanctioned Countries) in which the NFT Exchange is prohibited, restricted or unauthorised in any form or manner whether in full or in part under the laws, regulatory requirements or rules in such jurisdiction.</p></li>
</ol>
<blockquote>
<p>“<strong>Foreign Bank</strong>” means a non-United States of America banking institution.</p>
<p>“<strong>immediate family</strong>” in relation to a senior foreign political figure includes such figure’s parents, siblings, spouse, children and in-laws.</p>
<p>“<strong>Indemnified Persons</strong>” means the NFT Vendor, the Project Group and its respective related companies, affiliates, directors, officers, employees, agents, successors, and permitted assignees.</p>
<p>“<strong>NFT</strong>” means non-fungible tokens.</p>
<p>“<strong>NFT Exchange</strong>” means the exchange of a Designated NFT for the relevant amount of Tokens based on these Terms.</p>
<p>“<strong>NFT Exchange Period</strong>” has the meaning ascribed to it in Paragraph 2.5.</p>
<p>“<strong>NFT Vendor</strong>” means has the meaning ascribed to it in Paragraph 1.2<strong>.</strong></p>
<p>“<strong>OFAC</strong>” means the United States Office of Foreign Assets Control of the United States Department of the Treasury.</p>
<p>“<strong>Other NFT Exchange Consideration</strong>” has the meaning ascribed to it in Paragraph 4.3(a).</p>
<p>“<strong>Other NFTs</strong>” has the meaning ascribed to it in Clause 4.1.</p>
<p>“<strong>Other NFTs Exchange</strong>” has the meaning ascribed to it in Clause 5.2.</p>
<p>“<strong>Participant</strong>” means persons/entities participating in the NFT Exchange.</p>
<p>“<strong>Participating</strong> <strong>Digital Wallet</strong>” of a Participant and in relation to a blockchain address means a Supported Digital Wallet (a) in respect of which the private keys of such blockchain address are held, owned and/or controlled by such Participant; (b) used the such Participant to connect with Website; and (c) from which Tokens are transferred to a blockchain address designated by the NFT Vendor in exchange for Designated NFTs.</p>
<p>“<strong>Payable Tax</strong>” has the meaning ascribed to it in Paragraph 16.1.</p>
<p>“<strong>Project</strong>” means the Ether Cards project as described on the Website;</p>
<p>“<strong>Project Group</strong>” means the NFT Vendor and its Affiliates.</p>
<p>“<strong>Relevant CryptoPunk NFT</strong>” has the meaning ascribed to it in Paragraph 3.2(c)(ii).</p>
<p>“<strong>Relevant Wallet Address</strong>” has the meaning ascribed to it in Paragraph 3.2(a).</p>
<p>“<strong>Sanctions</strong>” has the meaning ascribed to it in Paragraph 9.1.</p>
<p>“<strong>Sanctioned Countries</strong>” has the meaning ascribed to it in Paragraph 9.1.</p>
<p>“<strong>senior foreign political figure</strong>” means a senior official in the executive, legislative, administrative, military or judicial branch of a government (whether elected or not), a senior official of a major political party, or a senior executive of a foreign government-owned corporation. It includes any corporation, business or other entity that has been formed by, or for the benefit of, a senior foreign political figure.</p>
<p>“<strong>SIAC</strong>” means the Singapore International Arbitration Centre.</p>
<p>“<strong>Supported Digital Wallet</strong>” means a digital wallet address that is compatible with the blockchain associated with (a) the Tokens; (b) the Designated NFTs; and (c) the Website.</p>
<p>“<strong>Tokens</strong>” means the Dust tokens (DUST), which is the cryptographic token native to the Project, and “<strong>Token</strong>” shall be construed accordingly.</p>
<p>“<strong>Website</strong>” has the meaning ascribed to it in Paragraph 1.1.</p>
</blockquote>
<ol type="1" start="2">
<li><p>In these Terms, a reference to:</p>

<ol type="a">
<li><blockquote>
<p>the NFT Vendor includes a reference to its duly authorised agents and/or delegates;</p>
</blockquote></li>
<li><blockquote>
<p>a person includes a reference to any individual, body corporate, unincorporated association or partnership;</p>
</blockquote></li>
<li><blockquote>
<p>an agreement or other document is a reference to that agreement or document as from time to time supplemented or amended;</p>
</blockquote></li>
<li><blockquote>
<p>the masculine gender includes the feminine and neuter genders and vice versa;</p>
</blockquote></li>
<li><blockquote>
<p>the singular includes the plural and vice versa; and</p>
</blockquote></li>
<li><blockquote>
<p>any law or regulation is a reference to that law or regulation as amended from time to time and, where the same has been repealed, to any re-enactment or replacement of the same.</p>
</blockquote></li>
</ol>
</li>
</ol>
`;

const TermsBox = _ref => {
  let {
    termsVisible,
    handleClose,
    handleAccept
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, termsVisible ? /*#__PURE__*/React.createElement("div", {
    className: "terms-root"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terms-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scrollable-content"
  }, /*#__PURE__*/React.createElement("h2", null, "Terms and Conditions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: '16px'
    },
    dangerouslySetInnerHTML: {
      __html: terms
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tc-button-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dust-pool-btn",
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "dust-pool-btn",
    onClick: handleAccept
  }, "Accept"))))) : /*#__PURE__*/React.createElement(React.Fragment, null));
};

var css_248z = ".terms-root{\r\n\tbox-sizing: border-box;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(255,255,255,0.3);\r\n\tz-index: 1100;\r\n\tdisplay: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.restricted-box {\r\n\twidth:40%;\r\n\theight: auto;\r\n\tmin-width: 400px;\r\n\tmax-height: 600px;\r\n\tbackground:white;\r\n\tborder-radius: 15px;\r\n\tpadding: 15px;\r\n\t-webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \r\n  \tbox-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\r\n}\r\n\r\n.scrollable-content{\r\n\twidth:100%;\r\n\theight: 100%;\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.scrollable-content h2{\r\n\ttext-align: center;\r\n\tpadding-bottom: 15px;\r\n\tposition: sticky;\r\n\ttop:0;\r\n\tbackground:white;\r\n\tbackground: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\r\n\tbackground: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\r\n\tbackground: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffffff\",endColorstr=\"#ffffff\",GradientType=1);\r\n}\r\n\r\n.restricted-button-container{\r\n\tmargin-top:25px;\r\n\ttext-align: center;\r\n}\r\n.tc-button-container button{\r\n\tmargin: 10px 5px;\r\n}\r\n\r\n.restricted-container {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.restricted-container .country{\r\n\twidth:25%;\r\n\ttext-align: center;\r\n\tline-height: 1.8rem;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\t.restricted-container .country{\r\n\t\twidth:50%;\r\n\t}\r\n  }";
styleInject(css_248z);

const RestrictedAreaBox = _ref => {
  let {
    restrictedBoxVisible,
    handleClose
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, restrictedBoxVisible ? /*#__PURE__*/React.createElement("div", {
    className: "terms-root"
  }, /*#__PURE__*/React.createElement("div", {
    className: "restricted-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scrollable-content"
  }, /*#__PURE__*/React.createElement("h2", null, "Restricted region"), /*#__PURE__*/React.createElement("div", {
    className: "restricted-container"
  }, Object.values(blockedCountries).map(country => {
    return /*#__PURE__*/React.createElement("div", {
      className: "country"
    }, country);
  })), /*#__PURE__*/React.createElement("div", {
    className: "restricted-button-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dust-pool-btn",
    onClick: handleClose
  }, "OK"))))) : /*#__PURE__*/React.createElement(React.Fragment, null));
};

const ShowNextPreviosProject = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "snp-root"
  }, /*#__PURE__*/React.createElement("div", {
    className: "previous-box snp-box"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: img$3,
    style: {
      maxHeight: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "snp-text"
  }, /*#__PURE__*/React.createElement("span", null, "previous"), /*#__PURE__*/React.createElement("div", {
    className: "snp-text-p-n"
  }, "Mutant ape yacht club"))), /*#__PURE__*/React.createElement("div", {
    className: "snp-divider"
  }, /*#__PURE__*/React.createElement("img", {
    src: img
  })), /*#__PURE__*/React.createElement("div", {
    className: "next-box snp-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snp-text text-right"
  }, /*#__PURE__*/React.createElement("span", null, "next"), /*#__PURE__*/React.createElement("div", {
    className: "snp-text-p-n"
  }, "Mutant ape yacht club")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: img$3,
    style: {
      maxHeight: "100%"
    }
  }))));
};

const ProjectSubpage = _ref => {
  let {
    pool,
    address,
    dust,
    d4p,
    ethersProvider,
    chainId,
    handleConnect,
    handleBack
  } = _ref;
  const [dustBalance, setDustBalance] = useState(null);
  const [waitingForApproval, setWaitingForApproval] = useState(false);
  const [txInProgress, setTxInProgress] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [userCountryCode, setUserCountryCode] = useState(null);
  const [countryBlocked, setCountryBlocked] = useState(false);
  const [showRestricted, setShowRestricted] = useState(false);
  const [userHash, setUserHash] = useState(null);
  const [showTerms, setShowTerms] = useState(false);
  useState(false);
  useState(null);
  useState(false);
  useState(false);
  useRef(null);
  useEffect(() => {
    console.log('sub page mounted', chainId);

    const fetchUserCountry = async () => {
      const res = await axios.get(`${chainId === 1 ? 'https://heroku.ether.cards' : 'https://heroku-staging.ether.cards'}/api/location`).catch(e => console.log(e));

      if (res && res.data && res.data.country_code) {
        const countryCode = res.data.country_code;
        console.log('CC', countryCode);
        setUserCountryCode(countryCode);
      } else {
        toast.error('Unable to determine your country');
      }
    };

    fetchUserCountry();
    getUserHashes();
  }, []);
  useEffect(() => {
    const getUserHashes = async () => {
      let res = await d4p.numberOfHashes(address).catch(e => console.log);

      if (res && Number(res) > 0) {
        console.log('number of hashes', Number(res));
        let storedHash = localStorage.getItem('user_hash' + pool.id);

        if (storedHash) {
          setUserHash(storedHash);
          setTxHash(null);
        } else {
          setUserHash(null);
        }
      }

      let tx = localStorage.getItem('tx_hash' + pool.id);

      if (tx) {
        setTxHash(tx);
      } else {
        setTxHash(null);
      }
    };

    if (address && d4p) {
      console.log('get user hashes');
      getUserHashes();
    }
  }, [address, d4p]);

  const getUserHashes = async () => {};

  useEffect(() => {
    if (userCountryCode) {
      const blocked = Object.keys(blockedCountries).includes(userCountryCode);
      console.log('blocked?', blocked);
      setCountryBlocked(blocked);
    }
  }, [userCountryCode]);
  useEffect(() => {
    if (dust && address) {
      getDustBalance();
    }
  }, [address]);

  const getDustBalance = async () => {
    let balance = await dust.balanceOf(address).catch(e => console.log);
    console.log('balance', dustBalance);

    if (balance) {
      setDustBalance(balance);
    }
  };

  const connectOrExhange = () => {
    if (address) {
      doTheExchange();
    } else {
      handleConnect();
    }
  };

  const doTheExchange = async () => {
    if (countryBlocked) {
      setShowRestricted(true);
    } else {
      let b = Number.parseFloat(ethers.utils.formatEther(dustBalance));
      let p = Number.parseFloat(ethers.utils.formatEther(pool.vaultData.vaultPrice));
      console.log(b, p);

      if (b < p) {
        console.log('NOT ENOUGH DUST');
        toast.warn('Your Dust balance is lower than the item price.');
        return;
      }

      setShowTerms(true);
    }
  };

  const onTermsAccepted = async () => {
    setShowTerms(false); //const data="0x0000000000000000000000000000000000000000000000000000000000000000";

    const data = ethers.utils.hexZeroPad(pool.id, 32);
    let dc = dust.connect(ethersProvider.getSigner());
    let gasLimit = BigNumber.from(550000); // await dc.estimateGas.send(dust4PunksContract.address,itemPrice,data).catch(e =>{toast.error(e.error.message)});
    // console.log('GASLIMIT',gasLimit);

    let tx = null;
    setWaitingForApproval(true);
    tx = await dc.send(d4p.address, pool.vaultData.vaultPrice, data, {
      gasLimit
    }).catch(e => {
      toast.error(e.message);
    });
    setWaitingForApproval(false);
    setTxInProgress(true);

    if (tx) {
      localStorage.setItem('tx_hash' + pool.id, tx.hash);
      setTxHash(tx.hash);
    } else {
      setTxInProgress(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "pool-ps-root"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pool-ps-btn",
    onClick: handleBack
  }, /*#__PURE__*/React.createElement("span", null, "\u25C2"), /*#__PURE__*/React.createElement("p", null, "Back")), /*#__PURE__*/React.createElement("div", {
    className: "pool-ps-card-and-descipton"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-left"
  }, /*#__PURE__*/React.createElement("img", {
    src: img$3,
    style: {
      maxWidth: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-box w-100"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-card-label"
  }, "POOL"), /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-title "
  }, pool.name), /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-card-label"
  }, "COUNTER"), /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("b", null, pool.vaultData.available, " out of ", pool.totalSupply, " left")), /*#__PURE__*/React.createElement(CounterBar, {
    value: pool.vaultData.available,
    maxValue: pool.totalSupply
  }), /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-card-label"
  }, "Your balance"), /*#__PURE__*/React.createElement("div", {
    className: "dpc-box"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("b", null, dustBalance ? Number(ethers.utils.formatEther(dustBalance)).toLocaleString() + ' D' : 'Connect your wallet to see your dust balance'))), /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-card-label"
  }, "Price"), /*#__PURE__*/React.createElement("div", {
    className: "dpc-box"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("b", null, Number(ethers.utils.formatEther(pool.vaultData.vaultPrice)).toLocaleString() + ' D'))), /*#__PURE__*/React.createElement("div", {
    className: "ps-text-bottom"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dust-pool-btn",
    onClick: connectOrExhange
  }, address ? 'Exchange' : 'Connect'))))), /*#__PURE__*/React.createElement("p", {
    className: "dust-pool-card-label mt-2",
    style: {
      fontFamily: "poppins-semibold",
      textTransform: "capitalize",
      fontSize: "18px"
    }
  }, /*#__PURE__*/React.createElement("b", null, "Description")), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"), /*#__PURE__*/React.createElement(ShowNextPreviosProject, null), /*#__PURE__*/React.createElement(TermsBox, {
    termsVisible: showTerms,
    handleClose: () => setShowTerms(false),
    handleAccept: onTermsAccepted
  }), /*#__PURE__*/React.createElement(RestrictedAreaBox, {
    restrictedBoxVisible: showRestricted,
    handleClose: () => setShowRestricted(false)
  }), waitingForApproval && /*#__PURE__*/React.createElement("div", {
    className: "approval-mask"
  }));
};

var Dust$2 = "0xe2E109f1b4eaA8915655fE8fDEfC112a34ACc5F0";
var Dust4Punks$2 = "0xAD5304562D6e816938f44a457a0aA055da565ac1";
var Zoom2$2 = "0x7cdF091AF6a9ED75E3192500d3e5BB0f63e22Dea";
var AddressesMain = {
	Dust: Dust$2,
	Dust4Punks: Dust4Punks$2,
	Zoom2: Zoom2$2
};

var Dust$1 = "0x30189f1D90e1410176619020C4D6438A40A8626d";
var Dust4Punks$1 = "0xAB91877E206596DB88d57325A015834A94A3ba70";
var Zoom2$1 = "0x491592F30D9a3d1887F486eA2A3c72ad82fAcF4D";
var AddressesRinkeby = {
	Dust: Dust$1,
	Dust4Punks: Dust4Punks$1,
	Zoom2: Zoom2$1
};

var abi$3 = [
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			},
			{
				internalType: "address[]",
				name: "_defaultOperators",
				type: "address[]"
			},
			{
				internalType: "uint256",
				name: "_initialSupply",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "AuthorizedOperator",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "Burned",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "Minted",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "RevokedOperator",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "Sent",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "holder",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "authorizeOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "burn",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
		],
		name: "defaultOperators",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "granularity",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "isOperatorFor",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "operatorBurn",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "operatorSend",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "revokeOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "send",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "holder",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_newName",
				type: "string"
			},
			{
				internalType: "string",
				name: "_newSymbol",
				type: "string"
			}
		],
		name: "updateTokenInfo",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var Dust = {
	abi: abi$3
};

var abi$2 = [
	{
		inputs: [
			{
				internalType: "contract IRNG",
				name: "_rng",
				type: "address"
			},
			{
				internalType: "address",
				name: "dust",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bytes32",
				name: "hash",
				type: "bytes32"
			}
		],
		name: "RedemptionRequest",
		type: "event"
	},
	{
		inputs: [
		],
		name: "DUST_TOKEN",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "vault",
				type: "address"
			},
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "add_721_vault",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "vault",
				type: "address"
			},
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "handler",
				type: "address"
			}
		],
		name: "add_external_redeemer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "vault",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			}
		],
		name: "change_vault_price",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "enabled",
				type: "bool"
			}
		],
		name: "enable_vault",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "hash",
				type: "bytes32"
			}
		],
		name: "isTokenRedeemed",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "next_redeemable",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			}
		],
		name: "numberOfHashes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "rand",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "requestId",
				type: "bytes32"
			}
		],
		name: "process",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "punksForDust",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "string",
						name: "name",
						type: "string"
					},
					{
						internalType: "address",
						name: "vault",
						type: "address"
					},
					{
						internalType: "address",
						name: "token",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "random",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "address",
						name: "handler",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "position",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "token_id",
						type: "uint256"
					},
					{
						internalType: "bool",
						name: "redeemed",
						type: "bool"
					}
				],
				internalType: "struct DustBusterPro",
				name: "general",
				type: "tuple"
			}
		],
		name: "redeem",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "hash",
				type: "bytes32"
			}
		],
		name: "redeemedTokenId",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "rng",
		outputs: [
			{
				internalType: "contract IRNG",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		name: "tokensReceived",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "userhashes",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultName",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultPrice",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultToken",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];
var Dust4Punks = {
	abi: abi$2
};

var _format = "hh-sol-artifact-1";
var contractName = "Zoom2";
var sourceName = "contracts/Zoom2.sol";
var abi$1 = [
	{
		inputs: [
			{
				internalType: "bytes",
				name: "inputData",
				type: "bytes"
			}
		],
		name: "combine",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];
var bytecode = "0x608060405234801561001057600080fd5b506104a0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063124542e314610030575b600080fd5b6100e96004803603602081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061023c565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610131578082015181840152602081019050610116565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b8381101561019757808201518184015260208101905061017c565b50505050905090810190601f1680156101c45780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156101fd5780820151818401526020810190506101e2565b50505050905090810190601f16801561022a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b60608060608060608060208701600381015160001a610100600283015160001a020159604052604051945060408102855260005b6002820281101561029257600060208202602088010152600181019050610270565b5059604052604051935060208102845260005b818110156102c4576000602082026020870101526001810190506102a5565b506006820191505960405260206040510192506000602084016000805b8481101561044757600286015160001a610100600188015160001a020160008052865160001a600381141561031557600093505b600481146002821417156103c257600488015160001a61010060038a015160001a0201600689015160001a61010060058b015160001a0201600283141561037c576040820260208e0101600160146101000a03600c8383510103511660005260088b019a50505b60048314156103bf576040820260208e010151518087821488831117156103a95787820390506001880197505b818811156103b657600090505b8060208d015250505b50505b60006002821414156103ed57600888019750600160146101000a03600c890351166000526014880197505b6000516000806000858c856207a120fa503d6000883e3d9050866040860260208f010152806040860260408f010152838a019950808701965080880197508088036020860260208e010152505050506001810190506102e1565b50828652602082016040525050505050808288955095509550505050919390925056fea264697066735822122057a5d2e5a6e7eed9cbc9707c4487c4deb46cbab8fa7c83a798ede1b3763cae6a64736f6c63430007050033";
var deployedBytecode = "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063124542e314610030575b600080fd5b6100e96004803603602081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061023c565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610131578082015181840152602081019050610116565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b8381101561019757808201518184015260208101905061017c565b50505050905090810190601f1680156101c45780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156101fd5780820151818401526020810190506101e2565b50505050905090810190601f16801561022a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b60608060608060608060208701600381015160001a610100600283015160001a020159604052604051945060408102855260005b6002820281101561029257600060208202602088010152600181019050610270565b5059604052604051935060208102845260005b818110156102c4576000602082026020870101526001810190506102a5565b506006820191505960405260206040510192506000602084016000805b8481101561044757600286015160001a610100600188015160001a020160008052865160001a600381141561031557600093505b600481146002821417156103c257600488015160001a61010060038a015160001a0201600689015160001a61010060058b015160001a0201600283141561037c576040820260208e0101600160146101000a03600c8383510103511660005260088b019a50505b60048314156103bf576040820260208e010151518087821488831117156103a95787820390506001880197505b818811156103b657600090505b8060208d015250505b50505b60006002821414156103ed57600888019750600160146101000a03600c890351166000526014880197505b6000516000806000858c856207a120fa503d6000883e3d9050866040860260208f010152806040860260408f010152838a019950808701965080880197508088036020860260208e010152505050506001810190506102e1565b50828652602082016040525050505050808288955095509550505050919390925056fea264697066735822122057a5d2e5a6e7eed9cbc9707c4487c4deb46cbab8fa7c83a798ede1b3763cae6a64736f6c63430007050033";
var linkReferences = {
};
var deployedLinkReferences = {
};
var Zoom2 = {
	_format: _format,
	contractName: contractName,
	sourceName: sourceName,
	abi: abi$1,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	linkReferences: linkReferences,
	deployedLinkReferences: deployedLinkReferences
};

var abi = [
	{
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var Dummy = {
	abi: abi
};

const contractAbis = {
  Dust,
  Dust4Punks,
  Zoom2
};
const addresses = {
  1: {
    addr: AddressesMain,
    name: 'Main'
  },
  4: {
    addr: AddressesRinkeby,
    name: 'Rinkeby'
  }
};
const getContract = async (contractName, provider) => {
  //console.log('get contract fn',provider);
  let ntw = await provider.getNetwork(); //console.log('nnetwork',ntw);

  let contractAbi = contractAbis[contractName];
  let address = addresses[ntw.chainId].addr[contractName];
  let contract = null;

  try {
    contract = new ethers.Contract(address, contractAbi.abi, provider);
  } catch {
    console.log('contract not found');
  } //console.log(contractName,contract);


  return contract;
};
const getDummy721 = async (address, provider) => {
  let contract = null;

  if (!address) {
    return contract;
  }

  try {
    contract = new ethers.Contract(address, Dummy.abi, provider);
  } catch {
    console.log('contract not found');
  }

  return contract;
};

function useInterval(callback, delay) {
  const savedCallback = useRef(); // Remember the latest callback.

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const UPDATE_INTERVAL = 60000;
let POOLS = [{
  id: 0,
  name: 'Cryptopunk Pool',
  imgSrc: img$3,
  order: 0,
  totalSupply: 27,
  poolUrl: 'https://larvalabs.com/cryptopunks/accountInfo?account=0x8fa20dcc712bd224b54bc1cdfd30a37349f8df2a#'
}, {
  id: 1,
  name: 'Meebit Pool',
  imgSrc: img$3,
  order: 1,
  totalSupply: 30,
  poolUrl: 'https://meebits.larvalabs.com/meebits/account?address=0x1f3911F4F43671d187A882df129773A7261989e8'
}, {
  id: 2,
  name: 'Mike Tyson Pool',
  imgSrc: img$3,
  order: 2,
  totalSupply: 25,
  poolUrl: 'https://opensea.io/0xCdA66b3f393cEfc6E476E2183164bD2e9DA78f2e'
}, {
  id: 3,
  name: 'EC Alpha Pool',
  imgSrc: img$3,
  order: 3,
  totalSupply: 50,
  poolUrl: 'https://opensea.io/0xA375A68CbFf5226E51eEBc2128493D1e30F171B1'
}, {
  id: 4,
  name: 'EC Founder Pool',
  imgSrc: img$3,
  order: 4,
  totalSupply: 200,
  poolUrl: 'https://opensea.io/0xB27b95e6B138c968ec1BDC56D4a538Ed0F83b3C2'
}, {
  id: 5,
  name: 'MetaZoo Pool',
  imgSrc: img$3,
  order: 5,
  totalSupply: 50,
  poolUrl: 'https://opensea.io/0xfa87ae4cf49806eEaEa2F7DF1B7411834Ab097d6'
}, {
  id: 6,
  imgSrc: img$3,
  name: 'Toddlerpillars Pool',
  order: 6,
  totalSupply: 100,
  poolUrl: 'https://opensea.io/0x9dFF1113CF4186deC4feb774632356D22f07eB9e'
}];
const UPCOMING_POOLS = [{
  imgSrc: img$3,
  name: 'Paul Timbuktu',
  price: 10000
}, {
  imgSrc: img$3,
  name: 'Paul Timbuktu two row',
  price: 10000
}, {
  imgSrc: img$3,
  name: 'Paul Timbuktu',
  price: 10000
}, {
  imgSrc: img$3,
  name: 'Paul Timbuktu',
  price: 10000
}];

const TopSectionDividers = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '25px 0'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: img$2,
  style: {
    maxHeight: '50px'
  }
}), /*#__PURE__*/React.createElement("img", {
  src: img$1,
  style: {
    maxHeight: '50px'
  }
}));

const DustPools = _ref => {
  let {
    address,
    ethersProvider,
    chainId,
    handleConnect
  } = _ref;
  const [selectedPoolId, setSelectedPoolId] = useState(null);
  const [dustContract, setDustContract] = useState(null);
  const [dust4PunksContract, setDust4PunksContract] = useState(null);
  const [zoom2, setZoom2] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [initDone, setInitDone] = useState(false);
  const [allPools, setAllPools] = useState([]);
  const [pools, setPools] = useState([]);
  useEffect(() => {
    const initContract = async () => {
      let c = await getContract('Dust', ethersProvider);

      if (c) {
        setDustContract(c);
        console.log('DUST:', c);
      } else {
        console.log('contract not found');
      }

      let Zoom2Contract = await getContract('Zoom2', ethersProvider);

      if (Zoom2Contract) {
        setZoom2(Zoom2Contract);
        console.log('ZOOM:', Zoom2Contract);
      } else {
        console.log('Could not initialise Zoom2 Contract');
      }

      let D4P = await getContract('Dust4Punks', ethersProvider);

      if (D4P) {
        setDust4PunksContract(D4P);
        console.log('D4P:', D4P);
      } else {
        console.log('Could not initialise D4P Contract');
      }
    };

    if (ethersProvider) {
      initContract();
    }
  }, [ethersProvider]);
  useEffect(() => {
    if (dust4PunksContract && dustContract && zoom2
    /*  && !initDone */
    ) {
      getPools();
    }
  }, [dust4PunksContract]); //,dustContract,zoom2

  const getPools = async () => {
    console.log('GETTING POOL DATA....');
    let res = await dust4PunksContract.next_redeemable().catch(e => console.log);
    let numberOfPools = 0;

    if (res) {
      numberOfPools = Number(res);
    }

    console.log('#OF POOLS', numberOfPools); // if(address){

    const ZoomLibraryInstance = new Zoom({
      use_reference_calls: true
    });
    let calls = [];

    for (let i = 0; i < numberOfPools; i++) {
      //Punk vault address
      const vaultAddress = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultAddress', [i]], 'vaultAddress(uint256) returns (address)');
      calls.push(vaultAddress); //Pool Name

      const vaultName = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultName', [i]], 'vaultName(uint256) returns (string)');
      calls.push(vaultName); //Vault price

      const vaultPrice = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultPrice', [i]], 'vaultPrice(uint256) returns (uint256)');
      calls.push(vaultPrice); //Vault token addredd

      const vaultToken = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultToken', [i]], 'vaultToken(uint256) returns (address)');
      calls.push(vaultToken);
    }

    const ZoomQueryBinary = ZoomLibraryInstance.getZoomCall(); //console.log("======== ZOOM CALL START ============" );
    //console.time('zoomCall');

    const combinedResult = await zoom2.combine(ZoomQueryBinary); //console.timeEnd('zoomCall');
    //console.log("======== ZOOM CALL END ==============" );

    ZoomLibraryInstance.resultsToCache(combinedResult, ZoomQueryBinary); //4 calls per vault

    let tempPool = [];
    let poolIdx = 0;

    for (let i = 0; i < numberOfPools * 4; i += 4) {
      let va = ZoomLibraryInstance.decodeCall(calls[i + 0]).toString();
      let vn = ZoomLibraryInstance.decodeCall(calls[i + 1]).toString();
      let vp = ZoomLibraryInstance.decodeCall(calls[i + 2]).toString();
      let vt = ZoomLibraryInstance.decodeCall(calls[i + 3]).toString();
      const vd = {
        vaultAddress: va,
        vaultName: vn,
        vaultPrice: vp,
        vaultToken: vt,
        available: null
      };
      let vToken = await getDummy721(vt, ethersProvider);

      if (vToken) {
        vd.tokenContract = vToken;
      }

      tempPool.push({ ...POOLS[poolIdx],
        vaultData: vd
      });
      poolIdx++;
    }

    console.log('AP', tempPool);
    setAllPools(tempPool);
    setPools(tempPool);
    setSelectedFilter('ALL');
  };

  useEffect(() => {
    console.log('allPools changed...', allPools.length);

    if (allPools.length > 0) {
      updateVaultBalances();
    }
  }, [allPools]);
  useInterval(() => {
    updateVaultBalances();
  }, UPDATE_INTERVAL);

  const updateVaultBalances = async () => {
    if (allPools[0].vaultData && allPools[0].vaultData.tokenContract) {
      //console.log('vaultdata',vaultData);
      const ZoomLibraryInstance = new Zoom();
      let calls = [];
      let hasContract = []; // console.log('UPD',pools,allPools);

      for (let i = 0; i < allPools.length; i++) {
        if (allPools[i].vaultData.tokenContract.address !== '0x0000000000000000000000000000000000000000') {
          /*     console.log(allPools[i].vaultData.tokenContract,i)
                  const totalSupply = ZoomLibraryInstance.addCall(
                    allPools[i].vaultData.tokenContract,
                    ["totalSupply",[]],
                    "totalSupply() returns (uint256)"
                );
                calls.push(totalSupply); */
          const vaultBalance = ZoomLibraryInstance.addCall(allPools[i].vaultData.tokenContract, ['balanceOf', [allPools[i].vaultData.vaultAddress]], 'balanceOf(address) returns (uint256)');
          calls.push(vaultBalance);
          hasContract.push(allPools[i].id);
        }
      }

      console.log('STUFF', calls, hasContract);

      if (calls.length > 0) {
        const ZoomQueryBinary = ZoomLibraryInstance.getZoomCall(); // console.log('zqb',ZoomQueryBinary);
        //console.log("======== ZOOM CALL START ============" );
        //console.time('zoomCall');

        const combinedResult = await zoom2.combine(ZoomQueryBinary); //console.timeEnd('zoomCall');
        //console.log("======== ZOOM CALL END ==============" );

        ZoomLibraryInstance.resultsToCache(combinedResult, ZoomQueryBinary);
        let ap = allPools;
        let hasContractIdx = 0;

        for (let i = 0; i < calls.length; i++) {
          //  let ts = ZoomLibraryInstance.decodeCall(calls[i]).toString();
          let ab = ZoomLibraryInstance.decodeCall(calls[i]).toString();
          let poolIdx = hasContract[hasContractIdx];
          ap[poolIdx].vaultData = { ...ap[poolIdx].vaultData,

            /* totalSupply:ts, */
            available: Number(ab)
          };

          if (Number.parseInt(ab) === 0) {
            ap[poolIdx].order += 100;
          }

          hasContractIdx++;
        }
        /* 
            let op = [...ap];
              op.sort((a,b)=>{
                if(a.order>b.order){
                    return 1
                }else{
                    return -1;
                }
            });
        */


        setPools(getFiltered());
        setInitDone(true);
        console.log('AP upd', ap);
      }
    }
  };

  const getFiltered = () => {
    let result = [];

    if (selectedFilter === 'SOLD_OUT') {
      result = allPools.filter(pool => pool.vaultData.available === 0);
    } else if (selectedFilter === 'ACTIVE') {
      result = allPools.filter(pool => pool.vaultData.available > 0);
    } else {
      result = [...allPools];
    }

    return result;
  };

  useEffect(() => {
    setPools(getFiltered());
  }, [selectedFilter]);

  const connectOrExchange = poolId => {
    if (poolId !== null) {
      setSelectedPoolId(poolId);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, selectedPoolId === null ? /*#__PURE__*/React.createElement("div", {
    className: "dust-pool-root"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dust-pool-textbox"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pool-subtitle",
    style: {
      marginBlockEnd: '1em'
    }
  }, "Dust pools"), /*#__PURE__*/React.createElement("div", {
    className: "tab-choose"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${selectedFilter === 'ALL' ? 'active-tab' : ''}`,
    onClick: () => setSelectedFilter('ALL')
  }, "All"), /*#__PURE__*/React.createElement("div", {
    className: `${selectedFilter === 'ACTIVE' ? 'active-tab' : ''}`,
    onClick: () => setSelectedFilter('ACTIVE')
  }, "Active"), /*#__PURE__*/React.createElement("div", {
    className: `${selectedFilter === 'SOLD_OUT' ? 'active-tab' : ''}`,
    onClick: () => setSelectedFilter('SOLD_OUT')
  }, "Sold out")), /*#__PURE__*/React.createElement("p", null, "You can exchange your Dust for some awesome items including Cryptopunks and other valuable NFTs.")), /*#__PURE__*/React.createElement("div", {
    className: "container  mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      rowGap: '25px'
    }
  }, pools.map((card, idx) => {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/React.createElement(DustPoolCard, {
      card: card,
      handleClick: connectOrExchange
    }));
  })), /*#__PURE__*/React.createElement(TopSectionDividers, null), /*#__PURE__*/React.createElement("div", {
    className: "dust-pool-textbox"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pool-subtitle"
  }, "Dust utility token"), /*#__PURE__*/React.createElement("p", null, "$DUST tokens are used throughout the Galaxis ecosystem to reserve and pay for upcoming mints, return value to NFT holders, and exchange for NFTs via the Galaxis Vaults.", ' '), /*#__PURE__*/React.createElement("button", {
    className: "dust-pool-btn",
    style: {
      marginTop: '20px'
    },
    onClick: () => window.open('https://blog.ether.cards/dust-utility-token-model-distribution/')
  }, "More")), /*#__PURE__*/React.createElement(TopSectionDividers, null), /*#__PURE__*/React.createElement("div", {
    className: "dust-pool-textbox pb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pool-subtitle"
  }, "Upcoming Dust Pools"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, UPCOMING_POOLS.map((card, idx) => {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "col-12 col-lg-3"
    }, /*#__PURE__*/React.createElement(UpcomingCard, {
      imgSrc: card.imgSrc,
      name: card.name,
      price: card.price
    }));
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dust-pool-root"
  }, /*#__PURE__*/React.createElement(ProjectSubpage, {
    pool: allPools[selectedPoolId],
    address: address,
    dust: dustContract,
    d4p: dust4PunksContract,
    ethersProvider: ethersProvider,
    chainId: chainId,
    handleConnect: handleConnect,
    handleBack: () => setSelectedPoolId(null)
  }))));
};

export { DustPools, GalaxisCard };

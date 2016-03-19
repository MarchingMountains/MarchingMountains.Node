(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderActions = function HeaderActions() {
  _classCallCheck(this, HeaderActions);
};

exports.default = _alt2.default.createActions(HeaderActions);

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnnualReports = function (_React$Component) {
    _inherits(AnnualReports, _React$Component);

    function AnnualReports() {
        _classCallCheck(this, AnnualReports);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AnnualReports).apply(this, arguments));
    }

    _createClass(AnnualReports, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "Marching Mountains Annual Reports and Needs Assessment"
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "2014"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/reports/2014%20Annual%20Report.pdf" },
                            "2014 Annual Report (pdf)"
                        )
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "2013"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/reports/2013%20Annual%20Report.pdf" },
                            "2013 Annual Report (pdf)"
                        )
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "2012"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/reports/2012%20Annual%20Report.pdf" },
                            "2012 Annual Report (pdf)"
                        )
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "2011"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/reports/2011%20Annual%20Report.pdf" },
                            "2011 Annual Report (pdf)"
                        )
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "2010"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/reports/2010%20Annual%20Report.pdf" },
                            "2010 Annual Report (pdf)"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/reports/MarchingMountainsNeeds%20AssessmentReport2010.pdf" },
                            "2010 Marching Mountains Needs Assessment Report (pdf)"
                        )
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "2009"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/reports/AnnualReport2009.pdf" },
                            "2009 Annual Report (pdf)"
                        )
                    )
                )
            );
        }
    }]);

    return AnnualReports;
}(_react2.default.Component);

module.exports = AnnualReports;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_reactRouter.RouteHandler, null),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

module.exports = App;

},{"./footer":9,"./header":10,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BandDirectors = function (_React$Component) {
	_inherits(BandDirectors, _React$Component);

	function BandDirectors() {
		_classCallCheck(this, BandDirectors);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BandDirectors).apply(this, arguments));
	}

	_createClass(BandDirectors, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					"Welcome Band Directors"
				),
				_react2.default.createElement(
					"p",
					null,
					"If you are a band director of a public school band program in Appalachia or Minnesota, please ",
					_react2.default.createElement(
						"a",
						{ href: "mailto:donate@marchingmountains.org" },
						"contact me, Ian Felton, founder, at donate@marchingmountains.org"
					),
					", to be a part of Marching Mountains. We have provided over 500 years of band to students who would otherwise not be able to participate by donating instruments in good working condition to band programs in need."
				)
			);
		}
	}]);

	return BandDirectors;
}(_react2.default.Component);

module.exports = BandDirectors;

},{"react":"react"}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
	_inherits(Contact, _React$Component);

	function Contact() {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Contact).apply(this, arguments));
	}

	_createClass(Contact, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					"Contact"
				),
				_react2.default.createElement(
					"h2",
					null,
					"Organization Headquarters"
				),
				_react2.default.createElement(
					"p",
					null,
					"Marching Mountains",
					_react2.default.createElement("br", null),
					"700 Douglas Ave. #1007",
					_react2.default.createElement("br", null),
					"Minneapolis, MN 55403"
				),
				_react2.default.createElement(
					"h2",
					null,
					"Donations"
				),
				_react2.default.createElement(
					"p",
					null,
					"Please ship ",
					_react2.default.createElement(
						"a",
						{ href: "/donate-a-musical-instrument", title: "donate a musical instrument" },
						"musical instrument donations"
					),
					" to:",
					_react2.default.createElement("br", null),
					"Marching Mountains",
					_react2.default.createElement("br", null),
					"1449 Andmore Ave.",
					_react2.default.createElement("br", null),
					"Morgantown, WV 26505"
				),
				_react2.default.createElement(
					"h2",
					null,
					"Executive Director"
				),
				_react2.default.createElement(
					"p",
					null,
					"Ian Felton",
					_react2.default.createElement("br", null),
					"Phone: 612.232.9677",
					_react2.default.createElement("br", null),
					"Email: ",
					_react2.default.createElement(
						"a",
						{ href: "mailto:donate@marchingmountains.org", title: "Email Marching Mountains" },
						"donate@marchingmountains.org"
					)
				)
			);
		}
	}]);

	return Contact;
}(_react2.default.Component);

module.exports = Contact;

},{"react":"react"}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DonateInstrument = function (_React$Component) {
    _inherits(DonateInstrument, _React$Component);

    function DonateInstrument() {
        _classCallCheck(this, DonateInstrument);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DonateInstrument).apply(this, arguments));
    }

    _createClass(DonateInstrument, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement("img", { src: "/img/bubblesD.png", alt: "Strong - Courageous - Able" }),
                _react2.default.createElement(
                    "div",
                    { className: "batonContainer" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "Donating a new or used musical instrument can change the life of a child in Appalachia. The Marching Mountains network needs musical instruments in good working condition. Watch a ",
                        _react2.default.createElement(
                            "a",
                            { href: "/video", title: "Appalachia documentary" },
                            "video of musical instrument donations going to band programs in Appalachia"
                        ),
                        " to learn more. You can also ",
                        _react2.default.createElement(
                            "a",
                            { href: "/instrument-donation-success-stories" },
                            "read success stories from donating musical instruments."
                        )
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Donating an instrument is easy and tax deductible"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Contact us at ",
                        _react2.default.createElement(
                            "a",
                            { href: "mailto:donate@marchingmountains.org", title: "Donate at marching mountains dot org" },
                            "donate@marchingmountains.org"
                        ),
                        "or call 612-232-9677 and we will guide you through donating your musical instrument to a worthy cause."
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Check out the ",
                        _react2.default.createElement(
                            "a",
                            { href: "/faq" },
                            "FAQ!"
                        ),
                        " It has many answers to ",
                        _react2.default.createElement(
                            "a",
                            { href: "/faq" },
                            "questions about donating musical instruments"
                        ),
                        "."
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Examples of musical instruments we are looking for"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Marching Mountains mainly seeks instruments for marching band and concert band."
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "fieldset",
                            null,
                            _react2.default.createElement(
                                "legend",
                                null,
                                "Instruments"
                            ),
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Trumpets"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Saxophones"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Trombones"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Flutes"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Clarinets"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Snare Drums"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "French Horns"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Tubas"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Percussion"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "This list isn't exclusive so please contact us if you have any question about the instrument you want to donate."
                    ),
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Drop-Off Information"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "In the Twin Cities, please drop-off instruments in good-working condition:"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "http://www.mmimports.com/" },
                            "Midwest Musical Imports"
                        ),
                        _react2.default.createElement("br", null),
                        "2021 E. Hennepin Ave. Suite 374",
                        _react2.default.createElement("br", null),
                        "Minneapolis, MN 55413"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Local: (612) 331-4717",
                        _react2.default.createElement("br", null),
                        "Toll Free: (800) 926-5587",
                        _react2.default.createElement("br", null),
                        "Fax: (612) 331-4718"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Hours: 9am-5pm Monday-Friday – 10am-2pm Saturday"
                    ),
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Pickup Information"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Through our network, we can pickup instruments in several areas. If your area isn't listed, please contact us about shipping it to our nearest location to you."
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "fieldset",
                            null,
                            _react2.default.createElement(
                                "legend",
                                null,
                                "Locations"
                            ),
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Minneapolis, Minnesota"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "St. Paul, Minnesota"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Richmond, Virginia"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Morgantown, West Virginia"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Shipping Information"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Please ship instruments, musical supplies and donations to:",
                        _react2.default.createElement("br", null),
                        "Marching Mountains",
                        _react2.default.createElement("br", null),
                        "1449 Andmore Ave.",
                        _react2.default.createElement("br", null),
                        "Morgantown, WV 26505"
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Pianos"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "http://keys44kids.com" },
                            _react2.default.createElement("img", { src: "/img/keys4kids.gif", title: "Keys 4/4 Kids", alt: "Keys 4/4 Kids" })
                        ),
                        "Unfortunately, we cannot accept piano donations. If you are in the Twin Cities of Minneapolis and St. Paul, Minnesota or Chicago, Illinois, please visit ",
                        _react2.default.createElement(
                            "a",
                            { href: "http://keys44kids.com" },
                            "Keys 4/4 Kids"
                        ),
                        "."
                    )
                )
            );
        }
    }]);

    return DonateInstrument;
}(_react2.default.Component);

module.exports = DonateInstrument;

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FAQ = function (_React$Component) {
    _inherits(FAQ, _React$Component);

    function FAQ() {
        _classCallCheck(this, FAQ);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FAQ).apply(this, arguments));
    }

    _createClass(FAQ, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "FAQ"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Q:"
                        ),
                        _react2.default.createElement(
                            "i",
                            null,
                            "In sending a donation, is there a specific school we support or is it a general donation? "
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            "A:"
                        ),
                        "Currently, there isn't a way to select a specific school to donate to. However, this may be an option in the future. "
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Q:"
                        ),
                        _react2.default.createElement(
                            "i",
                            null,
                            "Is it possible to ",
                            _react2.default.createElement(
                                "a",
                                { href: "/donate-a-musical-instrument", title: "donate a musical instrument" },
                                "donate musical instruments"
                            ),
                            " as well as funds? "
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            "A:"
                        ),
                        "Yes! We are mainly looking for ",
                        _react2.default.createElement(
                            "a",
                            { href: "/donate-a-musical-instrument", title: "donate a musical instrument" },
                            "musical instrument donations"
                        ),
                        " as well as donations of music-related supplies and resources. Monetary donations are also accepted of course with the goal of getting the musical instruments and supplies shipped to the hands of children in distressed schools in Appalachia.",
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            _react2.default.createElement(
                                "i",
                                null,
                                "Note: Musical instrument donations should be in good working condition. As much as the thought counts, already struggling band programs will not have the resources to invest into significant repairs for unusable donations. We appreciate your understanding."
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Q:"
                        ),
                        _react2.default.createElement(
                            "i",
                            null,
                            "How can I tell if a musical instrument is in good working condition?"
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            "A:"
                        ),
                        "If all of the notes can be played, it's in good working condition. Dings and dents are acceptable as long as they don't interfere with the playability of the instrument."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Q:"
                        ),
                        _react2.default.createElement(
                            "i",
                            null,
                            "Are musical instruments tax deductible?"
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            "A:"
                        ),
                        "Yes. As a 501(c)(3) organization, any musical instrument donations made to us can be deducted from your  federal taxes."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Q:"
                        ),
                        _react2.default.createElement(
                            "i",
                            null,
                            "How do I determine how much my musical instrument donation is worth?"
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            "A"
                        ),
                        "We do not appraise the value of musical instrument donations. The donor must value the musical instrument donation. Please visit ",
                        _react2.default.createElement(
                            "a",
                            { href: "http://www.irs.gov/publications/p526/ar02.html" },
                            "this page on the IRS website for exact details about deducting your musical instrument donation"
                        ),
                        "."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Q:"
                        ),
                        _react2.default.createElement(
                            "i",
                            null,
                            "How do I know what happened to my musical instrument donation after your organization receives it?"
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            "A:"
                        ),
                        "We make it a point to write to donors after their musical instrument donation has found a home, usually with feedback from the band director who received it."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "b",
                            null,
                            "Q:"
                        ),
                        _react2.default.createElement(
                            "i",
                            null,
                            "Is it possible to send a check directly? "
                        ),
                        _react2.default.createElement("br", null),
                        _react2.default.createElement(
                            "b",
                            null,
                            "A:"
                        ),
                        "Checks are accepted and can be addressed and written out to:",
                        _react2.default.createElement("br", null),
                        "Marching Mountains",
                        _react2.default.createElement("br", null),
                        "700 Douglas Ave. #1007",
                        _react2.default.createElement("br", null),
                        "Minneapolis, MN 55403",
                        _react2.default.createElement("br", null)
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Please feel free to raise any other questions you have or submit any feedback to us at ",
                    _react2.default.createElement(
                        "a",
                        { href: "mailto:donate@marchingmountains.org" },
                        "donate@marchingmountains.org"
                    ),
                    "."
                )
            );
        }
    }]);

    return FAQ;
}(_react2.default.Component);

module.exports = FAQ;

},{"react":"react"}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Press'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/news/2013/Donating-Musical-Instruments-Changes-Childrens-Lives' },
                  'Donating Musical Instruments Changes Children’s Lives'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://dotnetrocks.com/default.aspx?showNum=804', target: '_blank' },
                  'Interview on Dot Net Rocks | How Marching Mountains Uses Technology'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://technologyandfriends.com/SubText/archive/2012/10/22/tf235.aspx', target: '_blank' },
                  'Interview on Technology and Friends | How Marching Mountains Uses Technology'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/news/2010/donated-instrument-distribution' },
                  'School Kids in Distressed Appalachian Counties Receive Donated Band Instruments'
                ),
                '                    '
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.huffingtonpost.com/2010/09/02/post_509_n_704029.html', target: '_blank' },
                  'Marching Mountains on HuffingtonPost'
                ),
                '  '
              )
            )
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'text-center' },
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'em',
              null,
              'Marching Mountains is a 501(c)(3), tax-deductible organization.'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

module.exports = Footer;

},{"react":"react"}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _headerStore = require('../stores/header-store');

var _headerStore2 = _interopRequireDefault(_headerStore);

var _headerActions = require('../actions/header-actions');

var _headerActions2 = _interopRequireDefault(_headerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

    _this.state = _headerStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _headerStore2.default.listen(this.onChange);
      _headerActions2.default.isLoggedIn();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _headerStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'a',
              { href: '/', title: 'home' },
              _react2.default.createElement('img', { src: '/img/MarchingMountainsLogo.png', alt: 'Marching Mountains Logo' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-8' },
            _react2.default.createElement(
              'nav',
              null,
              _react2.default.createElement(
                'ul',
                { className: 'nav nav-pills pull-right' },
                _react2.default.createElement(
                  'li',
                  { role: 'presentation' },
                  _react2.default.createElement(
                    'a',
                    { href: '/', title: 'home' },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { role: 'presentation' },
                  _react2.default.createElement(
                    'a',
                    { href: '/project', title: 'about' },
                    'About'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { role: 'presentation' },
                  _react2.default.createElement(
                    'a',
                    { href: '/faq', title: 'Frequently asked questions' },
                    'FAQ'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { role: 'presentation' },
                  _react2.default.createElement(
                    'a',
                    { href: '/donate-a-musical-instrument', title: 'Donate a musical instrument' },
                    'Donate a musical instrument'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { role: 'presentation' },
                  _react2.default.createElement(
                    'a',
                    { href: '/contact', title: 'Contact Marching Mountains' },
                    'Contact'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { role: 'presentation' },
                  _react2.default.createElement(
                    'a',
                    { href: '/band-directors', title: 'For Band Directors' },
                    'Band Directors'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { role: 'presentation' },
                  _react2.default.createElement(
                    'a',
                    { href: 'https://givemn.org/organization/Marching-Mountains', target: '_blank' },
                    _react2.default.createElement('img', { src: '/img/donate.png', alt: 'Help Marching Mountains - Get Kids Musical Instruments | GiveMN' })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

module.exports = Header;

},{"../actions/header-actions":1,"../stores/header-store":26,"react":"react"}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "jumbotron" },
          _react2.default.createElement(
            "hrgroup",
            null,
            _react2.default.createElement(
              "h1",
              null,
              "Helping band programs in Appalachia and Minnesota"
            )
          ),
          _react2.default.createElement(
            "p",
            { className: "lead" },
            "Marching Mountains' goal is to create a network to supply public school band programs in distressed areas of Appalachia and Minnesota with donated new and used musical instruments."
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "a",
              { className: "btn btn-lg btn-success", title: "Donate a musical instrument", href: "/donate-a-musical-instrument", role: "button" },
              "Donate a musical instrument"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row marketing" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-6" },
            _react2.default.createElement(
              "h2",
              null,
              "Donate a Musical Instrument"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-heart", "aria-hidden": "true" }),
              " Do you have an instrument at home not being used? Learn how to ",
              _react2.default.createElement(
                "a",
                { href: "/donate-a-musical-instrument" },
                "donate a musical instrument"
              ),
              " and change a child's life. (Marching Mountains is a 501(c)(3), tax-deductible organization.)"
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Donate Money"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-heart", "aria-hidden": "true" }),
              " Each instrument costs $25 - $50 to ship to schools. Please ",
              _react2.default.createElement(
                "a",
                { href: "https://givemn.org/organization/Marching-Mountains" },
                "donate money"
              ),
              " to help. (Marching Mountains is a 501(c)(3), tax-deductible organization.)"
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Success Stories"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-thumbs-up", "aria-hidden": "true" }),
              " ",
              _react2.default.createElement(
                "a",
                { href: "/instrument-donation-success-stories" },
                "Read success stories about people donating musical instruments."
              )
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Vision"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-eye-open", "aria-hidden": "true" }),
              " ",
              _react2.default.createElement(
                "a",
                { href: "/project" },
                "Learn more about Marching Mountains' vison"
              ),
              " and mission."
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-lg-6" },
            _react2.default.createElement(
              "h2",
              null,
              "Band Directors"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-user", "aria-hidden": "true" }),
              " We have provided over 500 years of band to students. If you are a band director of a public school band program in Appalachia or Minnesota, ",
              _react2.default.createElement(
                "a",
                { href: "/band-directors" },
                "be a part of Marching Mountains."
              )
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Watch Videos"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-facetime-video", "aria-hidden": "true" }),
              " Learn more about what Marching Mountains does with instrument donations by watching ",
              _react2.default.createElement(
                "a",
                { href: "video" },
                "videos"
              )
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Volunteer"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-heart", "aria-hidden": "true" }),
              " Do you want to help? Put your heart into something meaningful by ",
              _react2.default.createElement(
                "a",
                { href: "/volunteer" },
                "volunteering"
              )
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Our Annual Reports"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement("span", { className: "glyphicon glyphicon-file", "aria-hidden": "true" }),
              " Each year we release an ",
              _react2.default.createElement(
                "a",
                { href: "/annual-reports" },
                "annual report"
              ),
              " to update those interested in the project."
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "content-wrapper" },
          _react2.default.createElement(
            "h2",
            null,
            "Letter from a Band Director About the Effects of Donating Musical Instruments to Marching Mountains"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("img", { src: "/img/quote.gif" }),
            "Dear Marching Mountains,"
          ),
          _react2.default.createElement(
            "p",
            null,
            "I just wanted you to know that I'm the band director in West Virginia (of the student who received the instrument from Marching Mountains). I had never heard of your organization until this morning. (The student) started band with her elementary director and so I didn't know what she was talking about when she said she had received an instrument \"from a place that gives kids instruments\"."
          ),
          _react2.default.createElement(
            "p",
            null,
            "When (the student) said her trumpet was coming in the mail to me, I assumed it was the same program. When I read your letter I sat at my desk and cried for a good half hour."
          ),
          _react2.default.createElement(
            "p",
            null,
            "I had no idea such a thing even existed. My school is in a fairly poor area as you can imagine. It's not the worst, but it's not the best either. I grew up here. I actually didn't do band all through school because I knew my parents would never be able to afford an instrument. Instead I took piano lessons from a lady a town over who gave lessons for $2 an hour. I ended up falling in love with music and went to college on a full ride scholarship."
          ),
          _react2.default.createElement(
            "p",
            null,
            "When I got this band job I had no idea what I was going to do with it. I walked into a mouse infested outbuilding that was my classroom with instruments that a former principal had bought at an army surplus auction trying to help the previous band director out. He literally loaded up a dump truck with every instrument he could buy and dumped them out in front of her classroom for her to sort."
          ),
          _react2.default.createElement(
            "p",
            null,
            "When I got the job, there were still cases that hadn't been opened because there were no keys."
          ),
          _react2.default.createElement(
            "p",
            null,
            "Long story short, I have a lot of instruments, but most of them are in need of major overhauls or were so smashed and broken that I had to throw them out or use them for parts. I had one poor mellophone that was nearly smashed completely flat..."
          ),
          _react2.default.createElement(
            "p",
            null,
            "But! My band program continues to grow despite all this. We did finally get a new school this past year. My classroom is wonderful and I was so glad to finally get a clean space that had... well... SPACE."
          ),
          _react2.default.createElement(
            "p",
            null,
            "This year my 7th and 8th grade band is up to 47 and my beginning 6th grade band has 26. I have over half of our middle school students as band members."
          ),
          _react2.default.createElement(
            "p",
            null,
            "I was doing instrument rentals this week and I kept opening cases and seeing instruments that are going to need to go back to the shop or that I forgot I was keeping for parts. So the last two days I've been trying to figure out what to do about getting some new instruments. Last year I literally had Bandland piece a clarinet together for me out of the parts of 3 instruments so one of my kids could have a working instrument."
          ),
          _react2.default.createElement(
            "p",
            null,
            "When I got your letter this morning, it was like hope had dawned. lol. I hate to sound so dramatic, but you have no idea how much I've prayed over the last two days for God to show me how to manage this. (Because our 20 something year old uniforms are in desperate need of replacing as well...)"
          ),
          _react2.default.createElement(
            "p",
            null,
            "I know it might be a slow process to get everything I would LIKE to have... but I was so happy to see that there's a way to do it without putting my kids and their families under more financial strain with fundraisers."
          ),
          _react2.default.createElement(
            "p",
            null,
            "I just wanted to thank you for the organization and let you know that you've made two little girls and one band director extremely happy today. :) (The student) has been asking every day if her instrument had come. she came in first thing this morning to see if it was here and today it was. :)"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Thank you very much. I hope I haven't taken up too much of your time. I just wanted to share this with you."
          ),
          _react2.default.createElement(
            "p",
            null,
            "Sincerely,"
          ),
          _react2.default.createElement(
            "p",
            null,
            "(Band Director of a middle school in West Virginia)",
            _react2.default.createElement("img", { src: "/img/unquote.gif" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "content-wrapper" },
          _react2.default.createElement(
            "h2",
            null,
            "Donating Musical Instruments Changes Children’s Lives for the Better"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("img", { src: "/img/quote.gif" }),
            "Recently, I was at the airport getting ready to leave town for a while to take a vacation. While at the gate, I checked my voice mail one last time before being cut off from technology for several days. I was surprised to get a message from a woman in Connecticut, who wanted to donate a flute to the organization. I only had a few minutes before boarding, so I quickly returned her phone call, leaving a message in a bit of a panic; I wanted to give her enough information but felt rushed as I would be boarding the plane at any moment. "
          ),
          _react2.default.createElement(
            "p",
            null,
            "After I hung up, I resigned myself to the fact that I had lost that donation. In my mind, I must have sounded anxious and scattered, not really the type of message I typically leave for someone who is generously handing over an instrument to a stranger, an instrument that was likely prized by them or someone close to them."
          ),
          _react2.default.createElement(
            "p",
            null,
            "When I returned from my vacation, I spoke with my mother, who informed me that a flute had arrived from Connecticut. My mother lives in Appalachia, and where she lives is much closer to the schools we work with. Donors who are able to may ship their donations to my mother’s house in West Virginia so that they’re much closer to the schools. This saves the organization precious funds when paying for shipping instruments to many schools across Appalachia."
          ),
          _react2.default.createElement(
            "p",
            null,
            "I was surprised that my hurried voice mail had not put the donor off and felt very happy to have received the flute. Later on that week, I received a text message from my step-mother, who said she knew someone who knew someone who had a child that wanted to play the flute but who didn’t have the money to rent or buy one for her daughter."
          ),
          _react2.default.createElement(
            "p",
            null,
            "This was a new situation for me. Typically, I work directly with band programs, not with parents, because I want the instruments to stay with a school and not possibly end up in someone’s closet, unused. I called the mother and explained this to her, letting her know I wanted to find a solution. I suggested that she give me the name of her daughter’s school and band director, adding that I would ship the flute to the band director with a letter that explained that the flute was for the woman’s daughter, Isabel, to use. As long as she was in band, the flute was hers to use. This means that even when she leaves elementary school and continues on to middle school, if she stays in band, she can take the flute with her. If she quits band, the flute stays with the band program so that another child can use it. The mother agreed. "
          ),
          _react2.default.createElement(
            "p",
            null,
            "I was at work when the conversation took place. After we hung up, I stopped and thought about what just took place. I realized what a special kind of person it is that calls someone to ask for help when they’re in a tough position. I thought about what this mother was doing by putting aside any feelings that would stop her from helping her daughter get a flute and calling me, not just once, but twice within the hour. She really wanted to get a hold of me! When I realized what I was experiencing in this chain of actions -- the generosity of the donor, the humility and determination of the mother, the kindness of the others involved in making the connections -- I teared-up in my cube and had to take a deep breath. "
          ),
          _react2.default.createElement(
            "p",
            null,
            "I wrote the letter, emailing it to my mother for her to print and package with the flute. She shipped it off that Monday. Now the flute is in the hands of Isabel, who gets to experience playing music with her friends, hopefully for many, many years."
          ),
          _react2.default.createElement(
            "p",
            null,
            "One person who never met me wanted to donate a musical instrument -- a flute -- to Marching Mountains. With faith and hope, she made a simple, generous gesture. That flute is now the difference between Isabel becoming part of something meaningful to her instead of feeling like she’s missing out and not deserving enough to be a musician. "
          ),
          _react2.default.createElement(
            "p",
            null,
            "We’ll never know the real effects of Isabel being in band instead of being at home or somewhere else, but we do know that playing the flute is incredibly important to Isabel and her mother. Because someone donated a musical instrument, one little girl’s wish came true. It might not be much, but another little girl who received a flute from a kind donor once said, “This is better than Christmas.” For me, that makes it worth the effort.",
            _react2.default.createElement("img", { src: "/img/unquote.gif" })
          ),
          _react2.default.createElement(
            "p",
            null,
            "Ian Felton",
            _react2.default.createElement("br", null),
            "Founder, Marching Mountains"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "i",
              null,
              "Ian Felton is the founder of Marching Mountains, a non-profit based in Minneapolis. The goal of Marching Mountains is to create a network to supply public school band programs in distressed counties in Appalachia with donated new and used musical instruments."
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

module.exports = Home;

},{"react":"react"}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

    _this.state = {
      username: '',
      password: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'login',
    value: function login(e) {
      e.preventDefault();

      Auth.login(this.state.username.this.state.password).catch(function (err) {
        console.log("Error logging in", err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'h1',
          null,
          'Log-in'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(
            'form',
            { className: 'form-horizontal', action: '/login', method: 'post' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'username', className: 'col-sm-2 control-label' },
                'Email'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-10' },
                _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'username', placeholder: 'Email', valueLink: this.linkState('username') })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'password', className: 'col-sm-2 control-label' },
                'Password'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-10' },
                _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', placeholder: 'Password', valueLink: this.linkState('password') })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-offset-2 col-sm-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'checkbox' },
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', { type: 'checkbox' }),
                    ' Remember me'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-offset-2 col-sm-10' },
                _react2.default.createElement(
                  'button',
                  { type: 'submit', className: 'btn btn-default', onClick: this.login.bind(this) },
                  'Sign in'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

module.exports = Login;

},{"react":"react"}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var N20101 = function (_React$Component) {
    _inherits(N20101, _React$Component);

    function N20101() {
        _classCallCheck(this, N20101);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(N20101).apply(this, arguments));
    }

    _createClass(N20101, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "School Kids in Distressed Appalachian Counties Receive Donated Band Instruments"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement("img", { src: "/img/giving-donated-instruments.png", alt: "Ian Felton of Marching Mountains donating a trumpet", align: "left" }),
                    _react2.default.createElement(
                        "i",
                        null,
                        "Minneapolis, Minnesota - September 1, 2010"
                    ),
                    " - Marching Mountains recently distributed new and used instruments to seven schools in distressed regions of Appalachia."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "“There’s a great need in our area for instruments and Marching Mountains is fulfilling that need,” said Jeanette Oldaker, Band Instructor for Harts Middle School in Harts, WV. Jeanette Oldaker is one of many band directors that received an instrument from Marching Mountains in August."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "As part of the instrument distribution, Ian Felton, Executive Director of Marching Mountains, visited several schools in person and created a documentary to introduce donors to the areas they are helping."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "“We’ve had donors from all over the country: Minneapolis, Seattle, Cleveland and Pittsburgh. We want to show them that the instruments they provide make a difference to the programs that receive them,” says Ian Felton."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "“The video was a good testimony to the need for instruments in that area of our country. Thanks for all you are doing to help those kids and their school band programs!” wrote an instrument donor from the Twin Cities."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Other schools that received instruments were: Sheldon Clark High School in Inez, KY, Calhoun County Middle/High School in Mt. Zion, WV, Burchfield School in Oneida, TN, Winfield School in Winfield, TN, Fairview School in Huntsville, TN and Hale County High School in Moundville, AL."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Earlier in the year, Marching Mountains sent letters to band directors throughout distressed regions of Appalachia. Band Directors that took part in the project were asked to submit a list of most needed instruments. In August, donated instruments were matched with directors’ lists of needs."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Marching Mountains can be found on the web at ",
                    _react2.default.createElement(
                        "a",
                        { href: "http://marchingmountains.org",
                            title: "Marching Mountains" },
                        "http://marchingmountains.org"
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Those who want to help these band programs are encouraged to ",
                    _react2.default.createElement(
                        "a",
                        { href: "http://marchingmountains.org/donate-a-musical-instrument",
                            title: "Donate a musical instrument" },
                        "donate new or used musical instruments"
                    ),
                    "."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "The video can be seen on YouTube at ",
                    _react2.default.createElement(
                        "a",
                        { href: "http://www.youtube.com/watch?v=HeOUh2NRQdQ",
                            title: "You tube clip of Marchinng Mountains" },
                        "http://www.youtube.com/watch?v=HeOUh2NRQdQ"
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "###"
                )
            );
        }
    }]);

    return N20101;
}(_react2.default.Component);

module.exports = N20101;

},{"react":"react"}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var N20131 = function (_React$Component) {
    _inherits(N20131, _React$Component);

    function N20131() {
        _classCallCheck(this, N20131);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(N20131).apply(this, arguments));
    }

    _createClass(N20131, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "Donating Musical Instruments Changes Children’s Lives for the Better"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "i",
                        null,
                        "Ian Felton is the founder of Marching Mountains, a non-profit based in Minneapolis. The goal of Marching Mountains is to create a network to supply public school band programs in distressed counties in Appalachia with donated new and used musical instruments."
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Recently, I was at the airport getting ready to leave town for a while to take a vacation. While at the gate, I checked my voice mail one last time before being cut off from technology for several days. I was surprised to get a message from a woman in Connecticut, who wanted to donate a flute to the organization. I only had a few minutes before boarding, so I quickly returned her phone call, leaving a message in a bit of a panic; I wanted to give her enough information but felt rushed as I would be boarding the plane at any moment. "
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "After I hung up, I resigned myself to the fact that I had lost that donation. In my mind, I must have sounded anxious and scattered, not really the type of message I typically leave for someone who is generously handing over an instrument to a stranger, an instrument that was likely prized by them or someone close to them."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "When I returned from my vacation, I spoke with my mother, who informed me that a flute had arrived from Connecticut. My mother lives in Appalachia, and where she lives is much closer to the schools we work with. Donors who are able to may ship their donations to my mother’s house in West Virginia so that they’re much closer to the schools. This saves the organization precious funds when paying for shipping instruments to many schools across Appalachia."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "I was surprised that my hurried voice mail had not put the donor off and felt very happy to have received the flute. Later on that week, I received a text message from my step-mother, who said she knew someone who knew someone who had a child that wanted to play the flute but who didn’t have the money to rent or buy one for her daughter."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "This was a new situation for me. Typically, I work directly with band programs, not with parents, because I want the instruments to stay with a school and not possibly end up in someone’s closet, unused. I called the mother and explained this to her, letting her know I wanted to find a solution. I suggested that she give me the name of her daughter’s school and band director, adding that I would ship the flute to the band director with a letter that explained that the flute was for the woman’s daughter, Isabel, to use. As long as she was in band, the flute was hers to use. This means that even when she leaves elementary school and continues on to middle school, if she stays in band, she can take the flute with her. If she quits band, the flute stays with the band program so that another child can use it. The mother agreed. "
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "I was at work when the conversation took place. After we hung up, I stopped and thought about what just took place. I realized what a special kind of person it is that calls someone to ask for help when they’re in a tough position. I thought about what this mother was doing by putting aside any feelings that would stop her from helping her daughter get a flute and calling me, not just once, but twice within the hour. She really wanted to get a hold of me! When I realized what I was experiencing in this chain of actions -- the generosity of the donor, the humility and determination of the mother, the kindness of the others involved in making the connections -- I teared-up in my cube and had to take a deep breath. "
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "I wrote the letter, emailing it to my mother for her to print and package with the flute. She shipped it off that Monday. Now the flute is in the hands of Isabel, who gets to experience playing music with her friends, hopefully for many, many years."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "One person who never met me wanted to donate a musical instrument -- a flute -- to Marching Mountains. With faith and hope, she made a simple, generous gesture. That flute is now the difference between Isabel becoming part of something meaningful to her instead of feeling like she’s missing out and not deserving enough to be a musician. "
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "We’ll never know the real effects of Isabel being in band instead of being at home or somewhere else, but we do know that playing the flute is incredibly important to Isabel and her mother. Because someone donated a musical instrument, one little girl’s wish came true. It might not be much, but another little girl who received a flute from a kind donor once said, “This is better than Christmas.” For me, that makes it worth the effort."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Ian Felton",
                    _react2.default.createElement("br", null),
                    "Founder, Marching Mountains"
                )
            );
        }
    }]);

    return N20131;
}(_react2.default.Component);

module.exports = N20131;

},{"react":"react"}],15:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MMAreas = function (_React$Component) {
    _inherits(MMAreas, _React$Component);

    function MMAreas() {
        _classCallCheck(this, MMAreas);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MMAreas).apply(this, arguments));
    }

    _createClass(MMAreas, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "Areas Marching Mountains Helps"
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Distressed Areas of Appalachia"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "The main focus of the network is distressed areas of Appalachia. If the strongest supporters and activists in Marching Mountains are within Appalachia, there is no doubt that the network can improve band programs in public schools in the distressed areas of Appalachia."
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Appalachia as a whole"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Appalachians know Appalachians. They understand each other best. Many areas of Appalachia aren't impoverished and are doing quite well economically."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "These parts of Appalachia can be the number one source of supporters for the Marching Mountains network. They can help their neighbors and help themselves by growing from the experiences had within the Marching Mountains network."
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Other Areas"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "However, the bigger picture of Marching Mountains includes people from all over the country. The network includes people from outside of Appalachia. The network thrives by including the advice and perspective of band directors and parents from outside of Appalachia. By sharing the strategies and lessons that have proven successful, public school band programs in general can benefit."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    " "
                ),
                _react2.default.createElement(
                    "a",
                    { href: "/project" },
                    "Project Home"
                ),
                " ",
                _react2.default.createElement(
                    "a",
                    { href: "/helps-children-in-poverty-in-appalachia" },
                    "Previous"
                )
            );
        }
    }]);

    return MMAreas;
}(_react2.default.Component);

module.exports = MMAreas;

},{"react":"react"}],16:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MMWho = function (_React$Component) {
    _inherits(MMWho, _React$Component);

    function MMWho() {
        _classCallCheck(this, MMWho);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MMWho).apply(this, arguments));
    }

    _createClass(MMWho, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "Marching Mountains Helps Children"
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "The role of band programs in public schools"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "For many children in Appalachia, the band programs in the public schools provide more than just an escape from the sometimes overwhelming poverty that accompanies certain pockets of Appalachia. Band means forming camaraderie and discipline, stimulating creative expression and emotional release and instilling a foundation for future development within groups. Band teaches discipline, teamwork, accountability, and responsibility."
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Marching Mountains improves band programs in Appalachia"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Marching Mountains' network seeks to create a cooperation of passionate people inside of Appalachia as well as the support of those outside of the area who wish to see an improvement of one aspect of Appalachia."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "By improving the band programs in areas of Appalachia that suffer from extreme poverty, more children from those areas can benefit from the positive aspects of taking part in band."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Some of these children who otherwise would not have the exposure to the rewards of taking part in band will go on to improve themselves and their lives as a direct result of the opportunities Marching Mountains's network creates."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    " "
                ),
                _react2.default.createElement(
                    "a",
                    { href: "/project" },
                    "Project Home"
                ),
                " ",
                _react2.default.createElement(
                    "a",
                    { href: "/who-is-in-marching-mountains" },
                    "Previous"
                ),
                " ",
                _react2.default.createElement(
                    "a",
                    { href: "/areas-marching-mountains-helps" },
                    "Next"
                )
            );
        }
    }]);

    return MMWho;
}(_react2.default.Component);

module.exports = MMWho;

},{"react":"react"}],17:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project() {
        _classCallCheck(this, Project);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Project).apply(this, arguments));
    }

    _createClass(Project, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement("img", { src: "/img/bubblesA.png", alt: "Strong - Courageous - Able" }),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Vision"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Marching Mountains’ vision is to see a child become something more than that child would have become because an instrument found its way into their hands; to see band programs across Appalachia become more successful because band directors are working together using technology to share ideas and resources; to see local communities hold events that benefit their bands because they’ve seen a child with an instrument believe in themselves and now they believe more in their community."
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Mission Statement"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Marching Mountains organizes at the grassroots level while creating and leveraging Internet technology to empower our networks of involved people. Marching Mountains seeks grants and corporate sponsorship in addition to fundraising to provide resources, grants and scholarships to aid music programs at public middle schools and high schools in distressed counties in Appalachia. Marching Mountains promotes and organizes instrument drives to put instruments in the hands of children in Appalachia who have a desire to participate in music."
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Discover Marching Mountains"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "what-does-marching-mountains-do", title: "What does Marching Mountains do?" },
                            "What does Marching Mountains do?"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "who-is-in-marching-mountains", title: "Who is involved with Marching Mountains?" },
                            "Who is involved with Marching Mountains?"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "helps-children-in-poverty-in-appalachia", title: "How does Marching Mountains help children in Appalachia?" },
                            "How does Marching Mountains help children in Appalachia?"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "areas-marching-mountains-helps", title: "What areas does Marching Mountains help?" },
                            "What areas does Marching Mountains help?"
                        )
                    )
                )
            );
        }
    }]);

    return Project;
}(_react2.default.Component);

module.exports = Project;

},{"react":"react"}],18:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MMWhat = function (_React$Component) {
    _inherits(MMWhat, _React$Component);

    function MMWhat() {
        _classCallCheck(this, MMWhat);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MMWhat).apply(this, arguments));
    }

    _createClass(MMWhat, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "What Does Marching Mountains Do"
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Project Goals"
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        "Create a network to supply public middle school and high school band programs in distressed counties of Appalachia with ",
                        _react2.default.createElement(
                            "a",
                            { href: "/donate-a-musical-instrument", title: "donate a musical instrument" },
                            "new and used supplies and instruments"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Improve the quality of band programs in distressed regions of Appalachia and Appalachia in general"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Highlight the uniqueness of Appalachia's culture and the genuiness of many of its people."
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "How to acheive the goals"
                ),
                _react2.default.createElement(
                    "h3",
                    null,
                    "Moving beyond the association of \"Appalachia\" with \"poverty\""
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Appalachia's people and geography are special and provide a deep cultural facet within the American landscape. While many people associate Appalachia with poverty, Marching Mountains wishes to transcend the notion of Appalachia being tied to poverty. By focusing on the uniqueness and genuine quality of Appalachian communities, Marching Mountains hopes to chip away at the cement that bonds the terms \"Appalachia\" and \"poverty\" together."
                ),
                _react2.default.createElement(
                    "h3",
                    null,
                    "What is happening now?"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Currently, Marching Mountains is recruiting a core-group of activists to help shape the network and build a foundation for its success. We are seeking people who are passionate about the goals of Marching Mountains and understand the purpose of the project and its message. If you are one of these people, ",
                    _react2.default.createElement(
                        "a",
                        { href: "mailto:donate@marchingmountains.org" },
                        "email us"
                    ),
                    "."
                ),
                _react2.default.createElement(
                    "h3",
                    null,
                    "In the future"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Going forward, the network will create forums and tools to allow band directors, parents and students to share ideas, resources and hold events with the intention of creating stronger, more successful and more community-centered school band programs."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "The network will decide what activities to pursue for the sake of bettering the public school band programs in Appalachia. The network of band directors, parents and students will continue to share ideas and resources and suggest tools to Marching Mountains to improve the online functions of the Marching Mountains network."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Marching Mountains' role in the project is to help build tools for the web site to enable the network to grow and communicate. In addition, Millions of Angels pursues grants, corporate sponsorship and donations to aid the public school band programs in distressed areas of Appalachia."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    " "
                ),
                _react2.default.createElement(
                    "a",
                    { href: "/project" },
                    "Project Home"
                ),
                " ",
                _react2.default.createElement(
                    "a",
                    { href: "/who-is-in-marching-mountains" },
                    "Next"
                )
            );
        }
    }]);

    return MMWhat;
}(_react2.default.Component);

module.exports = MMWhat;

},{"react":"react"}],19:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MMWho = function (_React$Component) {
    _inherits(MMWho, _React$Component);

    function MMWho() {
        _classCallCheck(this, MMWho);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MMWho).apply(this, arguments));
    }

    _createClass(MMWho, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "content-wrapper" },
                _react2.default.createElement(
                    "h1",
                    null,
                    "Who is in Marching Mountains"
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Everyone can help with Marching Mountains"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "There are a few things anyone can do to help Marching Mountains."
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "indent disc" },
                    _react2.default.createElement(
                        "li",
                        null,
                        "Find instruments and musical supplies for the network. Read more about ",
                        _react2.default.createElement(
                            "a",
                            { href: "/donate-a-musical-instrument", title: "Donate a musical instrument" },
                            "donating instruments"
                        ),
                        " and read the ",
                        _react2.default.createElement(
                            "a",
                            { href: "/faq", title: "Frequently Asked Questions" },
                            "Frequently Asked Questions"
                        ),
                        "."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Volunteer. Check out ",
                        _react2.default.createElement(
                            "a",
                            { href: "/volunteer", title: "Volunteer" },
                            "the volunteer page"
                        ),
                        " for specific things to help with."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/donate-a-musical-instrument", title: "Donate a musical instrument" },
                            "Donate a musical instrument or funds to the project."
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Talk to people about Marching Mountains. Tell them about the web site."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "If you know journalists, ask them to write about the project."
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Key participants"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "b",
                        null,
                        "Band Directors in Appalachia"
                    ),
                    " - Without a core group of band directors, the network can't function. Open up the lines of communication between each other. Currently, there is a ",
                    _react2.default.createElement(
                        "a",
                        { href: "http://www.facebook.com/home.php?#!/pages/Marching-Mountains/116921768323573",
                            title: "Facebook" },
                        "Facebook page"
                    ),
                    "  geared toward communicating ideas, resources and strategies about how to help the band programs in Appalachia. Join the group and begin discussing topics. Sharing knowledge and strategies and then taking action on them is the main way to improve the situation."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "b",
                        null,
                        "Band Directors outside of Appalachia"
                    ),
                    " - Band directors outside Appalachia may have many more resources at their disposal, the same or possibly less. However,",
                    _react2.default.createElement(
                        "a",
                        { href: "http://www.facebook.com/home.php?#!/pages/Marching-Mountains/116921768323573",
                            title: "Facebook" },
                        "taking part in the discussion"
                    ),
                    " not only helps others, but you may make discoveries that will help your own program."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "b",
                        null,
                        "Parents of children in band"
                    ),
                    " - Talk with your child's band director about the Marching Mountains network and encourage them to participate. Without a strong network of as many band directors as possible the effects of the network will be dimished. You can also ",
                    _react2.default.createElement(
                        "a",
                        { href: "http://www.facebook.com/home.php?#!/pages/Marching-Mountains/116921768323573" },
                        "take part in the discussion."
                    ),
                    " When teachers are encouraged by parents they feel appreciated and are more likely to try to do more."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "b",
                        null,
                        "Students in band"
                    ),
                    " - You can also politely suggest the Marching Mountains network to your band directors. If your parents don't know about it, suggest it to them so that they may discuss it with your teacher."
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    "Marching Mountains Board of Directors"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Ian Felton - Founder, Executive Director"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Jennifer Buege - Senior Editor, MSP Communications"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Mary Graham - RN (retired)"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "/project" },
                    "Project Home"
                ),
                " ",
                _react2.default.createElement(
                    "a",
                    { href: "/what-does-marching-mountains-do" },
                    "Previous"
                ),
                " ",
                _react2.default.createElement(
                    "a",
                    { href: "/helps-children-in-poverty-in-appalachia" },
                    "Next"
                )
            );
        }
    }]);

    return MMWho;
}(_react2.default.Component);

module.exports = MMWho;

},{"react":"react"}],20:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
	_inherits(Register, _React$Component);

	function Register() {
		_classCallCheck(this, Register);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Register).apply(this, arguments));
	}

	_createClass(Register, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"form",
					{ action: "/user/register", method: "post" },
					_react2.default.createElement("input", { type: "text", name: "username" }),
					_react2.default.createElement("input", { type: "password", name: "password" }),
					_react2.default.createElement(
						"button",
						{ type: "submit" },
						"Submit"
					)
				)
			);
		}
	}]);

	return Register;
}(_react2.default.Component);

module.exports = Register;

},{"react":"react"}],21:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuccessStories = function (_React$Component) {
    _inherits(SuccessStories, _React$Component);

    function SuccessStories() {
        _classCallCheck(this, SuccessStories);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SuccessStories).apply(this, arguments));
    }

    _createClass(SuccessStories, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "Sucess Stories"
                ),
                _react2.default.createElement("img", { src: "/img/bubblesD.png", alt: "Strong - Courageous - Able" }),
                _react2.default.createElement(
                    "div",
                    { className: "batonContainer" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "Donating musical instruments has a real and profound effect on the lives of the students who receive them. If you have any question about the real impact that donating musical instruments has, please read the following success stories from band directors whose programs have received instruments through Marching Mountains from potential donors like you."
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Inez, Kentucky"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "em",
                            null,
                            "The Alto saxophone that was donated last year, we put that in the hands of a beginning band student who just wasn't able to afford an instrument or even able to afford to rent an instrument. We put that in the hands of a student and they have continued on with band on alto saxophone, the same alto saxophone. It's worked out so well. The student really loves band and are really passionate about it. They are already talking about joining the marching band next year in high school and are really excited about it. We are thrilled about that. If it had not been for this saxophone this kid may not have continued on with band. - Mr. Sean Coughlin, Sheldon Clark"
                        ),
                        "High School."
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Upper Glade, West Virginia"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "em",
                            null,
                            "I have one student who has started with the clarinet for concert season. The other will go to a beginning band student at one of my feeder schools. Again I thank you and whoever donated the instruments. It is always great to see them placed into the hands of excited students. Mr. Jonathan Oates - Webster County High School"
                        )
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Harts, West Virginia"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "em",
                            null,
                            "I appreciated the trombone very much and so does the student using it. I really think that Marching Mountains is such a God send to those teachers who need instruments for their students who cannot afford one. Thank you so much for the job you do and God Bless you. You are changing the lives of Appalachian children one instrument at a time. - Ms. Jeanette Oldaker, Harts pk-8 intermediate division"
                        )
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Moundville, Alabama"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "em",
                            null,
                            "Thank you. Students are thrilled. - Mr. Bob Sheehan, Hale County High School Band"
                        )
                    )
                )
            );
        }
    }]);

    return SuccessStories;
}(_react2.default.Component);

module.exports = SuccessStories;

},{"react":"react"}],22:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_React$Component) {
    _inherits(Video, _React$Component);

    function Video() {
        _classCallCheck(this, Video);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Video).apply(this, arguments));
    }

    _createClass(Video, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "batonContainer left" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Marching Mountains Musical Instrument Distributions in Appalachia"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "In October, 2015, Marching Mountains donated 11 instruments to South Preston Middle School in Tunnelton, WV. The instruments included 7 flutes, 2 clarinets, a saxophone and a trumpet. Marching Mountains also donated music stands and sheet music to the band program. This video also shows the beautiful hills of West Virginia near the school where the instruments were donated."
                    ),
                    _react2.default.createElement(
                        "div",
                        { id: "Content1" },
                        _react2.default.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/1Ju1ZyME8ZY", frameborder: "0", allowfullscreen: true })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "batonContainer left" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "In September 2011, Marching Mountains distributed 25 instruments to 14 schools in distressed counties of Appalachia. The video displays an interview between Mr. Sean Coughlin, Band Director of Sheldon Clark High School in Inez, Kentucky, and Ian Felton, founder of Marching Mountains. Mr. Coughlin emphasizes the importance of ",
                        _react2.default.createElement(
                            "a",
                            { href: "/donate-a-musical-instrument", title: "donate a musical instrument" },
                            "donating musical instruments"
                        ),
                        " and the benefit to the children who receive them."
                    ),
                    _react2.default.createElement(
                        "div",
                        { id: "Content1" },
                        _react2.default.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/HeOUh2NRQdQ", frameborder: "0", allowfullscreen: true })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "batonContainer left" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "This video details our trip through several distressed regions in Appalachia to distribute ",
                        _react2.default.createElement(
                            "a",
                            { href: "/donate-a-musical-instrument", title: "donate a musical instrument" },
                            "musical instrument donations"
                        ),
                        ". We interview several band directors and get their feedback about the importance of receiving donted musical instruments for the children in their area."
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/DZpJ4KHC_HU", frameborder: "0", allowfullscreen: true })
                    )
                )
            );
        }
    }]);

    return Video;
}(_react2.default.Component);

module.exports = Video;

},{"react":"react"}],23:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Volunteer = function (_React$Component) {
    _inherits(Volunteer, _React$Component);

    function Volunteer() {
        _classCallCheck(this, Volunteer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Volunteer).apply(this, arguments));
    }

    _createClass(Volunteer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "section",
                    { className: "featured" },
                    _react2.default.createElement(
                        "div",
                        { className: "content-wrapper" },
                        _react2.default.createElement(
                            "hgroup",
                            { className: "title" },
                            _react2.default.createElement(
                                "h1",
                                null,
                                "Volunteer with Marching Mountains"
                            ),
                            _react2.default.createElement(
                                "h2",
                                null,
                                "An opportunity to find meaning."
                            )
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "With your help, there will be more kids participating in band"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "content-wrapper" },
                    _react2.default.createElement("img", { src: "/img/bubblesV.png", alt: "Strong - Courageous - Able" }),
                    _react2.default.createElement("div", { id: "volDiv" }),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Yes, we need your help"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "We need help in the following areas. Email ",
                        _react2.default.createElement(
                            "a",
                            { href: "mailto:donate@marchingmountains.org", title: "Email to Volunteer" },
                            "donate@marchingmountains.org"
                        ),
                        " to help."
                    ),
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Vital Volunteers"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "The following positions are vital to the network. These are roles that anyone with the drive to help can perform. Without volunteers in these roles, the network can't succeed."
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "indent disc" },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Instrument Finders"
                            ),
                            " - This is the most important volunteer position and one that even young students can perform. Instrument finders do just that. They seek out and find instrument and musical supply donations for the network. These instruments and supplies are delivered to distressed band programs in Appalachia."
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Outreach"
                            ),
                            " - We need people to reach out to band directors across America and in local communities and get them involved in the network."
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Research"
                            ),
                            " - We need information in order to make a successful network grow. Research volunteers gather data from the Internet or from people and keep the network heading in the right direction."
                        )
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Other skills that we may need at any given time"
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "indent disc" },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Fundraising"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Grant Writing"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "ASP.Net programming"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Web graphic design"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Business management"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Legal"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Internet promotion"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "b",
                                null,
                                "Administrative"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Email ",
                        _react2.default.createElement(
                            "a",
                            { href: "mailto:donate@marchingmountains.org", "class": "text", title: "Email to volunteer" },
                            "donate@marchingmountains.org"
                        )
                    )
                )
            );
        }
    }]);

    return Volunteer;
}(_react2.default.Component);

module.exports = Volunteer;

},{"react":"react"}],24:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactRouter2.default.run(_routes2.default, _reactRouter2.default.HistoryLocation, function (Handler) {
  _react2.default.render(_react2.default.createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":25,"react":"react","react-router":"react-router"}],25:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _project = require('./components/project/project');

var _project2 = _interopRequireDefault(_project);

var _donateInstrument = require('./components/donate-instrument');

var _donateInstrument2 = _interopRequireDefault(_donateInstrument);

var _what = require('./components/project/what');

var _what2 = _interopRequireDefault(_what);

var _who = require('./components/project/who');

var _who2 = _interopRequireDefault(_who);

var _how = require('./components/project/how');

var _how2 = _interopRequireDefault(_how);

var _areas = require('./components/project/areas');

var _areas2 = _interopRequireDefault(_areas);

var _faq = require('./components/faq');

var _faq2 = _interopRequireDefault(_faq);

var _contact = require('./components/contact');

var _contact2 = _interopRequireDefault(_contact);

var _video = require('./components/video');

var _video2 = _interopRequireDefault(_video);

var _successStories = require('./components/success-stories');

var _successStories2 = _interopRequireDefault(_successStories);

var _volunteer = require('./components/volunteer');

var _volunteer2 = _interopRequireDefault(_volunteer);

var _n = require('./components/news/n20131');

var _n2 = _interopRequireDefault(_n);

var _n3 = require('./components/news/n20101');

var _n4 = _interopRequireDefault(_n3);

var _annualReports = require('./components/annual-reports');

var _annualReports2 = _interopRequireDefault(_annualReports);

var _login = require('./components/login');

var _login2 = _interopRequireDefault(_login);

var _register = require('./components/register');

var _register2 = _interopRequireDefault(_register);

var _bandDirectors = require('./components/band-directors');

var _bandDirectors2 = _interopRequireDefault(_bandDirectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createElement(
  _reactRouter.Route,
  { handler: _app2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', handler: _home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/project', handler: _project2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/donate-a-musical-instrument', handler: _donateInstrument2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/what-does-marching-mountains-do', handler: _what2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/who-is-in-marching-mountains', handler: _who2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/helps-children-in-poverty-in-appalachia', handler: _how2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/areas-marching-mountains-helps', handler: _areas2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/faq', handler: _faq2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/contact', handler: _contact2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/video', handler: _video2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/instrument-donation-success-stories', handler: _successStories2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/volunteer', handler: _volunteer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/news/2013/Donating-Musical-Instruments-Changes-Childrens-Lives', handler: _n2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/news/2010/donated-instrument-distribution', handler: _n4.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/annual-reports', handler: _annualReports2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/login', handler: _login2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/register', handler: _register2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/band-directors', handler: _bandDirectors2.default })
);

},{"./components/annual-reports":3,"./components/app":4,"./components/band-directors":5,"./components/contact":6,"./components/donate-instrument":7,"./components/faq":8,"./components/home":11,"./components/login":12,"./components/news/n20101":13,"./components/news/n20131":14,"./components/project/areas":15,"./components/project/how":16,"./components/project/project":17,"./components/project/what":18,"./components/project/who":19,"./components/register":20,"./components/success-stories":21,"./components/video":22,"./components/volunteer":23,"react":"react","react-router":"react-router"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _headerActions = require('../actions/header-actions');

var _headerActions2 = _interopRequireDefault(_headerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderStore = function HeaderStore() {
  _classCallCheck(this, HeaderStore);

  this.bindActions(_headerActions2.default);
};

exports.default = _alt2.default.createStore(HeaderStore);

},{"../actions/header-actions":1,"../alt":2}]},{},[24]);

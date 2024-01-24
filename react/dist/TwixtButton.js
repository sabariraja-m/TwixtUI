"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtButton(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setOpen(true);
    },
    className: "px-4 py-2 bg-indigo-500 text-white rounded-md"
  }, children);
}
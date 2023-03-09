"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var mui_1 = require("tss-react/mui");
var Media = function (_a) {
    var _b;
    var classes = _a.classes, blockProps = _a.blockProps, contentState = _a.contentState, block = _a.block;
    var _c = contentState
        .getEntity(block.getEntityAt(0))
        .getData(), url = _c.url, width = _c.width, height = _c.height, alignment = _c.alignment, type = _c.type;
    var onClick = blockProps.onClick, readOnly = blockProps.readOnly, focusKey = blockProps.focusKey;
    var htmlTag = function () {
        var _a;
        var componentProps = {
            src: url,
            className: (0, classnames_1.default)(classes.root, (_a = {},
                _a[classes.editable] = !readOnly,
                _a[classes.focused] = !readOnly && focusKey === block.getKey(),
                _a)),
            width: width,
            height: type === "video" ? "auto" : height,
            onClick: function () {
                if (readOnly) {
                    return;
                }
                onClick(block);
            },
        };
        if (!type || type === "image") {
            return react_1.default.createElement("img", __assign({}, componentProps));
        }
        if (type === "video") {
            return react_1.default.createElement("video", __assign({}, componentProps, { autoPlay: false, controls: true }));
        }
        return null;
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)((_b = {},
            _b[classes.centered] = alignment === "center",
            _b[classes.leftAligned] = alignment === "left",
            _b[classes.rightAligned] = alignment === "right",
            _b)) }, htmlTag()));
};
exports.default = (0, mui_1.withStyles)(Media, function (_a) {
    var shadows = _a.shadows;
    return ({
        root: {
            margin: "5px 0 1px",
            outline: "none",
        },
        editable: {
            cursor: "pointer",
            "&:hover": {
                boxShadow: shadows[3],
            },
        },
        focused: {
            boxShadow: shadows[3],
        },
        centered: {
            textAlign: "center",
        },
        leftAligned: {
            textAlign: "left",
        },
        rightAligned: {
            textAlign: "right",
        },
    });
});

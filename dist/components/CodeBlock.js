"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mui_1 = require("tss-react/mui");
var CodeBlock = function (_a) {
    var classes = _a.classes, children = _a.children;
    return react_1.default.createElement("div", { className: classes.root }, children);
};
exports.default = (0, mui_1.withStyles)(CodeBlock, function (_a) {
    var spacing = _a.spacing, palette = _a.palette;
    return ({
        root: {
            backgroundColor: palette.grey[200],
            padding: spacing(1, 2, 1, 2),
        },
    });
});
//# sourceMappingURL=CodeBlock.js.map
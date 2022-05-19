"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var mui_1 = require("tss-react/mui");
var Autocomplete = function (_a) {
    var classes = _a.classes, items = _a.items, top = _a.top, left = _a.left, selectedIndex = _a.selectedIndex, onClick = _a.onClick;
    if (!items.length) {
        return null;
    }
    return (react_1.default.createElement(material_1.Paper, { className: classes.container, style: {
            top: top,
            left: left,
        } },
        react_1.default.createElement(material_1.List, { dense: true }, items.map(function (item, index) { return (react_1.default.createElement(material_1.ListItem, { key: index, className: classes.item, selected: index === selectedIndex, onClick: function () { return onClick(index); } }, item.content)); }))));
};
exports.default = (0, mui_1.withStyles)(Autocomplete, {
    container: {
        minWidth: "200px",
        position: "absolute",
        zIndex: 10,
    },
    item: {
        cursor: "pointer",
    },
});
//# sourceMappingURL=Autocomplete.js.map
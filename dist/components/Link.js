"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var Link = function (_a) {
    var contentState = _a.contentState, entityKey = _a.entityKey, children = _a.children;
    var _b = contentState.getEntity(entityKey).getData(), url = _b.url, className = _b.className;
    return (react_1.default.createElement(material_1.Link, { href: url, className: className + " editor-anchor", target: "_blank" }, children));
};
exports.default = Link;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FontAwesomeIcon_1 = require("./FontAwesomeIcon");
class Icons {
    static registerIcon(iconConstructor) {
        let icon = new iconConstructor();
        this.icons[icon.name] = icon;
    }
    static registerFontAwesomeIcon(definition) {
        let icon = new FontAwesomeIcon_1.default(definition);
        this.icons[icon.name] = icon;
    }
    static registerFontAwesome(definitions) {
        for (let name in definitions) {
            if (definitions.hasOwnProperty(name)) {
                let definition = definitions[name];
                Icons.registerFontAwesomeIcon(definition);
            }
        }
    }
    static renderSVG(name) {
        let icon = this.icons[name];
        if (!icon) {
            throw new Error('No Icon defined');
        }
        return icon.render();
    }
    static renderIconFull(name) {
        let i = document.createElement('i');
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.appendChild(Icons.renderSVG(name));
        i.appendChild(svg);
        return i;
    }
    static renderIcon(name) {
        let i = document.createElement('i');
        i.setAttribute('class', 'icon');
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('href', '#' + name);
        svg.appendChild(use);
        i.appendChild(svg);
        return i;
    }
    static renderJSX(name) {
        return (Icons.createElement("i", { className: "icon" },
            Icons.createElement("svg", { xmlns: "http://www.w3.org/2000/svg" },
                Icons.createElement("use", { href: '#' + name }))));
    }
    static renderJSXFull(name) {
        return (Icons.createElement("i", { className: "icon" },
            Icons.createElement("svg", { xmlns: "http://www.w3.org/2000/svg" }, Icons.renderSVG(name))));
    }
    static createIconRoot() {
        let iconRoot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconRoot.style.display = 'none';
        for (let name in this.icons) {
            if (this.icons.hasOwnProperty(name)) {
                iconRoot.appendChild(Icons.renderSVG(name));
            }
        }
        return iconRoot;
    }
    static defaultCreateElement(type, props, ...children) {
        let element = document.createElementNS('http://www.w3.org/2000/svg', type);
        if (props) {
            for (let property in props) {
                if (props.hasOwnProperty) {
                    let value = props[property];
                    if (property === 'style') {
                        element.style.cssText = value;
                    }
                    else if (property.indexOf('on') >= 0) {
                        element[property] = value;
                    }
                    else if (property === 'className') {
                        element[property] = value;
                    }
                    else if (property === 'xmlns') {
                    }
                    else {
                        element.setAttribute(property, value);
                    }
                }
            }
        }
        if (children) {
            for (let child of children) {
                element.appendChild(child);
            }
        }
        return element;
    }
    static setCreateElement(method) {
        this.createElement = method;
    }
}
Icons.icons = {};
Icons.createElement = Icons.defaultCreateElement;
exports.default = Icons;
//# sourceMappingURL=Icons.js.map
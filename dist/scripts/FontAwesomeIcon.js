"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icons_1 = require("./Icons");
const Icon_1 = require("./Icon");
class FontAwesomeIcon extends Icon_1.default {
    constructor(definition) {
        super();
        this.definition = definition;
        this.name = definition.iconName;
    }
    render() {
        return (Icons_1.default.createElement("symbol", { id: this.name, viewBox: [0, 0, this.definition.icon[0], this.definition.icon[1]].join(' ') },
            Icons_1.default.createElement("path", { fill: "currentColor", d: this.definition.icon[4] })));
    }
}
exports.default = FontAwesomeIcon;
//# sourceMappingURL=FontAwesomeIcon.js.map
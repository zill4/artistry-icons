"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChevronRight_1 = require("../scripts/ChevronRight");
const Icons_1 = require("../scripts/Icons");
const FontAwesome = require("@fortawesome/free-solid-svg-icons");
function run() {
    Icons_1.default.registerIcon(ChevronRight_1.default);
    Icons_1.default.registerFontAwesome(FontAwesome.fas);
    window.document.body.appendChild(Icons_1.default.createIconRoot());
    window.document.body.appendChild(Icons_1.default.renderIcon('chevron-right'));
    window.document.body.appendChild(Icons_1.default.renderIcon('search'));
    window.document.body.appendChild(Icons_1.default.renderIcon('user'));
    return 'Application started...';
}
window.onload = function () {
    console.log(run());
};
//# sourceMappingURL=index.js.map
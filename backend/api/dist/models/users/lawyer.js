"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
class Lawyer extends user_1.default {
    constructor(id, code, role, name, email) {
        super(id, code, role);
        this.name = name;
        this.email = email;
    }
}
exports.default = Lawyer;
//# sourceMappingURL=lawyer.js.map
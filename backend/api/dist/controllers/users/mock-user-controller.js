"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const user_service_1 = __importDefault(require("../../services/users/user-service"));
let MockUserController = class MockUserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return [
            { id: '987', name: 'mock1' },
            { id: '876', name: 'mock2' },
            { id: '765', name: 'mock3' },
        ];
    }
    findById(id) {
        return this.userService.findById(id);
    }
};
__decorate([
    routing_controllers_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MockUserController.prototype, "findAll", null);
__decorate([
    routing_controllers_1.Get('/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MockUserController.prototype, "findById", null);
MockUserController = __decorate([
    routing_controllers_1.JsonController('/users'),
    __metadata("design:paramtypes", [user_service_1.default])
], MockUserController);
exports.default = MockUserController;
//# sourceMappingURL=mock-user-controller.js.map
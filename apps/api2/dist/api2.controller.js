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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api2Controller = void 0;
const common_1 = require("@nestjs/common");
const api2_service_1 = require("./api2.service");
let Api2Controller = exports.Api2Controller = class Api2Controller {
    constructor(api2Service) {
        this.api2Service = api2Service;
    }
    getHello() {
        return this.api2Service.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Api2Controller.prototype, "getHello", null);
exports.Api2Controller = Api2Controller = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [api2_service_1.Api2Service])
], Api2Controller);
//# sourceMappingURL=api2.controller.js.map
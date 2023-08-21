"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api2Module = void 0;
const common_1 = require("@nestjs/common");
const api2_controller_1 = require("./api2.controller");
const api2_service_1 = require("./api2.service");
const share_1 = require("@orangeboard/share");
let Api2Module = exports.Api2Module = class Api2Module {
};
exports.Api2Module = Api2Module = __decorate([
    (0, common_1.Module)({
        imports: [share_1.ParameterStoreModule],
        controllers: [api2_controller_1.Api2Controller],
        providers: [api2_service_1.Api2Service],
    })
], Api2Module);
//# sourceMappingURL=api2.module.js.map
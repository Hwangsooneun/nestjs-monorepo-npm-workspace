"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterStoreModule = void 0;
const common_1 = require("@nestjs/common");
const parameter_store_service_1 = require("./parameter-store.service");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./configuration");
let ParameterStoreModule = exports.ParameterStoreModule = class ParameterStoreModule {
};
exports.ParameterStoreModule = ParameterStoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                cache: true,
                isGlobal: true,
            }),
        ],
        providers: [parameter_store_service_1.ParameterStoreService],
        exports: [parameter_store_service_1.ParameterStoreService],
    })
], ParameterStoreModule);
//# sourceMappingURL=parameter-store.module.js.map
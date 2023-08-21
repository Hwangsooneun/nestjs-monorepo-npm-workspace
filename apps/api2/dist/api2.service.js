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
exports.Api2Service = void 0;
const common_1 = require("@nestjs/common");
const share_1 = require("@orangeboard/share");
let Api2Service = exports.Api2Service = class Api2Service {
    constructor(configService) {
        this.configService = configService;
    }
    getHello() {
        console.log(this.configService.get('KAKAO_CALLBACK_URL_V2'));
        return 'Hello World!';
    }
};
exports.Api2Service = Api2Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [share_1.ParameterStoreService])
], Api2Service);
//# sourceMappingURL=api2.service.js.map
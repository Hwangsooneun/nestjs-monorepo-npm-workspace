"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObMailerModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_service_1 = require("./mailer.service");
const mailer_1 = require("@nestjs-modules/mailer");
const parameter_store_service_1 = require("../config/parameter-store.service");
const parameter_store_module_1 = require("../config/parameter-store.module");
let ObMailerModule = exports.ObMailerModule = class ObMailerModule {
};
exports.ObMailerModule = ObMailerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                imports: [parameter_store_module_1.ParameterStoreModule],
                useFactory: (config) => {
                    return {
                        transport: {
                            host: config.get('EMAIL_AUTH_STMP_HOST'),
                            port: 465,
                            auth: {
                                user: config.get('EMAIL_AUTH_EMAIL'),
                                pass: config.get('EMAIL_AUTH_PASSWORD'),
                            },
                        },
                        defaults: {
                            from: `"no-reply" <no-reply@orangeboard.co.kr>`,
                        },
                    };
                },
                inject: [parameter_store_service_1.ParameterStoreService],
            }),
        ],
        providers: [mailer_service_1.ObMailerService],
        exports: [mailer_service_1.ObMailerService],
    })
], ObMailerModule);
//# sourceMappingURL=mailer.module.js.map
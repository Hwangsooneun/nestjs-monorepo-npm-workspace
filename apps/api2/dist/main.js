"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const api2_module_1 = require("./api2.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api2_module_1.Api2Module);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
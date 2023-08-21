import { ConfigService } from '@nestjs/config';
export declare class ParameterStoreService {
    private readonly configService;
    constructor(configService: ConfigService);
    get(parameter: string): string | undefined;
}

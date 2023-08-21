import { ParameterStoreService } from '@orangeboard/share';
export declare class Api2Service {
    private readonly configService;
    constructor(configService: ParameterStoreService);
    getHello(): string;
}

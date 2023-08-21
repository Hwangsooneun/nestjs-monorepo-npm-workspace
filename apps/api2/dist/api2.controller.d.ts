import { Api2Service } from './api2.service';
export declare class Api2Controller {
    private readonly api2Service;
    constructor(api2Service: Api2Service);
    getHello(): string;
}

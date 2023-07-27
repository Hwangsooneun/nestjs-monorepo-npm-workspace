import { Test, TestingModule } from '@nestjs/testing';
import { Api2Controller } from './api2.controller';
import { Api2Service } from './api2.service';

describe('Api2Controller', () => {
  let api2Controller: Api2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Api2Controller],
      providers: [Api2Service],
    }).compile();

    api2Controller = app.get<Api2Controller>(Api2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(api2Controller.getHello()).toBe('Hello World!');
    });
  });
});

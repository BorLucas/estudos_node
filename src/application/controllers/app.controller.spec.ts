import { AppService } from './../services/app.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';


describe('AppController', () => {
  let appController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [AppService],
    }).compile();

    appController = app.get<ProductController>(ProductController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.createProduct()).toBe('Hello World!');
    });
  });
});

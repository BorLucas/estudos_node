import { LoginService } from './application/services/login.service';
import { ProductService } from './application/services/product.service';
import { LoginController } from './application/controllers/login.controller';
import { ProductController } from './application/controllers/product.controller';
import { UsersRepository } from './infrastructure/database/users.repository';
import { ProductsRepository } from './infrastructure/database/products.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { Connection } from 'typeorm';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      ProductsRepository,
      UsersRepository
    ]),
  ],
  controllers: [ProductController,
    LoginController,],
  providers: [ProductService,
    LoginService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
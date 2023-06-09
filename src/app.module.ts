import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/Items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from "./config/keys"

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(config.mongoURL)
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { InteractionsService } from './interactions/interactions.service';
import { InteractionsController } from './interactions/interactions.controller';

@Module({
  imports: [CharacterModule],
  controllers: [AppController, InteractionsController],
  providers: [AppService, InteractionsService],
})
export class AppModule {}

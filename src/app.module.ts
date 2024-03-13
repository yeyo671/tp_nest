import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { InteractionsService } from './interactions/interactions.service';
import { InteractionsController } from './interactions/interactions.controller';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    CharacterModule,
    ConfigModule.forRoot({
      featureToggle: {
        enableInteraction: true, // Change to false to disable interactions
      },
    }),],
  controllers: [AppController, InteractionsController],
  providers: [AppService, InteractionsService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('*');
  }
}


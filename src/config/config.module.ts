import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class ConfigModule {
    static forRoot(configOptions: Record<string, any>): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: 'CONFIG_OPTIONS',
                    useValue: configOptions,
                },
            ],
            exports: ['CONFIG_OPTIONS'],
        };
    }
}

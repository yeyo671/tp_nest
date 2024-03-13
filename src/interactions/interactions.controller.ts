
import { Controller, Get, HttpException, HttpStatus, Inject, Query } from '@nestjs/common';
import { InteractionsService } from './interactions.service';

@Controller('interactions')
export class InteractionsController {
    constructor(private interactionsService: InteractionsService, @Inject('CONFIG_OPTIONS') private configOptions: any
    ) { }

    @Get('/fight')
    simulateFight(@Query('char1') char1: string, @Query('char2') char2: string): string {
        if (!this.configOptions.enableInteractions) {
            throw new HttpException('Les interactions sont désactivées.', HttpStatus.FORBIDDEN);
        }
        return this.interactionsService.simulateFight(char1, char2);
    }
}


import { Controller, Get, Query } from '@nestjs/common';
import { InteractionsService } from './interactions.service';

@Controller('interactions')
export class InteractionsController {
    constructor(private interactionsService: InteractionsService) { }

    @Get('/fight')
    simulateFight(@Query('char1') char1: string, @Query('char2') char2: string): string {
        return this.interactionsService.simulateFight(char1, char2);
    }
}

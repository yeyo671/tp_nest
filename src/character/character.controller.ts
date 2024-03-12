import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CharactersService } from './character.service';
import { Character } from './character.model';

@Controller('characters')
export class CharactersController {
    constructor(private charactersService: CharactersService) { }

    @Post()
    createCharacter(
        @Body('name') name: string,
        @Body('power') power: string,
        @Body('force') force: number,
        @Body('experience') experience: number
    ): Character {
        return this.charactersService.createCharacter(name, power, force, experience);
    }

    @Get()
    getAllCharacters(): Character[] {
        return this.charactersService.getAllCharacters();
    }

    @Get('/:id')
    getCharacterById(@Param('id') id: string): Character {
        const character = this.charactersService.getCharacterById(id);
        if (!character) {
            throw new NotFoundException(`Character with ID "${id}" not found.`);
        }
        return character;
    }
}

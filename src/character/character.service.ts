import { Injectable } from '@nestjs/common';
import { Character } from './character.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CharactersService {
    private characters: Character[] = [];

    createCharacter(name: string, power: string, force: number, experience: number): Character {
        const character: Character = {
            id: uuidv4(),
            name,
            power,
            force,
            experience
        };

        this.characters.push(character);
        return character;
    }

    getAllCharacters(): Character[] {
        return this.characters;
    }

    getCharacterById(id: string): Character | undefined {
        return this.characters.find(character => character.id === id);
    }
}

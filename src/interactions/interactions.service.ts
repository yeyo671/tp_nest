// src/interactions/interactions.service.ts

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CharactersService } from 'src/character/character.service';
import { Character } from 'src/character/character.model';

@Injectable()
export class InteractionsService {
    constructor(private charactersService: CharactersService, @Inject('CONFIG_OPTIONS') private configOptions: any
    ) { }

    simulateFight(characterId1: string, characterId2: string): string {
        const character1 = this.charactersService.getCharacterById(characterId1);
        const character2 = this.charactersService.getCharacterById(characterId2);

        if (this.configOptions.enableInteractions === false) {
            return 'Les interactions sont désactivées.';
        }

        if (!character1 || !character2) {
            throw new NotFoundException('Character not found');
        }

        const power1 = character1.force + character1.experience;
        const power2 = character2.force + character2.experience;

        if (power1 > power2) {
            return `Le gagnant entre ${character1.name} et ${character2.name} est ${character1.name} avec une puissance de combat de ${power1} contre ${power2}.`;
        } else if (power2 > power1) {
            return `Le gagnant entre ${character1.name} et ${character2.name} est ${character2.name} avec une puissance de combat de ${power2} contre ${power1}.`;
        } else {
            return `Le combat entre ${character1.name} et ${character2.name} se termine par un match nul.`;
        }
    }
}

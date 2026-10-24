import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Lexicon, LexiconLoadMatch } from '../ScentoPerfumeCompendiumTypes';
declare class LexiconEntity extends ScentoPerfumeCompendiumEntityBase<Lexicon> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: LexiconEntity): LexiconEntity;
    load(this: any, reqmatch?: LexiconLoadMatch, ctrl?: Control): Promise<LexiconEntity>;
}
export { LexiconEntity };

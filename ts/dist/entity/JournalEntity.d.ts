import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Journal, JournalListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class JournalEntity extends ScentoPerfumeCompendiumEntityBase<Journal> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: JournalEntity): JournalEntity;
    list(this: any, reqmatch?: JournalListMatch, ctrl?: Control): Promise<JournalEntity[]>;
}
export { JournalEntity };

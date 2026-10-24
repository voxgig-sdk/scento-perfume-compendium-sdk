import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Family, FamilyLoadMatch, FamilyListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class FamilyEntity extends ScentoPerfumeCompendiumEntityBase<Family> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: FamilyEntity): FamilyEntity;
    load(this: any, reqmatch?: FamilyLoadMatch, ctrl?: Control): Promise<FamilyEntity>;
    list(this: any, reqmatch?: FamilyListMatch, ctrl?: Control): Promise<FamilyEntity[]>;
}
export { FamilyEntity };

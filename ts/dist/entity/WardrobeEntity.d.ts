import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Wardrobe, WardrobeListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class WardrobeEntity extends ScentoPerfumeCompendiumEntityBase<Wardrobe> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: WardrobeEntity): WardrobeEntity;
    list(this: any, reqmatch?: WardrobeListMatch, ctrl?: Control): Promise<WardrobeEntity[]>;
}
export { WardrobeEntity };

import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { House, HouseLoadMatch } from '../ScentoPerfumeCompendiumTypes';
declare class HouseEntity extends ScentoPerfumeCompendiumEntityBase<House> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: HouseEntity): HouseEntity;
    load(this: any, reqmatch?: HouseLoadMatch, ctrl?: Control): Promise<HouseEntity>;
}
export { HouseEntity };

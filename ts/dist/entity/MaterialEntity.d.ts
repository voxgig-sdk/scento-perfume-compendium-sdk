import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Material, MaterialLoadMatch } from '../ScentoPerfumeCompendiumTypes';
declare class MaterialEntity extends ScentoPerfumeCompendiumEntityBase<Material> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: MaterialEntity): MaterialEntity;
    load(this: any, reqmatch?: MaterialLoadMatch, ctrl?: Control): Promise<MaterialEntity>;
}
export { MaterialEntity };

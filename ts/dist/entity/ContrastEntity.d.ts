import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Contrast, ContrastListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class ContrastEntity extends ScentoPerfumeCompendiumEntityBase<Contrast> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: ContrastEntity): ContrastEntity;
    list(this: any, reqmatch?: ContrastListMatch, ctrl?: Control): Promise<ContrastEntity[]>;
}
export { ContrastEntity };

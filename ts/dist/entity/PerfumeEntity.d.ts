import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Perfume, PerfumeLoadMatch, PerfumeListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class PerfumeEntity extends ScentoPerfumeCompendiumEntityBase<Perfume> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: PerfumeEntity): PerfumeEntity;
    load(this: any, reqmatch?: PerfumeLoadMatch, ctrl?: Control): Promise<PerfumeEntity>;
    list(this: any, reqmatch?: PerfumeListMatch, ctrl?: Control): Promise<PerfumeEntity[]>;
}
export { PerfumeEntity };

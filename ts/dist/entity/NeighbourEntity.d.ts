import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Neighbour, NeighbourListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class NeighbourEntity extends ScentoPerfumeCompendiumEntityBase<Neighbour> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: NeighbourEntity): NeighbourEntity;
    list(this: any, reqmatch?: NeighbourListMatch, ctrl?: Control): Promise<NeighbourEntity[]>;
}
export { NeighbourEntity };

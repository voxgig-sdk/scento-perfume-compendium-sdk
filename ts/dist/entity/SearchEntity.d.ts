import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class SearchEntity extends ScentoPerfumeCompendiumEntityBase<Search> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };

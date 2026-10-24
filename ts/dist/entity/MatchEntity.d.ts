import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Match, MatchListMatch } from '../ScentoPerfumeCompendiumTypes';
declare class MatchEntity extends ScentoPerfumeCompendiumEntityBase<Match> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: MatchEntity): MatchEntity;
    list(this: any, reqmatch?: MatchListMatch, ctrl?: Control): Promise<MatchEntity[]>;
}
export { MatchEntity };

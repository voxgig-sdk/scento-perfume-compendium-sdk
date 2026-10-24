import { ScentoPerfumeCompendiumEntityBase } from '../ScentoPerfumeCompendiumEntityBase';
import type { ScentoPerfumeCompendiumSDK } from '../ScentoPerfumeCompendiumSDK';
import type { Control } from '../types';
import type { Edit, EditLoadMatch } from '../ScentoPerfumeCompendiumTypes';
declare class EditEntity extends ScentoPerfumeCompendiumEntityBase<Edit> {
    constructor(client: ScentoPerfumeCompendiumSDK, entopts: any);
    make(this: EditEntity): EditEntity;
    load(this: any, reqmatch?: EditLoadMatch, ctrl?: Control): Promise<EditEntity>;
}
export { EditEntity };

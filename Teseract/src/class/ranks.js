/**
 * Manages the existing ranks, this ranks doesn't have any permission, for this use permission class. 
 * This is just for in-name and in-chat ranks
 */
class TeseractRanksTypes {

    static example = '§aExample rank§r';

};

export class Ranks {

    create(name, displayName) { };

    delete(name) { };

};

export const TeseractRankTypes = new TeseractRankTypes(), ranks = new Ranks();


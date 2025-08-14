import { Low } from 'lowdb';
import { loadData } from '../../repositories/utils/utils';
import { ClubModel } from '../../models/club-model';
import { PlayerModel } from '../../models/player-model';

export type Data = { players: PlayerModel[]; clubs: ClubModel[] };

export async function seedDb(db: Low<Data>) {
    const players = await loadData<PlayerModel[]>('src/data/data-seed/seed-players.json');
    const clubs = await loadData<ClubModel[]>('src/data/data-seed/seed-clubs.json');
    
    db.data = { players, clubs };    
    await db.write();
}

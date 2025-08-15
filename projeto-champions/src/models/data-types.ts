import { ClubModel } from "./club-model"
import { PlayerModel } from "./player-model"

type EntityModel = ClubModel | PlayerModel;
type DataModel = EntityModel[]

export { DataModel, EntityModel };

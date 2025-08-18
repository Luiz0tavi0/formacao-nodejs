import { db } from "../data/db";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return db.data.players;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return db.data.players.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  db.data.players.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = db.data.players.findIndex((player) => player.id === id);

  if (index !== -1) {
    db.data.players.splice(index, 1);
    await db.write()
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  //find player
  const playerIndex = db.data.players.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    db.data.players[playerIndex].statistics = statistics;
  }

  return db.data.players[playerIndex];
};

import { db } from "../data/db";
import { ClubModel } from "../models/club-model";
import { loadData } from "./utils/utils";


export const findAllClubs = async (): Promise<ClubModel[]> => {
  await db.read()
  const clubs: ClubModel[] = db.data.clubs
  return clubs;
};

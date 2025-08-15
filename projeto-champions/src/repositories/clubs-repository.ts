import { db } from "../data/db";
import { ClubModel } from "../models/club-model";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  await db.read()
  const clubs: ClubModel[] = db.data.clubs
  return clubs;
};
export const findClubById = async (id: number): Promise<ClubModel | undefined> => {
  await db.read()
  const club: ClubModel | undefined = await db.data.clubs.find((club: ClubModel) => club.id === id)
  return club ? { ...club } : club;
}
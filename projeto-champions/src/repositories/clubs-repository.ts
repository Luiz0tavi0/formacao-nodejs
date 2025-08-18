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

export const insertClub = async (club: ClubModel) => {
  await db.data.clubs.push(club);
};

export const deleteOneClub = async (id: number): Promise<boolean> => {
  await db.read()
  const index = db.data.clubs.findIndex((club) => club.id === id);

  if (index !== -1) {
    db.data.clubs.splice(index, 1);
    await db.write()
    return true;
  }

  return false;
}
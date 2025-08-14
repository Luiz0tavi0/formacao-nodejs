import { ClubModel } from "../models/club-model";
import { loadData } from "./utils/utils";


export const findAllClubs = async (): Promise<ClubModel[]> => {
  const clubs: ClubModel[] = await loadData("./src/data/data-seed/seed-clubs.json")
  return clubs;
};

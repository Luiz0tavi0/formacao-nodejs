import { HttpResponse as HttpResponseModel } from "../models/http-response-model";
import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository";
import { ClubModel } from "../models/club-model";


export const getClubService = async (): Promise<HttpResponseModel> => {
  const data = await repository.findAllClubs();
  const response = HttpResponse.ok(data);
  return response;
};
export const getClubByIdService = async (id: number): Promise<HttpResponseModel> => {
  const data = await repository.findClubById(id);
  const response = HttpResponse.ok(data);
  return response;
};

export const createClubService = async (club: ClubModel): Promise<HttpResponseModel> => {
  let response = null;

  //verifica se está vazio
  if (Object.keys(club).length === 0)
    return await HttpResponse.badRequest();

  await repository.insertClub(club);
  response = await HttpResponse.created();

  return response;
}
export const deleteClubService = async (id: number): Promise<HttpResponseModel> => {

  const isDeleted = await repository.deleteOneClub(id)

  return isDeleted ? await HttpResponse.ok({ message: "deleted" }) : await HttpResponse.badRequest();

}
export const updateClubService = async (id: number, data: Partial<ClubModel>): Promise<HttpResponseModel> => {

  const dataClub = await repository.findAndModifyClub(id, data);
  if (!dataClub)
    return await HttpResponse.badRequest()

  return await HttpResponse.ok({ message: "success" })

}
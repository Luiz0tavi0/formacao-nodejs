import { Request, Response } from "express";
import * as service from "../services/clubs-service";
import { HttpResponse } from "../models/http-response-model";
import { ClubModel } from "../models/club-model";

export const getClubs = async (req: Request, res: Response) => {
  const response = await service.getClubService();
  res.status(response.statusCode).json(response.body);
};

export const getClubById = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
  const idToFind = parseInt(req.params.id)
  const response = await service.getClubByIdService(idToFind);
  return res.status(response.statusCode).json(response.body);
};

export const postClub = async (req: Request, res: Response): Promise<Response> => {
  const bodyValue = req.body;
  (bodyValue)
  const httpResponse = await service.createClubService(bodyValue);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deleteClub = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id);

  const httpResponse = await service.deleteClubService(id);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
};


export const patchClub = async (
  req: Request<{ id: string }, {}, Partial<ClubModel>>, res: Response<HttpResponse>
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const payload = req.body;

  const httpResponse = await service.updateClubService(id, payload);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
};

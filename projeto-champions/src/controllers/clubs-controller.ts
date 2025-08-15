import { Request, Response } from "express";
import * as service from "../services/clubs-service";
import { HttpResponse } from "../models/http-response-model";

export const getClubs = async (req: Request, res: Response) => {
  const response = await service.getClubService();
  res.status(response.statusCode).json(response.body);
};

export const getClubById = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
  const idToFind = parseInt(req.params.id)
  const response = await service.getClubByIdService(idToFind);
  return res.status(response.statusCode).json(response.body);
};

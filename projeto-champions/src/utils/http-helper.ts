import { HttpResponse } from "../models/http-response-model";


export enum StatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  notFound = 404,

}

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.ok,
    body: data,
  };
};

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.created,
    body: {
      message: "successful",
    },
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.noContent,
    body: null,
  };
};

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};

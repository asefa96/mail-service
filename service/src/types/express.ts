import { Request, Response, NextFunction} from 'express';

export interface IResponse extends Response {}
export interface IRequest extends Request {}
export interface INext extends NextFunction {}
import { Request, Response } from "express";
import api from "../service/api";

class CurrencyController {
  async index(request: Request, response: Response) {
    const { currency } = request.body;

    const result = await api.get(`/latest?base=${currency}`);

    return response.json(result.data);
  }
}

export default new CurrencyController();

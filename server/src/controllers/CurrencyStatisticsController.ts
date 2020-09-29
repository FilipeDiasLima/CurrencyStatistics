import { Request, Response } from "express";
import api from "../service/api";
import currencyVariationStatus from "../utils/currencyVariationStatus";

class CurrencyStatisticsController {
  async index(request: Request, response: Response) {
    const { currency, date } = request.body;

    const result = await api.get(`/${date}?base=${currency}`);

    const responseResult = await currencyVariationStatus(currency, date);

    return response.json(responseResult);
  }
}

export default new CurrencyStatisticsController();

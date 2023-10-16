import { $apiClient } from "../client";
import { GetBotRequestDto, GetBotResponseDto } from "shared/api/bot/dto/GetBotDto";
import { UpdateBotRequestDto, UpdateBotResponseDto } from "shared/api/bot/dto/UpdateBotDto";
import { CheckBotRequestDto, CheckBotResponseDto } from "./dto/CheckBotDto";

export class BotService {
  static getBot(params: GetBotRequestDto) {
    return $apiClient.get<GetBotResponseDto>("bot/get-bot", {
      params,
    });
  }

  static updateBot(reqBody: UpdateBotRequestDto) {
    return $apiClient.patch<UpdateBotResponseDto>("bot/update", reqBody);
  }

  static checkBot(reqBody: CheckBotRequestDto) {
    return $apiClient.post<CheckBotResponseDto>("bot/check-bot", reqBody);
  }
}

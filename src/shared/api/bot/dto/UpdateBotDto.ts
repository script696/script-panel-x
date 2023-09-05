import { BotApi } from "shared/api/bot/typedef";

export interface UpdateBotRequestDto {
  shopName: string;
  helloText: string;
}

export interface UpdateBotResponseDto extends BotApi {}

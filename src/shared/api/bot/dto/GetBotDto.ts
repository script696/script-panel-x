import { BotApi } from "shared/api/bot/typedef";

export interface GetBotRequestDto {
  botName: string;
}

export interface GetBotResponseDto extends BotApi {}

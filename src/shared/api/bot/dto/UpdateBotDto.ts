import { BotApi } from "shared/api/bot/typedef";

export interface UpdateBotRequestDto {
  mainInfo?: {
    shopName: string;
    helloText: string;
  };
  colorTheme?: {
    bgMain: string;
    bgLight: string;
    bgDark: string;
    primaryColor: string;
    secondaryColor: string;
    alternateColor: string;
  };
}

export interface UpdateBotResponseDto extends BotApi {}

export interface BotApi {
  id: string;
  name: string;
  owner: string;
  mainInfo: { shopName: string; helloText: string };
  colorTheme: { bgMain: string; bgLight: string; bgDark: string };
}

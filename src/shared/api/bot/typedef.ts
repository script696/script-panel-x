export interface BotApi {
  id: string;
  name: string;
  owner: string;
  mainInfo: { shopName: string; helloText: string };
}

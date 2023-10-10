export interface User {
  id: string;
  nikName: string;
  bot: { name: string; botToken: string; appUrl: string };
  role: "system-admin" | "admin" | "user";
}

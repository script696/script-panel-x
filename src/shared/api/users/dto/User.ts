export interface User {
  id: string;
  nikName: string;
  bot: { name: string };
  role: "system-admin" | "admin" | "user";
}

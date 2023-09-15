export const getStaticUrl = (staticUrl: string) => {
  const apiUrl = process.env["REACT_APP_API_URL"];
  const stage = process.env["REACT_APP_STAGE"];

  const fullStaticUrl = stage === "local" ? `${apiUrl}/${staticUrl}` : `${apiUrl}/static/${staticUrl}`;

  return fullStaticUrl;
};

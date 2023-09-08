const XOMI_BOT_CRED = { nikName: "xomi", password: "1111" };
const ALPHA_BOT_CRED = { nikName: "alpha", password: "1111" };

export const handleClickBotCard = (testBot: "xomi" | "alpha" | "request") => {
  if (testBot === "xomi" || testBot === "alpha") {
    const testBotCred = testBot === "xomi" ? XOMI_BOT_CRED : ALPHA_BOT_CRED;
    forceSetFormValue(testBotCred);
  } else {
    window.open("https://t.me/script696", "_blank");
  }
};

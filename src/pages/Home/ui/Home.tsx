import React from "react";
import { IphoneTemplate } from "shared/components/IphoneTemplate";

const Home = () => {
  return (
    <React.Fragment>
      <IphoneTemplate>
        <iframe
          src={"http://localhost:4000?botName=Nikita"}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </IphoneTemplate>
    </React.Fragment>
  );
};

export default Home;

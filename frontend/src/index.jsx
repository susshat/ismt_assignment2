import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
      <RecoilRoot>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);

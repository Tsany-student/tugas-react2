import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// import Counter from "./Counter/Counter";
// import Counterapp from "./Counter/Counterapp";
// import Alert from "./Alert/Alert";
import Contact from "./contact/Contactfrom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      {/* <Counter />
      <Counter />
      <Counterapp /> */}
      <Contact />
      {/* <Alert text="Coba pencet" message="Noh kan berubah" /> */}
    </div>
  </StrictMode>
);

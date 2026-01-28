import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyButton from "./Button/MyButton";
import Toolbar from "./Button/Toolbar";
import SearchForm from "./Form/SearchFrom";
import SayHelloForm from "./Form/SayHelloForm";
import Counter from "./Form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <MyButton text="Smash me" onSmash={() => alert("You smash me")} />
      <MyButton text="Hit me" onSmash={() => alert("You hit me")} />
        <Toolbar onClick={(e) =>
        e.stopPropagation() ||
          alert("You click me")} />
          <SearchForm/>
          <SayHelloForm/>
          <Counter/>
  </StrictMode>
);

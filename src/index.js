import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
const store = createStore(counter);

const app = document.querySelector("#app");

const count = document.createElement("div");
count.innerText = store.getState();
count.id = "count";
app.append(count);

const incBtn = document.createElement("button");
incBtn.innerText = "+";
incBtn.onclick = () => store.dispatch({ type: "INCREMENT" });
app.append(incBtn);

const decBtn = document.createElement("button");
decBtn.onclick = () => store.dispatch({ type: "DECREMENT" });
decBtn.innerText = "-";
app.append(decBtn);

const resetBtn = document.createElement("button");
resetBtn.onclick = () => store.dispatch({ type: "RESET" });

resetBtn.innerText = "reset";
app.append(resetBtn);

const render = () => {
  document.querySelector("#count").innerText = store.getState();
};

store.subscribe(render);

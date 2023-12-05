import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["have meal", "read"],
    Doing: ["running", "cook"],
    Done: ["study"],
  },
});

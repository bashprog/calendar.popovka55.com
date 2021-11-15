import { atom } from "jotai";
import Auth from "./helpers/auth";

export const tableViewAtom = atom(true);

export const authAtom = atom(Auth);

export const popUpObject = atom({
    visible: false,
    success: true,
    object: "fly"
});
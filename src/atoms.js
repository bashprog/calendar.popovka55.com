import { atom } from "jotai";
import Auth from "./helpers/auth";

export const userAtom = atom({});

export const diapason = atom(true);

export const authAtom = atom(Auth);
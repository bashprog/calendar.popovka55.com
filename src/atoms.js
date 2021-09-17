import { atom } from "jotai";
import Auth from "./helpers/auth";

import {getCookie} from "./helpers/cookie";

export const tableViewAtom = atom(true);

export const authAtom = atom(Auth);
import { createContext } from "react";

import { translations } from "../translations";

export const LanguageContext = createContext(translations.english);
import {Language} from "./languages.interface";

export interface TransliterationOptions {
  to: "eng" | 'geo',
  language?: Language
}

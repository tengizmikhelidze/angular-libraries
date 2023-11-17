import {Language} from "./languages.interface";

export interface TransliterationOptions {
  to: "lat" | 'geo',
  language?: Language
}

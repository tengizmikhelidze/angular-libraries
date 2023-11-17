import {Language} from "./languages.interface";

export interface TransliterationOptions {
  to: "lat" | 'geo',
  from: "lat" | 'geo',
  language?: Language
}

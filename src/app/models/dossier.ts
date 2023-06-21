import {User} from "./user";

export interface Dossier {
  nom: string;
  tag: string[];
  owner: User;
  content : File[]
}

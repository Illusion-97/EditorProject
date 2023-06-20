import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // ...args récupère autant d'arguments que passés lors de l'appel sans pour autant les rendre obligatoires
  // les déclarer en tant que paramètres de la fonction, non seulement les rend obligatoires
  // mais ajoute également une vérification sur le type
  transform(value: string, limit: number, suffix: string): string { // le type de retour du pipe est à renseigner
    // le premier argument est toujours la valeur à transformer
    // les suivants sont les arguments
    return value.length > limit ? value.substring(0,limit) + suffix : value;
  }

}

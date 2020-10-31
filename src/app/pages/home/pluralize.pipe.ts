import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'plural'})
export class PluralPipe implements PipeTransform {

  /**
   * Pluralize or singularize a word based on count argument.
   * @param singular
   * @param plural
   * @param count
   * @returns {string}
   */
  transform(value: string, singular: string, plural: string, count: number | string, zeroAsSingular = false) {
    if (Number(count) === 0 && zeroAsSingular) {
      return singular;
    } else if ( Number(count) === 0 ) {
      return plural;
    }

    return Number(count) === 1 ? singular : plural;
  }

}

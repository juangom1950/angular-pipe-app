import { Pipe, PipeTransform } from "@angular/core";

// fernando | toggleCase  = 'FERNANDO'
// FERNANDO | toggleCase  = 'fernando'

// To tell Angular the existence of this Pipe, we need to add it to
// the "declaration" of the "products.module.ts"
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}

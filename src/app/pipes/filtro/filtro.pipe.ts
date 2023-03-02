import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], buscar: string): any {
    const resultadoFiltrado = [];
    if(value.length === 0 || buscar === '') {
      resultadoFiltrado.length = 0
      return value;
    } else {
      for(const post of value) {
        if(post.name.indexOf(buscar) > -1) {
          resultadoFiltrado.push(post);
        }
      }
      return resultadoFiltrado;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Party } from './party.model';

@Pipe({
  name: 'listfilter'
})
export class ListfilterPipe implements PipeTransform {

  transform(partyList: Party[], args?: any): any {
    for (let name in args) {
      if (args.hasOwnProperty(name)) {
        partyList = partyList.filter(party => party[name]);
      }
    }
    return partyList;
  }
}

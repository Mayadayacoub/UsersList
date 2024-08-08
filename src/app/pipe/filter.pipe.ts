import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/users';

@Pipe({
  name: 'filterById',
})
export class FilterByIdPipe implements PipeTransform {
  transform(users: User[], searchText: number): User[] {
    if (!users || !searchText) {
      return users;
    }
    return users.filter((user) => user.id === searchText);
  }
}

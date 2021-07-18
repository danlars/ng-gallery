import {Component, OnInit} from '@angular/core';
import {FormService} from '../../services/form/form.service';
import {UsersService} from '../../store/users/users.service';
import {Observable} from 'rxjs';
import {UserInterface} from '../../interfaces/user.interface';
import {NotificationService} from '../../modules/notification/notification.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<UserInterface[]>;

  constructor(
    private readonly usersService: UsersService,
    private readonly formService: FormService,
    private readonly notificationService: NotificationService
  ) {
    this.users$ = this.usersService.users$;
  }

  ngOnInit(): void {
    this.usersService.getAllUsers();
  }

  openForm(user: UserInterface | null = null) {
    this.formService.openUserForm({user});
  }

  async removeUser(user: UserInterface) {
    const confirm = await this.notificationService.alert('Remove User', `Are you sure you want to remove the user ${user.name}?`);
    if (confirm) {
      this.usersService.removeUser(user);
    }
  }
}

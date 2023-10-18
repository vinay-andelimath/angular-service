import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.users=this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.setToInactive(id);
  }
}
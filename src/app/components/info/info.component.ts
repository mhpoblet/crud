import { Component, OnInit } from '@angular/core';
import {InfoServiceService} from '../../info-service.service'
import { User } from './user1';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  users: User[];

  constructor(private service: InfoServiceService) { }

  deleteUser(id) {
    this.service.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.service.getUsers().subscribe((data: User[])=> {this.users = data;
    });
  }

}

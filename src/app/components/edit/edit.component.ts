import { Component, OnInit } from '@angular/core';
import { User } from '../info/user1';
import {ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoServiceService } from '../../info-service.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: any = {};
  grpForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private service: InfoServiceService, private foB: FormBuilder) { this.createForm();}

  createForm() {
    this.grpForm = this.foB.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      zipcode: ['', Validators.required],

    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
    this.service.editUser(params['id']).subscribe(res => {
    this.user = res;
    });
    });
  }

  updateUser(name, email, birthday, zipcode) {
    this.route.params.subscribe(params => {
      this.service.updateUser(name, email, birthday, zipcode, params['id']);
      this.router.navigate(['index']);
    })
  }
}

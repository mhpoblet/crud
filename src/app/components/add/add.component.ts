import { Component, OnInit } from '@angular/core';
import {InfoServiceService} from '../../info-service.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  grpForm: FormGroup;

  constructor(private myservice:InfoServiceService, private fb: FormBuilder) {
    this.createForm();
  }

createForm()
{ this.grpForm = this.fb.group({
  name: ['', Validators.required ],
  email: ['', Validators.required ],
  birthday: ['', Validators.required ],
  zipcode: ['', Validators.required ]
});
}

addUser(name, email, birthday, zipcode) {
  this.myservice.addUser(name, email, birthday, zipcode);
}


  ngOnInit() {
  }

}

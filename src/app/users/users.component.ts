import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userData = []
  inputArr = 0
  open: boolean = false
  quantity = []
  hideForm = false
  closeFormOld = -1
  closeFormNew = -1

  constructor() { }



  ngDoCheck() {
    if (this.closeFormOld !== this.closeFormNew) {

      this.closeFormNew = this.closeFormOld

      this.inputArr--
    }
    if (this.inputArr) {
      for (let i = 0; i < this.inputArr; i++) {
        let n = []
        n[i] = i
        this.quantity = n
      }
    }
  }
  createForms() {
    this.open = true
  }




  ngOnInit() {
  }
  submitted(userForm, i) {
    this.userData[i] = userForm
    console.log(this.userData)

    if (this.userData.length === this.quantity.length) {
      this.hideForm = true
    }
  }
  close(i) {
    this.closeFormOld = i
  }
}

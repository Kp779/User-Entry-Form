import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/service.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  editUserData: any = {};

  constructor(private router: Router, private activateRoute: ActivatedRoute, public userService: ServiceService) { }

  username: any;
  editUserId: any=0;
  recievedId: any = 0;
  users: any
  isedit: boolean = false;
  userForm = new FormGroup({
    firstName: new FormControl(),
    middleName: new FormControl(),
    lastName: new FormControl(),
    id: new FormControl(),
    userRole: new FormControl(),
    userType: new FormControl(),
    email: new FormControl(),
    address_l1: new FormControl(),
    address_l2: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    mobileNumber: new FormControl(),
    officePhone: new FormControl(),
    pictureFile: new FormControl()
  })

  ngOnInit() {
    this.activateRoute.params.subscribe(((params: Params) => {
      this.recievedId = params['id']
    }))
    this.getUserById(this.recievedId);
  }

  saveUserDetails(userForm: any) {
    this.userService.postUsersData(this.userForm.value).subscribe((res => {
      this.router.navigateByUrl('user-list')
    }))
  }

  getUserById(id: any) {
    this.userService.getUsersDataById(id).subscribe((res => {
      this.editUserData = res;
      this.isedit=true;
      this.userForm.setValue({
        firstName: this.editUserData.firstName,
        middleName: this.editUserData.middleName,
        lastName: this.editUserData.lastName,
        id: this.editUserData.id,
        userRole: this.editUserData.userRole,
        userType: this.editUserData.userType,
        email: this.editUserData.email,
        address_l1: this.editUserData.address_l1,
        address_l2: this.editUserData.address_l2,
        city: this.editUserData.city,
        state: this.editUserData.state,
        zipCode: this.editUserData.zipCode,
        mobileNumber: this.editUserData.mobileNumber,
        officePhone: this.editUserData.officePhone,
        pictureFile: this.editUserData.pictureFile
      })
    }))
  }

  editUserDetails(user:any){
    console.log('edit user data button enabled')
    this.editUserData =user;
    this.editUserId = this.editUserData.value.id
    this.userService.editUsersData(this.editUserId,this.editUserData.value).subscribe((res=>{
      this.router.navigateByUrl('user-list')
    }))
  }

  backToHome() {
    this.router.navigateByUrl('user-list');
  }
}

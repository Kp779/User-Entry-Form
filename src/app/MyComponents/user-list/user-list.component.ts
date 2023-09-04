import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ServiceService } from 'src/app/service.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userList: any = [];
  userEdit: any ={};
  userForm:boolean=false;
  constructor
  (public userService: ServiceService,
    private router:Router) { }

  ngOnInit() {
    this.userService.getUsersData().subscribe((res => {
      this.userList = res; 
    }))
  }

  addUser(add:any){
    this.userService.postUsersData(add)
  .subscribe(myData => this.userList.push(myData));
   }

  deleteUser(id:any ,user: any){
    alert("delete?")
    this.userService.deleteUserData(id, user).subscribe((res=>{
      const deletedUserIndex = this.userList.indexOf(user);
      this.userList.splice(deletedUserIndex,1);
    }))
  }
  editUser(user:any){
    this.router.navigateByUrl('/addNewUser/'+user.id);
    this.userEdit=user ;
  }
}

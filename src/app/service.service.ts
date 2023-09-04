import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
url="http://localhost:3000/users"
  getUsersData(){
   return this.http.get(this.url)
  }
  getUsersDataById(id:any){
    return this.http.get(`${this.url}/${id}`)
   }
  postUsersData(user:any){
    return this.http.post(this.url,user)
  }
  editUsersData(id: any, users: any){
    return this.http.put(`${this.url}/${id}`,users)
  }
  deleteUserData(id:any, user:any){
    return this.http.delete(`${this.url}/${id}`,user)
  }
}

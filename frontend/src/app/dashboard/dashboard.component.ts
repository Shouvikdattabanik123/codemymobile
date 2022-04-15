import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentFriend:string ='';
  users:any[]=[];
  page:number=1;
  size:number=10;
  nextPageDisable:boolean=false;
  previousPageDisable:boolean=true;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getFriendsList();
  }

  getFriendsList(){
    this.userService.getFriendsList(this.page,this.size).subscribe((data)=> this.users = data);
  }

  getFriendsListByUser(user:any){
    this.currentFriend=`${user.first_name} ${user.last_name}`;
    this.userService.getFriendsListByUser(user.id).subscribe((data: any[])=> this.users = data);
  }

  nextPage(){
    this.previousPageDisable=false;
    this.page++;
    this.getFriendsList();
    if(this.page * this.size === 50){
      this.nextPageDisable = true;
    }
  }

  previousPage(){
    this.nextPageDisable=false;
    this.page--;
    this.getFriendsList();
    if(this.page === 1){
      this.previousPageDisable = true;
    }
  }

  onPageSizeChange(size: number){
    this.size=size;
    this.getFriendsList();
  }

  goHome(){
    this.page=1;
    this.nextPageDisable=false;
    this.previousPageDisable=true;
    this.getFriendsList();
  }

}

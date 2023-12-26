import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router) { }
  showLogin:boolean=true;
  authError:string='';
  ngOnInit():void{
    this.seller.reloadSeller()
  }

  signUp(data: signUp): void {
    console.warn(data)
    this.seller.userSignUp(data)
  }

  login(data: login): void{
    this.authError="";
    // console.warn(data)
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not correct";
      }
    })
  }

  openLogin(){
    this.showLogin=true;
  }
  openSignup(){
    this.showLogin=false;
  }
}

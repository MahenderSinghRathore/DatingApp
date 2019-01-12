import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { modelGroupProvider } from "@angular/forms/src/directives/ng_model_group";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("logged in successfully");
      },
      err => {
        console.log("login failed");
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logOut() {
    localStorage.removeItem("token");
    console.log("logged out!");
  }
}

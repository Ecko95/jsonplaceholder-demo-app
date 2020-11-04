import { MAT_STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [
    {
      provide: MAT_STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class HomeComponent implements OnInit {
  formGroup = new FormGroup({ secondCtrl: new FormControl("") });
  constructor() {}
  isLinear: boolean = false;

  ngOnInit() {}
}

import { MAT_STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import Stepper from "bs-stepper";

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
  name = "Angular";
  private stepper: Stepper;

  isEditable = false;
  next() {
    this.stepper.next();
  }

  interests = [];

  formGroup = new FormGroup({ secondCtrl: new FormControl("") });
  constructor() {}

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });

    this.interests = [
      { value: "reading", viewValue: "Reading" },
      { value: "swimming", viewValue: "Swimming" },
      { value: "cycling", viewValue: "Cycling" }
    ];
  }
}

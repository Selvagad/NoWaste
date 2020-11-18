import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  isChecked = true;
  categories1 = [
    {
      gaugeType : "arch",
      gaugeValue : 42,
      gaugeLabel : "Canettes aluminium",
      gaugeAppendText : "%",
    },
    {
      gaugeType : "arch",
      gaugeValue : 76,
      gaugeLabel : "Emballage carton",
      gaugeAppendText : "%",
    }
  ];
  categories2 = [
    {
      gaugeType : "arch",
      gaugeValue : 67,
      gaugeLabel : "Bouteille plastique",
      gaugeAppendText : "%",
    },
    {
      gaugeType : "arch",
      gaugeValue : 28.3,
      gaugeLabel : "Non trié",
      gaugeAppendText : "%",
    },
  ];
  constructor() {}

  getColor(value: any) {
    console.log(value)
    if (value>0 && value<=50) {
      return 'green';
    } else if (value>50 && value<=75) {
      return 'orange';
    } else if (value>75 && value<=100) {
      return 'red';
    }
  }
  callTri(){
    console.log("centre")
  }
  callTech (){
    console.log("tech")
  }
  ngOnInit() {
  }
}

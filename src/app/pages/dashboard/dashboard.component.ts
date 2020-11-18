import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  categories1 = [
    {
      gaugeType : "arch",
      gaugeValue : 42,
      gaugeLabel : "Canettes aluminium",
      gaugeAppendText : "%",
    },
    {
      gaugeType : "arch",
      gaugeValue : 70,
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

  ngOnInit() {
  }
}

import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { Contenu } from 'src/app/Model/contenu';
import { ObjetTrieRepositoryService } from 'src/app/service/objet-trie-repository.service';

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
      gaugeLabel : "Gobelets carton",
      gaugeAppendText : "%",
    }
  ];
  categories2 = [
    {
      gaugeType : "arch",
      gaugeValue : 67,
      gaugeLabel : "Bouteilles plastique",
      gaugeAppendText : "%",
    },
    {
      gaugeType : "arch",
      gaugeValue : 28.3,
      gaugeLabel : "Non trié",
      gaugeAppendText : "%",
    },
  ];
  constructor(private toastr: ToastrService, private _objetTrie: ObjetTrieRepositoryService) {}

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

  showNotification(from, align, centre){
    let tri: string;
    if (centre === 'tri') {
      tri = 'Centre de tri';
    } else {
      tri = "Centre technique";
    }

    this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Nous venons d\'alerter le <b>'+ tri +'</b> de votre demande de collecte.',
     '', {
        timeOut: 2000,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-' + from + '-' +  align
      });
  }

  fill() {
    this.categories1.forEach(element => {
      if(element.gaugeValue <= 90) {
        element.gaugeValue += 10;
      } else if (element.gaugeValue > 90 && element.gaugeValue < 100) {
        element.gaugeValue = 100;
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> La benne <b>'+ element.gaugeLabel +'</b> est pleine.',
        '', {
            timeOut: 2000,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: 'toast-bottom-center'
          });
        
        if (this.isChecked) {
          this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Nous venons d\'alerter le <b>Centre de tri</b> de votre demande de collecte.',
        '', {
            timeOut: 2000,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: 'toast-bottom-center'
          });
        }
      }
    });
    this.categories2.forEach(element => {
      if(element.gaugeValue <= 90) {
        element.gaugeValue += 10;
      } else if (element.gaugeValue > 90 && element.gaugeValue < 100) {
        element.gaugeValue = 100;
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> La benne <b>'+ element.gaugeLabel +'</b> est pleine.',
        '', {
            timeOut: 2000,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: 'toast-bottom-center'
          });

      if (this.isChecked) {
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Nous venons d\'alerter le <b>Centre de tri</b> de votre demande de collecte.',
      '', {
          timeOut: 2000,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-bottom-center'
        });
      }
      }
    });
  }
  
}

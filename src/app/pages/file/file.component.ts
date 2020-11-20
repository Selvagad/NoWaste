import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import * as tmImage from '@teachablemachine/image';
import { ObjetTrie } from 'src/app/Model/objet-trie';
import { ObjetTrieRepositoryService } from 'src/app/service/objet-trie-repository.service';



@Component({
  selector: "app-file",
  templateUrl: "file.component.html"
})

export class FileComponent implements OnInit {
  public canvas : any;
  public ctx;
  public myChart;
  public contenu = this._objetTrie.getContenu();
  public data=[this.contenu.nbBouteille, this.contenu.nbCannette, this.contenu.nbEmballage, this.contenu.nbInconnu]
  public gradientBarChartConfiguration: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{

        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 8,
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }],

      xAxes: [{

        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }]
    }
  };
  ngOnInit(): void {
    
    this.canvas = document.getElementById("CountryChart");
    this.ctx  = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['Bouteilles plastiques', 'Canettes', 'Gobelet carton', 'Non trié'],
        datasets: [{
          label: "Nombre d'objet",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [this.contenu.nbBouteille, this.contenu.nbCannette, this.contenu.nbEmballage, this.contenu.nbInconnu],
        }]
      },
      options: this.gradientBarChartConfiguration
    });
    
    
  }
  
  url = 'https://teachablemachine.withgoogle.com/models/S_obh6TEt/';
  model;
  predictions;
  webcam;
  maxPredictions;
  result: string;
  imagePath;
  imgURL: any;
  message: string;

  //@ViewChild('video', { static: false }) video: ElementRef;
  constructor(private _objetTrie: ObjetTrieRepositoryService){}
  async preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    
    await this.init();
    // predict
    var image = document.getElementById("face-image");
    this.predictions = await this.model.predict(image, false);
    let max = Math.max.apply(Math, this.predictions.map(function(val) {return val.probability}));
      let index = this.predictions.findIndex(
        element => element.probability === max
      );
      this.result = this.predictions[index].className;
      document.getElementById('result').style.display = 'block';
      console.log(this.result)
      this.setObjetTrie(this.result)
      this.addData()      
    
  }

  async init(){
    const modelURL = this.url + 'model.json';
    const metadataURL = this.url + 'metadata.json';
    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();
  }
  setObjetTrie(o){
    var objectToAdd =new ObjetTrie()
    if (o=="Canettes"){objectToAdd.setType ("cannette")}
    if (o=="Bouteilles plastiques"){objectToAdd.setType ("bouteille")}
    if (o=="Gobelet carton"){objectToAdd.setType ("emballage")}

    this._objetTrie.ajouter (objectToAdd)
    console.log(this._objetTrie.getContenu)
    this.contenu = this._objetTrie.getContenu();

  }
  addData() { 
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
    this.myChart = new Chart(this.ctx, {
    type: 'bar',
    responsive: true,
    legend: {
      display: false
    },
    data: {
      labels: ['Bouteilles plastiques', 'Canettes', 'Gobelet carton', 'Non trié'],
      datasets: [{
        label: "Nombre d'objet",
        fill: true,
        backgroundColor: gradientStroke,
        hoverBackgroundColor: gradientStroke,
        borderColor: '#1f8ef1',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: [this.contenu.nbBouteille, this.contenu.nbCannette, this.contenu.nbEmballage, this.contenu.nbInconnu],
      }]
    },
    options: this.gradientBarChartConfiguration
  });

    }


  // tslint:disable-next-line:use-lifecycle-interface
  async ngAfterViewInit() {
    // const modelURL = this.url + 'model.json';
    // const metadataURL = this.url + 'metadata.json';
    // this.model = await tmImage.load(modelURL, metadataURL);
    // this.maxPredictions = this.model.getTotalClasses();
    // Convenience function to setup a webcam
    // const flip = true; // whether to flip the webcam 
    // this.webcam = new tmImage.Webcam(200, 200, flip);
    // await this.webcam.setup(); // request access to the webcam
    // await this.webcam.play();
    // requestAnimationFrame(() =>
    //   this.loop()
    // );
    // this.video.nativeElement.appendChild(this.webcam.canvas);
  }

  // async loop() {
  //   this.webcam.update(); // update the webcam frame
  //   this.predictions = await this.model.predict(this.webcam.canvas, true);
  //   requestAnimationFrame(() =>
  //     this.loop()
  //   );
  // }
}
  

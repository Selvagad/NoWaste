import { Component, OnInit } from "@angular/core";
import * as tmImage from '@teachablemachine/image';



@Component({
  selector: "app-file",
  templateUrl: "file.component.html"
})

export class FileComponent implements OnInit {
  ngOnInit(): void {
    
  }
  url = 'https://teachablemachine.withgoogle.com/models/S_obh6TEt/';
  model;
  predictions;
  webcam;
  maxPredictions;

  imagePath;
  imgURL: any;
  message: string;

  //@ViewChild('video', { static: false }) video: ElementRef;

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
  }

  async init(){
    const modelURL = this.url + 'model.json';
    const metadataURL = this.url + 'metadata.json';
    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();
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
  

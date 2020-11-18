import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as tmImage from '@teachablemachine/image';

@Component({
  selector: "app-webcam",
  templateUrl: "webcam.component.html"
})
export class WebcamComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  url = 'https://teachablemachine.withgoogle.com/models/S_obh6TEt/';
  model;
  predictions;
  webcam;
  maxPredictions;
  result: number;
  running = false;
  @ViewChild('video', { static: false }) video: ElementRef;

  // tslint:disable-next-line:use-lifecycle-interface
  async ngAfterViewInit() {
  }
  async init() {
    const modelURL = this.url + 'model.json';
    const metadataURL = this.url + 'metadata.json';
    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();
    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam 
    this.webcam = new tmImage.Webcam(200, 200, flip);
    await this.webcam.setup(); // request access to the webcam
    await this.webcam.play();
    this.running = true;
    requestAnimationFrame(() =>
      this.loop()
    );
    this.video.nativeElement.appendChild(this.webcam.canvas);
    document.getElementById('result').style.display = 'block';

  }
  disable() {
    this.running = false;
    this.webcam.pause();
    this.webcam.stop();
    this.video.nativeElement.removeChild(this.webcam.canvas);
    document.getElementById('result').style.display = 'none';
  }
  async loop() {
    if (this.running){
      this.webcam.update(); // update the webcam frame
      this.predictions = await this.model.predict(this.webcam.canvas, true);
      let max = Math.max.apply(Math, this.predictions.map(function(val) {return val.probability}));
      let index = this.predictions.findIndex(
        element => element.probability === max
      );
      this.result = this.predictions[index].className;
      console.log(this.result)
      requestAnimationFrame(() =>
        this.loop()
      );
    }
  }
}

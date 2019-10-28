import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options: BarcodeScannerOptions;
  encodedText:string = '';
  encodedData:any = {};
  scannedData:any= {};
  constructor(private navCtrl:NavController, public scanner:BarcodeScanner) {

  }

  scan(){
    this.options = {
      prompt:"Scan  your barcode"
    }
    this.scanner.scan().then((data)=> {
      this.scannedData = data;
    }, (err) => {
      console.log("Error: "+err);
    });
  }
  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.encodedText).then((data)=> {
      this.encodedData = data;
    }, (err) => {
      console.log("ERror: "+err)
    });

  }

}

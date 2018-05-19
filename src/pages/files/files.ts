import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { config } from "../../app/app.module";
import { File } from "@ionic-native/file";
import { FileChooser } from '@ionic-native/file-chooser';
import { config } from "../../app/app.module";


@IonicPage()
@Component({
  selector: 'page-files',
  templateUrl: 'files.html',
})
export class FilesPage {

  constructor(public navCtrl: NavController,
              private fileChooser: FileChooser,
              private file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesPage');
  }
  async upload(buffer, name){
    let blob = new Blob([buffer], {
      type: "image/jpeg"
    });
    let storage = config.storageBucket;
    storage.ref('images/' + name).put(blob).then((d) => {
      alert("Done !");
    }).catch((error) => {
      alert(JSON.stringify(error))
    })
  }
  saveFile(){
    this.fileChooser.open().then((uri) =>
      {
        alert(uri);
        this.file.resolveLocalFilesystemUrl(uri).then((newUrl) =>{
          alert(JSON.stringify(newUrl));
          let dirPath = newUrl.nativeURL;
          let dirPathSegments = dirPath.split('/');
          dirPathSegments.pop();
          dirPath = dirPathSegment.join('/');
          this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async (buffer) => {
            await this.upload(buffer, newUrl.name);
          })
        })
      })
  }
  /*
  getFileUrl(){
    config.storageBucket().ref().child('images/')
  }
*/

}

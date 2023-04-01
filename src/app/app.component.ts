import { Component, OnInit , OnChanges , SimpleChanges} from '@angular/core';
import { LocalService } from './local.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


export interface IServeurData {
  id : number;
  ipAddress : string;
  name : string;
  sites : any;
  state?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title : string = 'mobiletic-test';
  searchQuery : string = '';
  serveurList : IServeurData[] = []
  newServer : string = '';

  constructor(private localStore: LocalService) {
    console.log("constructor called")

  }
  ngOnInit() {
    console.log("ngInit called")

    let tempData = this.localStore.getData('serveurs') ;
    if(tempData!==null){
      this.serveurList=  Object.values(JSON.parse(tempData))
    }else{
      fetch("https://angular-test042023.s3.eu-west-3.amazonaws.com/data-servers.json").then(reponse=> {
      reponse.json().then(data=> {
        this.serveurList= data
        this.localStore.saveData('serveurs',JSON.stringify(data.map((item : any)=> ({...item , state :false}))))


      }).catch((err)=> {console.log(err)})
    })
    }
    
     
  }

  
  onAddServer () {
    if(this.newServer !== ''){

      console.log(this.serveurList[0])
    }

  }




}

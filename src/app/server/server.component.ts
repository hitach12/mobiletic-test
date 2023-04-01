import { Component , Input} from '@angular/core';
import { IServeurData } from '../app.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  // @Input() id : number = -1 ;
  // @Input() ipAddress : string = '';
  // @Input() name : string = '';
  // @Input() sites : any [] = []
  @Input() serverData? : IServeurData 


  onstateChanged() {
    if(this.serverData?.state !== undefined){
      this.serverData.state = !this.serverData.state
    }
    
  }
}

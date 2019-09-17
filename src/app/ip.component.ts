import { Component } from '@angular/core';
import { IpService } from './ip.service'

@Component({
  selector: 'app-ip',
  template: '<h3>{{ip}}</h3>',
  providers:[IpService]
})
export class IpComponent {
    ip: String;
    constructor(private IpService: IpService){
       this.IpService.getIp()
       .then(res => this.ip = res)

       //Viết theo dạng tách service
    }
}

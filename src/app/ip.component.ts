import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service'

@Component({
  selector: 'app-ip',
  template: '<h3>{{ip}}</h3>',
  //providers:[IpService] //Nên chuyển Provider vào trong app module
})
export class IpComponent implements OnInit{
    ip: String;

    
    constructor(private IpService: IpService){
        //    this.IpService.getIp()
        //    .then(res => this.ip = res)
        
        //Viết theo dạng tách service
    }

    ngOnInit(): void {
        this.IpService.getIp()
        .then(res => this.ip = res)

        //Viết với ngOnInit
    }
}

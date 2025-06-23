import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTopServiceService } from './shared/services/scroll-top-service.service';
import { InfoService } from './info.service';
import { IContact } from './shared/interface/icontact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'friyoon';
  info:IContact = {} as IContact;
  constructor(private _infoService:InfoService) {}

  ngOnInit() {
    this.getInfo();
  }
  getInfo(){
    this._infoService.getInfo().subscribe({
      next:(res)=>{
        console.log('Info fetched successfully:', res.data);
        this.info = res.data;
      },

      error:(err)=>{
        console.log('Error fetching info:', err);
      }
    })
  }
}

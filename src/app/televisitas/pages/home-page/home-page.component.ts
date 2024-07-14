import { Component } from '@angular/core';
import { Location } from '../../interfaces/location.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  locations: Location[] = [
    {
      dormitory: 'A',
      module: '1',
      description: 'Dormitori A Modulo 1',
      terminal: {
        terminalNumber: "T977",
        mac: "xxxx.xxxx.xxxx",
        ip: "10.238.155.xx"
      }
    },
    {
      dormitory: 'A',
      module: '2',
      description: 'Dormitori A Modulo 1',
      terminal: {
        terminalNumber: "T977",
        mac: "xxxx.xxxx.xxxx",
        ip: "10.238.155.xx"
      }
    },
    {
      dormitory: 'A',
      module: '3',
      description: 'Dormitori A Modulo 1',
      terminal: null
    },
    {
      dormitory: 'A',
      module: '4',
      description: 'Dormitori A Modulo 1',
      terminal: {
        terminalNumber: "T977",
        mac: "xxxx.xxxx.xxxx",
        ip: "10.238.155.xx"
      }
    },
  ]

}

import { Component, OnInit } from '@angular/core';
import { IconsService } from './service/icons.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private iconService: IconsService) {
  }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}

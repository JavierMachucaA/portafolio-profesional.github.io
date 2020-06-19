import { Component, OnInit } from '@angular/core';
import { ConstantsUtils } from 'src/app/utils/constants.utils';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public constants = ConstantsUtils;
  
  constructor() { }

  ngOnInit() {
  }


}

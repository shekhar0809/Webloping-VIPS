import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private share: ShareService
  ) { 
    // let name = "disease name"
  }

  ngOnInit() {
  }

  // name = this.share.name;
}

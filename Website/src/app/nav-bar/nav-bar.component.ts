import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  elements = [
    {name: 'lungs'},
    {name: 'heart'},
    {name: 'eyes'},
    {name: 'kidneys'},
    {name: 'lungs'},
    {name: 'lungs'},
    {name: 'lungs'},
    {name: 'lungs'}
  ] 

  constructor(
    private router: Router,
    private share: ShareService
  ) { }

  ngOnInit() {
  }

  callPage(element) {
    const name = element.name;
    // this.share.name = name;
    this.router.navigate(['organ/' , name]);
  }

}

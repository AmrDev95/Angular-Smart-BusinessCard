import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit, OnDestroy {

  constructor (private contexts: ChildrenOutletContexts) { }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
  
  getRouteAnimationData() {
    console.log(this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']);
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}

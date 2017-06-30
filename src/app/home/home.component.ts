import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 

    title.setTitle('Elwin Home page');

    meta.addTags([ 
      {
        name: 'author', content: 'Elwin is Awesome'
      },
      {
        name: 'keywords', content: 'new Awesome Website'
      },
      {
        name: 'description', content: 'Awesome sample great description.'
      },
    ])

  }

  ngOnInit() {
  }

}

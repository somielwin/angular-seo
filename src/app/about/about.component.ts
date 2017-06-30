import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 

    title.setTitle('About avaitors');

    meta.addTags([ 
      {
        name: 'author', content: 'Elwin Dela Cruz'
      },
      {
        name: 'keywords', content: 'this is one of elwin awesome website.'
      },
      {
        name: 'description', content: 'this is the content description of the awesome website.'
      },
    ])

  }s

  ngOnInit() {
  }

}

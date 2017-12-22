import { Component, OnInit } from '@angular/core';
import { parse } from './parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // referencing the big file
    parse('', {});
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  constructor(private titleService: Title) { }
  name = '';
  table= '';

  tables = [
    {
      name: 'Table 1',
      number: 2,
      display: true
    },
    {
      name: 'Table 2',
      number: 2,
      display: true
    },
    {
      name: 'Table 3',
      number: 2,
      display: true
    },
    {
      name: 'Table 4',
      number: 2,
      display: true
    }
  ];

  tablespast = [{name:'',
          for:''}];

  ngOnInit() {
    this.titleService.setTitle('Account');
    this.freeTable('');
  }

  saveMyres() {
    this.tables.map(ele => {
      if(ele.name == this.table) {
        ele.display = false;
      }
    });
    
    this.tablespast.push({
      'name': this.table, 
      'for': this.name
    });
    console.log(this.name , this.table);
    this.name = '';
    this.table = '';
  }

  freeTable(tab: any) {
    console.log('freeTable:', tab);
    
    this.tables.map(ele => {
      if(ele.name == tab) {
        ele.display = true;
      }
    });
    this.tablespast = this.tablespast.filter(e => e.name != tab);
  }
}

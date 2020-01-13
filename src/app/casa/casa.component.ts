import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  data: any

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.loadXML().subscribe((data) => {  
      this.databaseService.parseXML(data)
        .then((data) => this.data = data)
    });
  }

}
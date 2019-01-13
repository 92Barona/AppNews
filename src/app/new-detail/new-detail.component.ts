import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})

export class NewDetailComponent implements OnInit {
  public Name: string;
  public Description: string;
  public DateArchived: string;

  public constructor(private route: ActivatedRoute) {
  }
  
  //Cargamos detalles de la noticia
  ngOnInit() { 
    this.Name = this.route.snapshot.paramMap.get('name');
    this.Description = this.route.snapshot.paramMap.get('description');
    this.DateArchived = this.route.snapshot.paramMap.get('dateArchived');
  }
}
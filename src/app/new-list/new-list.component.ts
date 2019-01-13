import { Component, OnInit } from '@angular/core';
import { New } from "../models/new";
import { Router } from '@angular/router';
import {Http } from '@angular/http';

@Component({
  selector: "new-list",
  templateUrl: "new-list.component.html",
  styleUrls: ['./new-list.component.css']
})

export class NewListComponent implements OnInit {
  public news: New[];
  public http;
  
  constructor(private router: Router, http: Http) {
    this.http = http;
  }

  //Cargamos todos las noticias que no están archivadas
  ngOnInit() {
    this.http.get('api/new')
    .subscribe(data => {
      this.news = data.json();
    })
  }

  //Vamos a la página de detalle de la noticia
  public onClickDetail(even,item) {
    this.router.navigate([`/new/${item}`, item]);

  }

  //Archivamos la noticia y recargamos la página
  public onClickArchive(even, item) {
    this.http.put('api/new', {id: item._id, name: item.name, archived: true, dateArchived: new Date()})
    .subscribe(data => {
      window.location.reload();
    })
  }
}
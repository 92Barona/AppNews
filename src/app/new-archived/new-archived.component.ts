import { New } from "../models/new";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Http } from '@angular/http';

@Component({
  selector: 'app-new-archived',
  templateUrl: './new-archived.component.html',
  styleUrls: ['./new-archived.component.css']
})

export class NewArchivedComponent implements OnInit {
  public http;
  public news: New[];

  constructor(private router: Router, http: Http) {
    this.http = http;
  }

  //Cargamos todas las noticias archivadas
  ngOnInit() {
    this.http.get('api/new/archived')
    .subscribe(data => {
      this.news = data.json();
    })
  }

  //Vamos a la página de detalle de la noticia
  public onClickDetail(even,item) {
    this.router.navigate([`/new/${item}`, item]);
  }

  //Eliminamos la noticia y recargamos página
  public onClickRemove(even,item) {
    this.http.delete(`api/new/${item._id}`)
    .subscribe(data => {
      window.location.reload();
    })
  }
}
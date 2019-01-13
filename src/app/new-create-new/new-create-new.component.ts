import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-create-new',
  templateUrl: './new-create-new.component.html',
  styleUrls: ['./new-create-new.component.css']
})

export class NewCreateNewComponent implements OnInit {
  public http;
  @Input() name: string;
  @Input() description: string;
  
  constructor(private router: Router, http: Http) { 
    this.http = http;
  }
  
  ngOnInit() {
  }

  //Creamos una nueva noticia con los datos del formulario
  public createNew() {
    this.http.post('/api/new', {name: this.name, description:this.description})
    .subscribe(data => {
      this.router.navigate(['/news']);
    });
  }
}

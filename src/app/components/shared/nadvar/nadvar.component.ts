import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nadvar',
  templateUrl: './nadvar.component.html',
})
export class NadvarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  buscarHeroe(termino: string){
    this.router.navigate(['/search', termino]);
  }
}

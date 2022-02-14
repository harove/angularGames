import { PotterService } from './../services/potter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potter',
  templateUrl: './potter.component.html',
  styleUrls: ['./potter.component.css']
})
export class PotterComponent implements OnInit {

  constructor(private potterService: PotterService) { }

  ngOnInit(): void {
    this.getPotter()
  }


  getPotter(){
    this.potterService.getPotter().subscribe(data=>{
      console.log(data)
    })
  }
}

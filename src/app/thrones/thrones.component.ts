import { ThronesService } from './../services/thrones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thrones',
  templateUrl: './thrones.component.html',
  styleUrls: ['./thrones.component.css']
})
export class ThronesComponent implements OnInit {

  constructor(private thronesService: ThronesService) { }

  thrones:any

  ngOnInit(): void {
    this.getThrones()
  }

  getThrones(){
    this.thronesService.getThrones().subscribe(data=>{
      this.thrones = data
    })
  }

}

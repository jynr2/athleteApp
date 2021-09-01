import { Component, OnInit } from '@angular/core';
import { AthleteInfoService } from 'src/app/services/athlete-info.service';

@Component({
  selector: 'app-medal-details',
  templateUrl: './medal-details.component.html',
  styleUrls: ['./medal-details.component.css']
})
export class MedalDetailsComponent implements OnInit {

  role = localStorage.getItem('role');
  GoldMedal : number = 0;
  SilverMedal : number = 0;
  BronzeMedal : number = 0;
  constructor(private athleteInfoService: AthleteInfoService) { }

  ngOnInit(): void {
    this.athleteInfoService.GetAthleteInfo().subscribe(res=>{
      res.forEach(medal=>{
        if (medal.gold != 0){
          this.GoldMedal = this.GoldMedal + medal.gold
        }
        if (medal.silver != 0){
          this.SilverMedal = this.SilverMedal + medal.silver
        }
        if (medal.bronze != 0){
          this.BronzeMedal = this.BronzeMedal + medal.bronze
        }
      })
    })
  }

  Description(category: string){
    window.alert(`this category is : ${category}`)
  }

}

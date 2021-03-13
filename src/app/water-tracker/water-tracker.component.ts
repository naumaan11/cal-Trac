import { Component, OnInit } from '@angular/core';
import { WaterTrackerService } from './water-tracker.service'

@Component({
  selector: 'app-water-tracker',
  templateUrl: './water-tracker.component.html',
  styleUrls: ['./water-tracker.component.css']
})
export class WaterTrackerComponent implements OnInit {
  waterGlass: any = [];
  waterGlassDetails = {
    waterGlass: 0
  };

  constructor(private water: WaterTrackerService) { }
  waterDetail() {
    this.water.getWaterDetail().subscribe((res => {
      this.waterGlass = res
    }))
  }

  addWater(water) {
    this.waterGlassDetails.waterGlass = water.value
   this.water.waterDetail(this.waterGlassDetails).subscribe((res => {
    window.alert(`${water.value} glass of added sucessfully`)
   }))
  }

  ngOnInit() {
  this.waterDetail()
  }

}

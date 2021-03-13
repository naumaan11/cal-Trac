import { Component, OnInit } from '@angular/core';
import { CalorieTrackerService } from './calorie-tracker.service';

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.css']
})
export class CalorieTrackerComponent implements OnInit {
  foods:any = [];
  breakfast:any =[];
  selectedFood = {
    foodName:''
  };
  breakfastLog;
  showToggle:boolean = false;

  constructor(private calorieTrack: CalorieTrackerService) { }

  getFood() {
    this.calorieTrack.getFood().subscribe((res)=> {
    this.foods = res
    })
  }
  breakFastoggle() {
    if(this.breakfast.length === 0) {
      this.showToggle = false;
    }
    if(this.breakfast.length > 0) {
       this.showToggle = !this.showToggle
    }
  }

  openBreakfastToggle() {
    if(this.breakfast.length === 0) {
      this.showToggle = false;
    }
    if(this.breakfast.length !== 0 && this.showToggle == false) {
       this.showToggle = !this.showToggle
    }

  }

  addBreakfast(foodName) {
    this.selectedFood.foodName = foodName;
     this.calorieTrack.postDetail(this.selectedFood).subscribe(res=>{
      window.alert(`${foodName} added sucessfully`)
     this.getBreakfast();
    })
  }

  getBreakfast() {
    this.calorieTrack.getLogFood().subscribe((res)=> {
    this.breakfast = res
    this.openBreakfastToggle()
    })
  }

  ngOnInit() {
    this.getBreakfast()
  }

}

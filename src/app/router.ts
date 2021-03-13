import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { CalorieTrackerComponent } from 'src/app/calorie-tracker/calorie-tracker.component';
import { WaterTrackerComponent } from 'src/app/water-tracker/water-tracker.component';

const router : Routes = [
    {
        path:'', component:LoginComponent
    },
    {
        path:'dashboard', component:DashboardComponent
    },
    {
        path:'CalorieTracker', component:CalorieTrackerComponent
    },
    {
        path:'waterTracker', component:WaterTrackerComponent
    }
]

export const RoutingModule = RouterModule.forRoot(router)
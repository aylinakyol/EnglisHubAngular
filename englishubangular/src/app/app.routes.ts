import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { TestsComponent } from './pages/tests/tests.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'levels/:topic', component: LevelsComponent },
    { path: 'tests/:topic/:level', component: TestsComponent },
];

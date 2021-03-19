import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule} from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import {MatSliderModule } from '@angular/material/slider';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import { YearSliderComponent } from './components/year-slider/year-slider.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    YearSliderComponent,
    FilterModalComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatSliderModule,
    NgxSliderModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    FilterModalComponent
  ],
})
export class SharedModule { }

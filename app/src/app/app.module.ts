import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { HomeComponent } from './pages/home/home.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { DetailComponent } from './components/detail/detail.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentComponent } from './components/component/component.component';
import { CardComponent } from './components/card/card.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { StageComponent } from './components/stage/stage.component';
import { MatButtonModule } from '@angular/material/button'
import { ComponentBoxComponent, Dialog } from './components/includes/component-box/component-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from './components/includes/form/form.component';
import { TextareaComponent } from './components/includes/textarea/textarea.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArticleComponent } from './components/article/article.component';
import { RoketComponent } from './components/roket/roket.component'

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    HomeComponent,
    DetailComponent,
    ComponentComponent,
    CardComponent,
    StageComponent,
    ComponentBoxComponent,
    Dialog,
    FormComponent,
    TextareaComponent,
    NotFoundComponent,
    ArticleComponent,
    RoketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

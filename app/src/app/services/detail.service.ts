import { Injectable } from '@angular/core';
import { Component } from '../models/component';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor() { }

  detail: Detail = {
    height: 100,
    width: 100
  }

  component: Component = {
    detail: this.detail,
    type: 'engine',
    weight: 100,
    thickness: 10,
    name: 'Двигатель'
  } 

}
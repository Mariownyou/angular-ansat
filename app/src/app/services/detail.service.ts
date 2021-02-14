import { Injectable } from '@angular/core';
import { Component } from '../models/component';
import { Detail } from '../models/detail';
import { Stage } from '../models/stage';

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
    thickness: 3,
    name: 'Двигатель'
  } 
  
  stage: Stage = {
    components: [],
    weight: 0
  }

  addComponent(component: Component) {
    this.stage.components.push(component)
  }

  getStageWeight(): number {
    let weight = 0
    for (let component of this.stage.components) {
      weight += parseInt(component.weight)    
    }
    this.stage.weight = weight
    return weight
  }
  
  getStageJson(): string {
    return JSON.stringify(this.stage, null, "   ") 
  }

  getStage(): Stage {
    return JSON.parse(this.getStageJson())
  }

  setStage(stage) {
    console.log(this.stage)
    this.stage = JSON.parse(stage)
    console.log(this.stage)
  }

  setCopmonents(components) {
    this.stage.components = components
    this.getStageWeight()
  }

}
import { Injectable } from '@angular/core';
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

}
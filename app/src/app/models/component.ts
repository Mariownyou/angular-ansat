import { Detail } from "./detail";

export interface Component {
    name?: string,
    detail: Detail
    //type: 'engine' | 'cargo' | 'fuel' | 'other'
    type: any
    weight: any
    thickness: number
}
import { Injectable } from '@angular/core';
import { Tooth, ToothVM } from './tooth.model';

@Injectable()
export class JawService {

  // tslint:disable
  createDefaultTeethArray(): Array<Tooth> {
    const teethModels: Array<ToothVM> = [
      {
        id: 11,
        isFront: true,
        highlightPath: 'M104.78,27c.35,5.06-2.67,9.9-6.72,10.76s-8.78-2.33-10.52-7.09l-3-8.24a7.79,7.79,0,0,1,5.85-10.58L94.52,11a7.79,7.79,0,0,1,9.65,7.27Z',
        shadowPath: 'M102.75,24.84c.34,5-2,9.62-5.26,10.31s-7.29-2.58-9-7.27l-1.24-3.4a7.88,7.88,0,1,1,15.26-3.25Z',
        labelTransform: 'translate(88.16 27.56)'
      },
      {
        id: 28,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 48,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
    ];

    return teethModels;
  }
}

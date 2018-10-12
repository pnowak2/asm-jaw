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
        id: 12,
        isFront: true,
        highlightPath: 'M104.78,27c.35,5.06-2.67,9.9-6.72,10.76s-8.78-2.33-10.52-7.09l-3-8.24a7.79,7.79,0,0,1,5.85-10.58L94.52,11a7.79,7.79,0,0,1,9.65,7.27Z',
        shadowPath: 'M102.75,24.84c.34,5-2,9.62-5.26,10.31s-7.29-2.58-9-7.27l-1.24-3.4a7.88,7.88,0,1,1,15.26-3.25Z',
        labelTransform: 'translate(88.16 27.56)'
      },
      {
        id: 13,
        isFront: true,
        highlightPath: 'M104.78,27c.35,5.06-2.67,9.9-6.72,10.76s-8.78-2.33-10.52-7.09l-3-8.24a7.79,7.79,0,0,1,5.85-10.58L94.52,11a7.79,7.79,0,0,1,9.65,7.27Z',
        shadowPath: 'M102.75,24.84c.34,5-2,9.62-5.26,10.31s-7.29-2.58-9-7.27l-1.24-3.4a7.88,7.88,0,1,1,15.26-3.25Z',
        labelTransform: 'translate(88.16 27.56)'
      },
      {
        id: 14,
        isFront: false,
        highlightPath: 'M48.5,54.66l5.59,2.63c4,1.87,5.57,6.92,3.54,11.22l-1.81,3.86c-2,4.31-6.93,6.3-10.9,4.44l-5.59-2.63C34.68,72,32.4,66.89,34.11,62.66c.06-.14.11-.27.18-.41L36.1,58.4l.2-.4C38.47,54,43.86,52.48,48.5,54.66Z',
        shadowPath: 'M48.5,54.66l8.55,4c4.8,2.25,7.06,7.62,5,11.93l-1.81,3.86c-2,4.31-7.6,6-12.39,3.73l-8.55-4C34.68,72,32.4,66.89,34.11,62.66c.06-.14.11-.27.18-.41L36.1,58.4l.2-.4C38.47,54,43.86,52.48,48.5,54.66Z',
        labelTransform: 'translate(40.51 70.63)'
      },
      {
        id: 15,
        isFront: false,
        highlightPath: 'M36.69,76.15,43,78.37c4.5,1.57,6.78,6.85,5.08,11.73l-1.53,4.37c-1.71,4.88-6.78,7.58-11.28,6L29,98.26C23.71,96.42,20.68,91.16,22,86.4c0-.15.09-.31.15-.46l1.53-4.37c.05-.15.11-.3.17-.45C25.79,76.54,31.44,74.31,36.69,76.15Z',
        shadowPath: 'M36.69,76.15l9.68,3.39c5.43,1.9,8.47,7.44,6.77,12.32l-1.53,4.37c-1.71,4.88-7.54,7.32-13,5.42L29,98.26C23.71,96.42,20.68,91.16,22,86.4c0-.15.09-.31.15-.46l1.53-4.37c.05-.15.11-.3.17-.45C25.79,76.54,31.44,74.31,36.69,76.15Z',
        labelTransform: 'translate(29 92.1)'
      },
      {
        id: 16,
        isFront: false,
        highlightPath: 'M27.59,100.38l6.93,1.84c4.92,1.3,7.78,6.73,6.37,12.07l-1.27,4.78c-1.41,5.33-6.59,8.63-11.51,7.32l-6.93-1.84c-5.74-1.52-9.4-6.87-8.33-12.05,0-.17.07-.34.12-.5l1.27-4.78c0-.17.1-.33.15-.49C16,101.69,21.85,98.86,27.59,100.38',
        shadowPath: 'M27.59,100.38l10.58,2.81c5.94,1.57,9.63,7.22,8.22,12.56l-1.27,4.78c-1.41,5.33-7.42,8.41-13.36,6.83l-10.58-2.81c-5.74-1.52-9.4-6.87-8.33-12.05,0-.17.07-.34.12-.5l1.27-4.78c0-.17.1-.33.15-.49C16,101.69,21.85,98.86,27.59,100.38Z',
        labelTransform: 'translate(21 117.07)'
      },
      {
        id: 17,
        isFront: false,
        highlightPath: 'M20.26,127l7.5,1.06c5.33.76,9,6.09,8.19,11.87l-.73,5.17c-.82,5.78-5.84,9.88-11.17,9.13l-7.5-1.06c-6.22-.88-10.73-6-10.25-11.61,0-.18,0-.36.06-.54l.73-5.17c0-.18.06-.36.09-.54C8.28,129.77,14,126.08,20.26,127Z',
        shadowPath: 'M20.26,127l11.46,1.63c6.43.91,11,6.38,10.19,12.15l-.73,5.17c-.82,5.78-6.74,9.75-13.17,8.84l-11.46-1.63c-6.22-.88-10.73-6-10.25-11.61,0-.18,0-.36.06-.54l.73-5.17c0-.18.06-.36.09-.54C8.28,129.77,14,126.08,20.26,127Z',
        labelTransform: 'translate(15.46 144.05)'
      },
      {
        id: 18,
        isFront: false,
        highlightPath: 'M16.59,155.34l7.92.33c5.63.23,10,5.41,9.77,11.52l-.23,5.46c-.25,6.1-5.06,10.9-10.69,10.66L15.44,183c-6.57-.27-11.8-5.18-11.89-11,0-.19,0-.38,0-.57l.23-5.46c0-.19,0-.38,0-.57C4.4,159.52,10,155.07,16.59,155.34Z',
        shadowPath: 'M16.59,155.34l12.11.5c6.79.28,12.13,5.5,11.88,11.6l-.23,5.46c-.25,6.1-6,10.86-12.8,10.58L15.44,183c-6.57-.27-11.8-5.18-11.89-11,0-.19,0-.38,0-.57l.23-5.46c0-.19,0-.38,0-.57C4.4,159.52,10,155.07,16.59,155.34Z',
        labelTransform: 'translate(12.4 172.61)'
      },
      {
        id: 21,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 22,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 23,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 24,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 25,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 26,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 27,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 28,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 31,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 32,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 33,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 34,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 35,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 36,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 37,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 38,
        isFront: false,
        highlightPath: 'M195.09,155.34l-7.92.33c-5.63.23-10,5.41-9.77,11.52l.23,5.46c.25,6.1,5.06,10.9,10.69,10.66l7.92-.33c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        shadowPath: 'M195.09,155.34l-12.11.5c-6.79.28-12.13,5.5-11.88,11.6l.23,5.46c.25,6.1,6,10.86,12.8,10.58l12.11-.5c6.57-.27,11.8-5.18,11.89-11,0-.19,0-.38,0-.57l-.23-5.46c0-.19,0-.38,0-.57C207.28,159.52,201.66,155.07,195.09,155.34Z',
        labelTransform: 'translate(182.94 172.61)'
      },
      {
        id: 41,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
      {
        id: 42,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
      {
        id: 43,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
      {
        id: 44,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
      {
        id: 45,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
      {
        id: 46,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
      {
        id: 47,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
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

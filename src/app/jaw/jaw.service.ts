import { Injectable } from '@angular/core';
import { Tooth, ToothSVG } from './tooth.model';

@Injectable()
export class JawService {

  // tslint:disable
  createDefaultTeethArray(teethNumbers?: Array<number>): Array<Tooth> {
    const teethModels: Array<ToothSVG> = [
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
        highlightPath: 'M86,32.2c2.09,4.62.95,10.21-2.54,12.43s-9,.88-12.34-3L65.42,35a7.79,7.79,0,0,1,1.79-12l3.59-2.28a7.79,7.79,0,0,1,11.58,3.45Z',
        shadowPath: 'M83.35,30.86c2.06,4.55,1.46,9.72-1.33,11.49s-7.73.13-11-3.67l-2.35-2.75a7.88,7.88,0,1,1,13.16-8.37Z',
        labelTransform: 'translate(68.55 35.76)'
      },
      {
        id: 13,
        isFront: true,
        highlightPath: 'M69.35,43.07C73,46.6,74,52.22,71.54,55.56S63.45,59.7,59,57.32l-7.75-4.12A7.79,7.79,0,0,1,48.5,41.43L51,38a7.79,7.79,0,0,1,12-1Z',
        shadowPath: 'M66.39,42.8c3.58,3.47,4.92,8.51,3,11.18s-7.15,3-11.55.61l-3.2-1.7a7.88,7.88,0,1,1,9.18-12.61Z',
        labelTransform: 'translate(52.2 50.84)'
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
        isFront: true,
        highlightPath: 'M106.9,27c-.35,5.06,2.67,9.9,6.72,10.76s8.78-2.33,10.52-7.09l3-8.24a7.79,7.79,0,0,0-5.85-10.58L117.16,11a7.79,7.79,0,0,0-9.65,7.27Z',
        shadowPath: 'M108.93,24.84c-.34,5,2,9.62,5.26,10.31s7.29-2.58,9-7.27l1.24-3.4a7.88,7.88,0,1,0-15.26-3.25Z',
        labelTransform: 'translate(110.61 27.56)'
      },
      {
        id: 22,
        isFront: true,
        highlightPath: 'M125.68,32.2c-2.09,4.62-.95,10.21,2.54,12.43s9,.88,12.34-3l5.7-6.67a7.79,7.79,0,0,0-1.79-12l-3.59-2.28a7.79,7.79,0,0,0-11.58,3.45Z',
        shadowPath: 'M128.33,30.86c-2.06,4.55-1.46,9.72,1.33,11.49s7.73.13,11-3.67L143,35.94a7.88,7.88,0,1,0-13.16-8.37Z',
        labelTransform: 'translate(129.78 35.76)'
      },
      {
        id: 23,
        isFront: true,
        highlightPath: 'M142.33,43.07c-3.64,3.53-4.63,9.15-2.19,12.5s8.09,4.14,12.57,1.76l7.75-4.12a7.79,7.79,0,0,0,2.72-11.77L160.67,38a7.79,7.79,0,0,0-12-1Z',
        shadowPath: 'M145.29,42.8c-3.58,3.47-4.92,8.51-3,11.18s7.15,3,11.55.61l3.2-1.7a7.88,7.88,0,1,0-9.18-12.61Z',
        labelTransform: 'translate(145.13 50.84)'
      },
      {
        id: 24,
        isFront: false,
        highlightPath: 'M163.18,54.66l-5.59,2.63c-4,1.87-5.57,6.92-3.54,11.22l1.81,3.86c2,4.31,6.93,6.3,10.9,4.44l5.59-2.63c4.64-2.18,6.92-7.28,5.21-11.52-.06-.14-.11-.27-.18-.41l-1.81-3.86-.2-.4C173.21,54,167.82,52.48,163.18,54.66Z',
        shadowPath: 'M163.18,54.66l-8.55,4c-4.8,2.25-7.06,7.62-5,11.93l1.81,3.86c2,4.31,7.6,6,12.39,3.73l8.55-4c4.64-2.18,6.92-7.28,5.21-11.52-.06-.14-.11-.27-.18-.41l-1.81-3.86-.2-.4C173.21,54,167.82,52.48,163.18,54.66Z',
        labelTransform: 'translate(156.82 70.63)'
      },
      {
        id: 25,
        isFront: false,
        highlightPath: 'M175,76.15l-6.34,2.22c-4.5,1.57-6.78,6.85-5.08,11.73l1.53,4.37c1.71,4.88,6.78,7.58,11.28,6l6.34-2.22c5.25-1.84,8.29-7.09,6.91-11.86,0-.15-.09-.31-.15-.46L188,81.57c-.05-.15-.11-.3-.17-.45C185.89,76.54,180.24,74.31,175,76.15Z',
        shadowPath: 'M175,76.15l-9.68,3.39c-5.43,1.9-8.47,7.44-6.77,12.32l1.53,4.37c1.71,4.88,7.54,7.32,13,5.42l9.68-3.39c5.25-1.84,8.29-7.09,6.91-11.86,0-.15-.09-.31-.15-.46L188,81.57c-.05-.15-.11-.3-.17-.45C185.89,76.54,180.24,74.31,175,76.15Z',
        labelTransform: 'translate(167.34 92.1)'
      },
      {
        id: 26,
        isFront: false,
        highlightPath: 'M184.09,100.38l-6.93,1.84c-4.92,1.3-7.78,6.73-6.37,12.07l1.27,4.78c1.41,5.33,6.59,8.63,11.51,7.32l6.93-1.84c5.74-1.52,9.4-6.87,8.33-12.05,0-.17-.07-.34-.12-.5l-1.27-4.78c0-.17-.1-.33-.15-.49C195.66,101.69,189.83,98.86,184.09,100.38Z',
        shadowPath: 'M184.09,100.38l-10.58,2.81c-5.94,1.57-9.63,7.22-8.22,12.56l1.27,4.78c1.41,5.33,7.42,8.41,13.36,6.83l10.58-2.81c5.74-1.52,9.4-6.87,8.33-12.05,0-.17-.07-.34-.12-.5l-1.27-4.78c0-.17-.1-.33-.15-.49C195.66,101.69,189.83,98.86,184.09,100.38Z',
        labelTransform: 'translate(175.33 117.07)'
      },
      {
        id: 27,
        isFront: false,
        highlightPath: 'M191.42,127l-7.5,1.06c-5.33.76-9,6.09-8.19,11.87l.73,5.17c.82,5.78,5.84,9.88,11.17,9.13l7.5-1.06c6.22-.88,10.73-6,10.25-11.61,0-.18,0-.36-.06-.54l-.73-5.17c0-.18-.06-.36-.09-.54C203.4,129.77,197.63,126.08,191.42,127Z',
        shadowPath: 'M191.42,127,180,128.58c-6.43.91-11,6.38-10.19,12.15l.73,5.17c.82,5.78,6.74,9.75,13.17,8.84l11.46-1.63c6.22-.88,10.73-6,10.25-11.61,0-.18,0-.36-.06-.54l-.73-5.17c0-.18-.06-.36-.09-.54C203.4,129.77,197.63,126.08,191.42,127Z',
        labelTransform: 'translate(180.87 144.05)'
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
        isFront: true,
        highlightPath: 'M106.9,354.28c-.35-5.06,2.67-9.9,6.72-10.76s8.78,2.33,10.52,7.09l3,8.24a7.79,7.79,0,0,1-5.85,10.58l-4.16.89a7.79,7.79,0,0,1-9.65-7.27Z',
        shadowPath: 'M108.93,356.46c-.34-5,2-9.62,5.26-10.31s7.29,2.58,9,7.27l1.24,3.4a7.88,7.88,0,1,1-15.26,3.25Z',
        labelTransform: 'translate(110.62 361.15)'
      },
      {
        id: 32,
        isFront: true,
        highlightPath: 'M125.68,349.1c-2.09-4.62-.95-10.21,2.54-12.43s9-.88,12.34,3l5.7,6.67a7.79,7.79,0,0,1-1.79,12l-3.59,2.28a7.79,7.79,0,0,1-11.58-3.45Z',
        shadowPath: 'M128.33,350.44c-2.06-4.55-1.46-9.72,1.33-11.49s7.73-.13,11,3.67l2.35,2.75a7.88,7.88,0,1,1-13.16,8.37Z',
        labelTransform: 'translate(129.78 352.94)'
      },
      {
        id: 33,
        isFront: true,
        highlightPath: 'M142.33,338.24c-3.64-3.53-4.63-9.15-2.19-12.5s8.09-4.14,12.57-1.76l7.75,4.12a7.79,7.79,0,0,1,2.72,11.77l-2.5,3.44a7.79,7.79,0,0,1-12,1Z',
        shadowPath: 'M145.29,338.51c-3.58-3.47-4.92-8.51-3-11.18s7.15-3,11.55-.61l3.2,1.7A7.88,7.88,0,1,1,147.89,341Z',
        labelTransform: 'translate(145.13 338.86)'
      },
      {
        id: 34,
        isFront: false,
        highlightPath: 'M163.18,326.64,157.59,324c-4-1.87-5.57-6.92-3.54-11.22l1.81-3.86c2-4.31,6.93-6.3,10.9-4.44l5.59,2.63c4.64,2.18,6.92,7.28,5.21,11.52-.06.14-.11.27-.18.41l-1.81,3.86-.2.4C173.21,327.32,167.82,328.82,163.18,326.64Z',
        shadowPath: 'M163.18,326.64l-8.55-4c-4.8-2.25-7.06-7.62-5-11.93l1.81-3.86c2-4.31,7.6-6,12.39-3.73l8.55,4c4.64,2.18,6.92,7.28,5.21,11.52-.06.14-.11.27-.18.41l-1.81,3.86-.2.4C173.21,327.32,167.82,328.82,163.18,326.64Z',
        labelTransform: 'translate(157.82 319.08)'
      },
      {
        id: 35,
        isFront: false,
        highlightPath: 'M175,305.15l-6.34-2.22c-4.5-1.57-6.78-6.85-5.08-11.73l1.53-4.37c1.71-4.88,6.78-7.58,11.28-6l6.34,2.22c5.25,1.84,8.29,7.09,6.91,11.86,0,.15-.09.31-.15.46L188,299.74c-.05.15-.11.3-.17.45C185.89,304.77,180.24,307,175,305.15Z',
        shadowPath: 'M175,305.15l-9.68-3.39c-5.43-1.9-8.47-7.44-6.77-12.32l1.53-4.37c1.71-4.88,7.54-7.32,13-5.42l9.68,3.39c5.25,1.84,8.29,7.09,6.91,11.86,0,.15-.09.31-.15.46L188,299.74c-.05.15-.11.3-.17.45C185.89,304.77,180.24,307,175,305.15Z',
        labelTransform: 'translate(168.34 296.61)'
      },
      {
        id: 36,
        isFront: false,
        highlightPath: 'M184.09,280.92l-6.93-1.84c-4.92-1.3-7.78-6.73-6.37-12.07l1.27-4.78c1.41-5.33,6.59-8.63,11.51-7.32l6.93,1.84c5.74,1.52,9.4,6.87,8.33,12.05,0,.17-.07.34-.12.5l-1.27,4.78c0,.17-.1.33-.15.49C195.66,279.62,189.83,282.45,184.09,280.92Z',
        shadowPath: 'M184.09,280.92l-10.58-2.81c-5.94-1.57-9.63-7.22-8.22-12.56l1.27-4.78c1.41-5.33,7.42-8.41,13.36-6.83l10.58,2.81c5.74,1.52,9.4,6.87,8.33,12.05,0,.17-.07.34-.12.5l-1.27,4.78c0,.17-.1.33-.15.49C195.66,279.62,189.83,282.45,184.09,280.92Z',
        labelTransform: 'translate(176.33 271.64)'
      },
      {
        id: 37,
        isFront: false,
        highlightPath: 'M191.42,254.35l-7.5-1.06c-5.33-.76-9-6.09-8.19-11.87l.73-5.17c.82-5.78,5.84-9.88,11.17-9.13l7.5,1.06c6.22.88,10.73,6,10.25,11.61,0,.18,0,.36-.06.54l-.73,5.17c0,.18-.06.36-.09.54C203.4,251.53,197.63,255.23,191.42,254.35Z',
        shadowPath: 'M191.42,254.35,180,252.72c-6.43-.91-11-6.38-10.19-12.15l.73-5.17c.82-5.78,6.74-9.75,13.17-8.84l11.46,1.63c6.22.88,10.73,6,10.25,11.61,0,.18,0,.36-.06.54l-.73,5.17c0,.18-.06.36-.09.54C203.4,251.53,197.63,255.23,191.42,254.35Z',
        labelTransform: 'translate(182.87 244.65)'
      },
      {
        id: 38,
        isFront: false,
        highlightPath: 'M195.09,226l-7.92-.33c-5.63-.23-10-5.41-9.77-11.52l.23-5.46c.25-6.1,5.06-10.9,10.69-10.66l7.92.33c6.57.27,11.8,5.18,11.89,11,0,.19,0,.38,0,.57l-.23,5.46c0,.19,0,.38,0,.57C207.28,221.79,201.66,226.24,195.09,226Z',
        shadowPath: 'M195.09,226l-12.11-.5c-6.79-.28-12.13-5.5-11.88-11.6l.23-5.46c.25-6.1,6-10.86,12.8-10.58l12.11.5c6.57.27,11.8,5.18,11.89,11,0,.19,0,.38,0,.57l-.23,5.46c0,.19,0,.38,0,.57C207.28,221.79,201.66,226.24,195.09,226Z',
        labelTransform: 'translate(184.94 216.09)'
      },
      {
        id: 41,
        isFront: true,
        highlightPath: 'M104.78,354.28c.35-5.06-2.67-9.9-6.72-10.76s-8.78,2.33-10.52,7.09l-3,8.24a7.79,7.79,0,0,0,5.85,10.58l4.16.89a7.79,7.79,0,0,0,9.65-7.27Z',
        shadowPath: 'M102.75,356.46c.34-5-2-9.62-5.26-10.31s-7.29,2.58-9,7.27l-1.24,3.4a7.88,7.88,0,1,0,15.26,3.25Z',
        labelTransform: 'translate(88.72 361.15)'
      },
      {
        id: 42,
        isFront: true,
        highlightPath: 'M86,349.1c2.09-4.62.95-10.21-2.54-12.43s-9-.88-12.34,3l-5.7,6.67a7.79,7.79,0,0,0,1.79,12l3.59,2.28a7.79,7.79,0,0,0,11.58-3.45Z',
        shadowPath: 'M83.35,350.44c2.06-4.55,1.46-9.72-1.33-11.49s-7.73-.13-11,3.67l-2.35,2.75a7.88,7.88,0,1,0,13.16,8.37Z',
        labelTransform: 'translate(68.55 352.94)'
      },
      {
        id: 43,
        isFront: true,
        highlightPath: 'M69.35,338.24c3.64-3.53,4.63-9.15,2.19-12.5S63.45,321.6,59,324l-7.75,4.12a7.79,7.79,0,0,0-2.72,11.77l2.5,3.44a7.79,7.79,0,0,0,12,1Z',
        shadowPath: 'M66.39,338.51c3.58-3.47,4.92-8.51,3-11.18s-7.15-3-11.55-.61l-3.2,1.7A7.88,7.88,0,1,0,63.79,341Z',
        labelTransform: 'translate(53.2 338.86)'
      },
      {
        id: 44,
        isFront: false,
        highlightPath: 'M48.5,326.64,54.09,324c4-1.87,5.57-6.92,3.54-11.22l-1.81-3.86c-2-4.31-6.93-6.3-10.9-4.44l-5.59,2.63c-4.64,2.18-6.92,7.28-5.21,11.52.06.14.11.27.18.41l1.81,3.86.2.4C38.47,327.32,43.86,328.82,48.5,326.64Z',
        shadowPath: 'M48.5,326.64l8.55-4c4.8-2.25,7.06-7.62,5-11.93l-1.81-3.86c-2-4.31-7.6-6-12.39-3.73l-8.55,4c-4.64,2.18-6.92,7.28-5.21,11.52.06.14.11.27.18.41l1.81,3.86.2.4C38.47,327.32,43.86,328.82,48.5,326.64Z',
        labelTransform: 'translate(40.51 319.08)'
      },
      {
        id: 45,
        isFront: false,
        highlightPath: 'M36.69,305.15,43,302.94c4.5-1.57,6.78-6.85,5.08-11.73l-1.53-4.37c-1.71-4.88-6.78-7.58-11.28-6L29,283c-5.25,1.84-8.29,7.09-6.91,11.86,0,.15.09.31.15.46l1.53,4.37c.05.15.11.3.17.45C25.79,304.77,31.44,307,36.69,305.15Z',
        shadowPath: 'M36.69,305.15l9.68-3.39c5.43-1.9,8.47-7.44,6.77-12.32l-1.53-4.37c-1.71-4.88-7.54-7.32-13-5.42L29,283c-5.25,1.84-8.29,7.09-6.91,11.86,0,.15.09.31.15.46l1.53,4.37c.05.15.11.3.17.45C25.79,304.77,31.44,307,36.69,305.15Z',
        labelTransform: 'translate(29.99 296.61)'
      },
      {
        id: 46,
        isFront: false,
        highlightPath: 'M27.59,280.92l6.93-1.84c4.92-1.3,7.78-6.73,6.37-12.07l-1.27-4.78c-1.41-5.33-6.59-8.63-11.51-7.32l-6.93,1.84c-5.74,1.52-9.4,6.87-8.33,12.05,0,.17.07.34.12.5l1.27,4.78c0,.17.1.33.15.49C16,279.62,21.85,282.45,27.59,280.92Z',
        shadowPath: 'M27.59,280.92l10.58-2.81c5.94-1.57,9.63-7.22,8.22-12.56l-1.27-4.78c-1.41-5.33-7.42-8.41-13.36-6.83l-10.58,2.81c-5.74,1.52-9.4,6.87-8.33,12.05,0,.17.07.34.12.5l1.27,4.78c0,.17.1.33.15.49C16,279.62,21.85,282.45,27.59,280.92Z',
        labelTransform: 'translate(22 271.64)'
      },
      {
        id: 47,
        isFront: false,
        highlightPath: 'M20.26,254.35l7.5-1.06c5.33-.76,9-6.09,8.19-11.87l-.73-5.17c-.82-5.78-5.84-9.88-11.17-9.13l-7.5,1.06c-6.22.88-10.73,6-10.25,11.61,0,.18,0,.36.06.54l.73,5.17c0,.18.06.36.09.54C8.28,251.53,14,255.23,20.26,254.35Z',
        shadowPath: 'M20.26,254.35l11.46-1.63c6.43-.91,11-6.38,10.19-12.15l-.73-5.17c-.82-5.78-6.74-9.75-13.17-8.84l-11.46,1.63c-6.22.88-10.73,6-10.25,11.61,0,.18,0,.36.06.54l.73,5.17c0,.18.06.36.09.54C8.28,251.53,14,255.23,20.26,254.35Z',
        labelTransform: 'translate(15.46 244.65)'
      },
      {
        id: 48,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
    ];

    if(teethNumbers) {
      return teethModels.filter(t => {
        return teethNumbers.find(n => n === t.id);
      });
    } else {
      return teethModels;
    }
  }
}

export interface Tooth {
  id: number;
  selected?: boolean;
  styleClass?: string;
}

export interface ToothSVG extends Tooth {
  isFront: boolean;
  highlightPath: string;
  shadowPath: string;
  labelTransform: string;
}

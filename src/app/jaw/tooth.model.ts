export interface Tooth {
  id: number;
  selected?: boolean;
  styleClass?: string;
}

export interface ToothVM extends Tooth {
  isFront: boolean;
  highlightPath: string;
  shadowPath: string;
  labelTransform: string;
}

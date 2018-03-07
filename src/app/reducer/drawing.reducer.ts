import {Drawing} from "../project/drawing/drawing";
import {Actions} from "../actions/drawing.actions";
import * as DrawingActions from "../actions/drawing.actions";

export interface IDrawing {
  selectedDrawing: Drawing;
}

export const initialState: IDrawing = {
  selectedDrawing: null
};

export const drawing = (state = initialState, action: Actions) => {
  switch (action.type) {
    case DrawingActions.SELECT_DRAWING: {
      console.log(action.payload);
      return {...state, selectedDrawing: action.payload}
    }
    default:
      return state;
  }

}

export const drawingSelector = state => state.selectedDrawing;

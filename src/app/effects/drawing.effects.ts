import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import * as DrawingActions from "../actions/drawing.actions";
import {AppStore} from "../store/app.store";
import {go} from "@ngrx/router-store";

@Injectable()
export class DrawingEffects {

  constructor(private actions: Actions,
              private store: Store<AppStore>) {
  }

  @Effect() goToDrawing = this.actions
    .ofType(DrawingActions.SELECT_DRAWING)
    .map(toPayload)
    .map((payload) => go([`drawing/${payload.drawingId}`]));
}

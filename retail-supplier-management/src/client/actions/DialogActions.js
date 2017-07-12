import { SHOW_DIALOG, HIDE_DIALOG } from '../constants/Dialog';

export function showDialog () {
  return {
    type: SHOW_DIALOG
  };
}

export function hideDialog () {
  return {
    type: HIDE_DIALOG
  };
}

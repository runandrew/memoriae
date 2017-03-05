// Required files
import { dbConnect } from '../utils/database';

/* -----------------    ACTIONS     ------------------ */
const SET_PAGES = 'SET_PAGES';

/* ------------   ACTION CREATORS     ------------------ */
const setPages = pages => ({ type: SET_PAGES, pages });

/* ------------       REDUCER     ------------------ */

const initialPages = [];

export default function reducer (prevState = initialPages, action) {
  switch (action.type) {
    case SET_PAGES:
      return action.pages;
    default: return prevState;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchPages = () => {
  const db = dbConnect();
  const pages = db.get('pages').value();
  return setPages(pages);
};

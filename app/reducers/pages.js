// Required libraries
import immutable from 'immutable';

// Required files
import { dbConnect } from '../utils/database';

/* -----------------    ACTIONS     ------------------ */
const SET_PAGES = 'SET_PAGES';
const SET_PAGE = 'SET_PAGE';

/* ------------   ACTION CREATORS     ------------------ */
const setPages = pages => ({
  type: SET_PAGES,
  pages: immutable.List(pages)
});

const setPage = page => ({
  type: SET_PAGE,
  page: immutable.Map(page)
});

/* ------------       REDUCER     ------------------ */

const initialPages = immutable.fromJS({
  allPages: [],
  selectedPage: {}
});

export default function reducer (prevState = initialPages, action) {
  switch (action.type) {
    case SET_PAGES:
      return prevState.set('allPages', action.pages);
    case SET_PAGE:
      return prevState.set('selectedPage', action.page);
    default: return prevState;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchPages = () => {
  const db = dbConnect();
  const pages = db.get('pages').value();
  return setPages(pages);
};

export const fetchPage = (id) => {
  const db = dbConnect();
  const page = db.get('pages')
    .find({ id })
    .value();
  console.log('found page', page, 'id', id);
  return setPage(page);
};

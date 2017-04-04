// Required libraries
import Immutable from 'immutable';

// Required files
import { dbConnect } from '../utils/database';

/* -----------------    ACTIONS     ------------------ */
const SET_PAGES = 'SET_PAGES';
const SET_PAGE_ID = 'SET_PAGE_ID';
const UPDATE_PAGE = 'UPDATE_PAGE';

/* ------------   ACTION CREATORS     ------------------ */

// Input: Immutable page objects
export const setPages = pages => ({
  type: SET_PAGES,
  pages 
});

export const setPageId = pageId => ({
  type: SET_PAGE_ID,
  pageId
});

// Input: Immutable page object
export const updatePage = page => ({
  type: UPDATE_PAGE,
  page
});

/* ------------       REDUCER     ------------------ */

const initialPages = Immutable.fromJS({
  allPages: [],
  pageId: 0
});

export default function reducer (prevState = initialPages, action) {
  switch (action.type) {
    case SET_PAGES:
      return prevState.set('allPages', action.pages);
    case SET_PAGE_ID:
      return prevState.set('pageId', action.pageId);
    case UPDATE_PAGE: {
      const index = prevState.get('allPages').findIndex(page => page.get('id') === action.page.get('id'));
      return prevState.setIn(['allPages', index], action.page);
    }

    default: return prevState;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchPages = () => {
  const db = dbConnect();
  const pages = db.get('pages').value();
  return setPages(Immutable.fromJS(pages));
};

export const editPage = (page) => {
  const db = dbConnect();
  const pageJS = page.toJS();
  db.get('pages')
    .find({ id: pageJS.id })
    .assign(pageJS)
    .write();
  return updatePage(page);
};

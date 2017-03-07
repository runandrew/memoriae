// Required libraries
import immutable from 'immutable';

// Required files
import { dbConnect } from '../utils/database';

/* -----------------    ACTIONS     ------------------ */
const SET_PAGES = 'SET_PAGES';
const SET_PAGE_ID = 'SET_PAGE_ID';
const UPDATE_PAGE = 'UPDATE_PAGE';

/* ------------   ACTION CREATORS     ------------------ */
export const setPages = pages => ({
  type: SET_PAGES,
  pages: immutable.fromJS(pages)
});

export const setPageId = pageId => ({
  type: SET_PAGE_ID,
  pageId
});

export const updatePage = page => ({
  type: UPDATE_PAGE,
  page: immutable.fromJS(page)
});

/* ------------       REDUCER     ------------------ */

const initialPages = immutable.fromJS({
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
  return setPages(pages);
};

export const editPage = (page) => {
  const db = dbConnect();
  db.get('pages')
    .find({ id: page.id })
    .assign(page)
    .write();
  return updatePage(page);
};

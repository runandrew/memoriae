// Required libraries
import immutable from 'immutable';

// Required files
import { dbConnect } from '../utils/database';

/* -----------------    ACTIONS     ------------------ */
const SET_PAGES = 'SET_PAGES';
const SET_PAGE = 'SET_PAGE';
const SET_PAGE_ID = 'SET_PAGE_ID';

/* ------------   ACTION CREATORS     ------------------ */
const setPages = pages => ({
  type: SET_PAGES,
  pages: immutable.fromJS(pages)
});

const setPage = page => ({
  type: SET_PAGE,
  page: immutable.Map(page)
});

export const setPageId = pageId => ({
  type: SET_PAGE_ID,
  pageId
});

/* ------------       REDUCER     ------------------ */

const initialPages = immutable.fromJS({
  allPages: [],
  selectedPage: {},
  pageId: 9999
});

export default function reducer (prevState = initialPages, action) {
  switch (action.type) {
    case SET_PAGES:
      return prevState.set('allPages', action.pages);
    case SET_PAGE:
      return prevState.set('selectedPage', action.page);
    case SET_PAGE_ID:
      return prevState.set('pageId', action.pageId);
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
  return setPage(page);
};

// export const updatePage = (page) => {
//   const db = dbConnect();
//   db.find({ id: page.id })
//   .assign(page)
// }

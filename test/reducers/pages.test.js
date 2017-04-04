// Required libraries
import Immutable from 'immutable';

// Required files
import { setPages, setPageId, updatePage } from '../../app/reducers/pages';
import pages from '../../app/reducers/pages';

// Fake some unrelated functions so the tests can run
jest.mock('../../app/utils/userSettings');

describe('reducers', () => {
  const initialState = Immutable.fromJS({
    allPages: [],
    pageId: 0
  });

  const testDB = require('../db/memoriaeDB.json');

  describe('pages', () => {
    it('should handle initial state', () => {
      let returnedState = pages(undefined, {});
      expect(returnedState.get('pageId')).toBe(0);
      expect(returnedState.get('allPages').size).toBe(0);
    });

    it('should load the fetched pages', () => {
      const actionSetPages = setPages(Immutable.fromJS(testDB.pages));
      let returnedState = pages(initialState, actionSetPages);
      expect(returnedState.get('allPages').size).toBe(3);
    });

    it('should set the current page', () => {
      const actionSetPageId = setPageId(1);
      let returnedState = pages(initialState, actionSetPageId);
      expect(returnedState.get('pageId')).toBe(1);
    });

    it('should update a certain page', () => {
      const updatedPage = testDB.pages[0];
      updatedPage.title = `I'm a changed title.`;
      const actionUpdatePage = updatePage(Immutable.fromJS(updatedPage));
      let returnedState = pages(initialState, actionUpdatePage);
      expect(returnedState.getIn(['allPages', 0, 'title'])).toBe(`I'm a changed title.`);
    });
  });
});

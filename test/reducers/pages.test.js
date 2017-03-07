// Required libraries
import immutable from 'immutable';

// Required files
import { setPages, setPageId } from '../../app/reducers/pages';
import pages from '../../app/reducers/pages';

// Fake some unrelated functions so the tests can run
jest.mock('../../app/utils/userSettings');

describe('reducers', () => {
  const initialState = immutable.fromJS({
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
      const actionSetPages = setPages(testDB.pages);
      let returnedState = pages(initialState, actionSetPages);
      expect(returnedState.get('allPages').size).toBe(3);
    });

    it('should set the current page', () => {
      const actionSetPageId = setPageId(1);
      let returnedState = pages(initialState, actionSetPageId);
      expect(returnedState.get('pageId')).toBe(1);
    });

    // it('should handle INCREMENT_COUNTER', () => {
    //   expect(pages(1, { type: INCREMENT_COUNTER })).toBe(2);
    // });
    //
    // it('should handle DECREMENT_COUNTER', () => {
    //   expect(pages(1, { type: DECREMENT_COUNTER })).toBe(0);
    // });
    //
    // it('should handle unknown action type', () => {
    //   expect(pages(1, { type: 'unknown' })).toBe(1);
    // });
  });
});

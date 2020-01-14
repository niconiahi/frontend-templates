import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';

// Reducers
import sampleReducer from 'modules/sample/reducer';

// Persist Config
const samplePersistConfig = { key: 'sample', blacklist: [], storage };

export const createRootReducer = (history) => {
  const reducers = {
    router: connectRouter(history),
    sample: persistReducer(samplePersistConfig, sampleReducer),
  };

  return combineReducers(reducers);
};

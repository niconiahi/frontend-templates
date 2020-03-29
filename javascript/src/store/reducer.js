import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';

// Reducers
import sessionReducer from 'modules/session/reducer';
import sampleReducer from 'modules/sample/reducer';

// Persist Config
const sessionPersistConfig = { key: 'session', storage, blacklist: [] };
const samplePersistConfig = { key: 'sample', storage, blacklist: [] };

export const createRootReducer = (history) => {
  const reducers = {
    router: connectRouter(history),
    session: persistReducer(sessionPersistConfig, sessionReducer),
    sample: persistReducer(samplePersistConfig, sampleReducer),
  };

  return combineReducers(reducers);
};

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
/* import - rootReducer */
import rootReducer from './rootReducer';

const middleware = [thunk];
const enhuncer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhuncer);
export const persistor = persistStore(store);

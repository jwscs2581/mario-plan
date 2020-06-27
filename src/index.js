import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk';
// import {reduxFirestore, getFirestore} from 'redux-firestore';
import { createFirestoreInstance } from 'redux-firestore'
// import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import {firebaseConfig} from './config/fbConfig';
import firebase from 'firebase/app'

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

const store = createStore(rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase})),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const rrfConfig = {
  userProfile: 'users',
}
const rrfProps = {
  firebase, 
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import {useContext} from 'react';

import {enableLogging} from 'mobx-logger';
import {rootStoreContext} from '../store/Index';


// if(process.env.NODE_ENV === 'development') {
//     const {enableLogging} = require('mobx-logger');
//     enableLogging();
// }


// Custom hook to access the store
export const useStore =  () => useContext(rootStoreContext);    
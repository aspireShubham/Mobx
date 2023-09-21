import {useContext} from 'react';

import { rootStoreContext } from '../Index';




export const useStore =  () => useContext(rootStoreContext);    
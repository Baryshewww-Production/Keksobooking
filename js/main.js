import {toggleFormDisabled} from './form-switcher.js';
import './form-validator.js';
import {loadMap} from './map.js';

toggleFormDisabled(true);
setTimeout(loadMap, 1000);

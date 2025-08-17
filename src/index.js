import {router} from './router.js';
import 'bootstrap/dist/css/bootstrap.min.css';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

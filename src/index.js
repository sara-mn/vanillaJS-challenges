import {router} from './router'
import 'bootstrap/dist/css/bootstrap.css';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

import { default as angular } from 'angular';
import { appModule } from './app/app.module';

import './global.css';

angular.bootstrap(document.body, [ appModule.name ], { strictDi: true });

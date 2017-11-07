import { default as angular } from 'angular';
import { appModule } from './app/app.module';

angular.bootstrap(document.body, [ appModule.name ], { strictDi: true });

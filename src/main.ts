import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IVisaModule } from './ivisa/ivisa.module';

platformBrowserDynamic().bootstrapModule(IVisaModule)
  .catch(err => console.error(err));

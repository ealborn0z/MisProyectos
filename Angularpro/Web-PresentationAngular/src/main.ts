import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS
import AOS from 'aos';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

AOS.init(); // Inicializa AOS
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtils } from './services-utils';
import { buildRoute, ServicesRoutes } from './services-routes';
import ofertas from '../../assets/data/ofertas.json';

@Injectable({
  providedIn: 'root',
})
export class ClaroService {
  constructor(private serviceUtils: ServiceUtils) {}

  getData(): Observable<any> {
    return ofertas;
  }
}

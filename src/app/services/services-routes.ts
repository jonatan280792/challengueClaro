import { Config } from '@config/index';

const { baseUrlMotor } = Config.api;

const ServicesRoutes = {
  getJson: {
    needsAuth: false,
    url: baseUrlMotor + '/api/consultas/json',
  }
};

const buildRoute = (path, params) => {
  const route = Object.assign({}, path);

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      route.url = route.url.replace(new RegExp(':' + key, 'g'), encodeURIComponent(params[key]) );
    }
  }

  return route;
};

export { buildRoute, ServicesRoutes };

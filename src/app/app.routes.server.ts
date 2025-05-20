 import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'our-service/:id',
    renderMode: RenderMode. Server,
  },
  {
    path: 'service-details/:id',
    renderMode: RenderMode. Server,
  },
  {
    path: 'edit-main-category/:id',
    renderMode: RenderMode. Server,
  },
  {
    path:'edit-service/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

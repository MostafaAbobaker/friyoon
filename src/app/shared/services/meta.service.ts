import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  updateMetaTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  }) {
    if (config.title) {
      this.title.setTitle(config.title);
      this.meta.updateTag({ property: 'og:title', content: config.ogTitle || config.title });
    }

    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({ property: 'og:description', content: config.ogDescription || config.description });
    }

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    if (config.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    }
  }

  setDefaultMetaTags() {
    this.updateMetaTags({
      title: 'فريون - خدمات تكييف وتبريد متكاملة',
      description: 'نقدم خدمات التكييف والتبريد المتكاملة بأعلى جودة وأفضل الأسعار',
      keywords: 'فريون, تكييف, تبريد, صيانة مكيفات, خدمات تكييف',
    });
  }
}

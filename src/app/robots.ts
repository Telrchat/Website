import { MetadataRoute } from 'next'
import config from '../../richtpl.config'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api','/app'],
    },
    sitemap: `${config.url}/sitemap.xml`,
  }
}
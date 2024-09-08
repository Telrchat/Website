import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api','/app'],
    },
    sitemap: 'https://telrchat.vercel.app/sitemap.xml',
  }
}
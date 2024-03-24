export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://redlogistica.github.io/red-logistica/sitemap.xml',
    }
  }
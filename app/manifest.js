export default function manifest() {
    return {
      name: 'Red logística',
      short_name: 'Red Logística',
      description: 'Radio, noticias y más',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/icon.png',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }
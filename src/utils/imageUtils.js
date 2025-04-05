 // const defaultThumbnail = 'https://via.placeholder.com/300x200?text=썸네일+없음'

export function getThumbnailUrl(relativePath) {
  const isProd =     window.location.hostname.includes('vercel.app')    
  const base = isProd ? '/api' : 'http://localhost:1590'
  return `${base}/${relativePath}`
}
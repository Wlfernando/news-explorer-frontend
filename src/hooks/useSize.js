import { useState, useEffect } from 'react';

export default function useSize(num = 768) {
  const [viewPort, setViewPort] = useState(
    window.innerWidth >= num
      ? 'desktop'
      : 'other'
  )

  useEffect(()=> {
    const listenSize = (e) => {
      const reSize = e.currentTarget.innerWidth

      setViewPort(reSize >= num ? 'desktop' : 'other')
    }

    window.addEventListener('resize', listenSize)

    return () => window.removeEventListener('resize', listenSize)
  }, [num])

  return viewPort
}
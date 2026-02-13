import { useSyncExternalStore } from "react";

function suscribe(listener) {
  window.cookieStore.addEventListener('change', listener);

  return () => {
    window.cookieStore.removeEventListener('change', listener);
  }
}

function takeSnapShot() {
  return document.cookie.includes('storage-access=true');
}

export default function useCookie() {
  const cookie = useSyncExternalStore(suscribe, takeSnapShot);

  return cookie;
}
import { useSyncExternalStore } from "react";

function suscribe(listener) {
  window.cookieStore.addEventListener('change', listener);

  return () => {
    window.cookieStore.removeEventListener('change', listener);
  }
}

function takeSnapShot(field) {
  return () => document.cookie.includes(field);
}

export default function useCookie(field) {
  const cookie = useSyncExternalStore(suscribe, takeSnapShot(field));

  return cookie;
}
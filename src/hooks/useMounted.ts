import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

// false au rendu serveur et pendant l'hydratation, true ensuite : évite un setState dans un effet
export default function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

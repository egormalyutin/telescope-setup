import { Writable, writable, get } from "svelte/store";

export function save<T>(name: string, defaultValue: T): Writable<T> {
  let strItem = localStorage.getItem(name);

  let item: T;

  if (strItem === undefined) {
    item = defaultValue;
  } else {
    item = JSON.parse(strItem);
  }

  const store = writable(item);
  const { set, subscribe } = store;

  return {
    set(value: T) {
      localStorage.setItem(name, JSON.stringify(value));
      set(value);
    },

    update(cb: (value: T) => T) {
      const value = cb(get(store));
      this.set(value);
    },

    subscribe,
  };
}

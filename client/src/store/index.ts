// import { writable } from "svelte/store";

// const storedTheme = localStorage.getItem("theme");
// export const theme = writable<'light' | 'dark'>(storedTheme as 'light')

// theme.subscribe(value => {
//     localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light')
// })

// export function storable(data: any) {
//     const store = writable(data);
//     const { subscribe, set, update } = store
//     const isBrowser = typeof window !== 'undefined'

//     isBrowser &&
//         localStorage.storable &&
//         set(JSON.parse(localStorage.storable))

//     return {
//         subscribe,
//         set: (n: Object) => {
//             isBrowser && (localStorage.storable = JSON.stringify(n))
//             set(n)
//         },
//         update: (cb: (...params: any) => void) => {
//             const updatedStore = cb(get(store));

//             isBrowser && (localStorage.storable = JSON.stringify(updatedStore));
//             set(updatedStore);
//         }
//     }
// }
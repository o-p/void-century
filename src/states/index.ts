import { observable/* , observe */ } from '@legendapp/state'
import { syncObservable, configureObservableSync } from '@legendapp/state/sync'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

// Setup global persist configuration
configureObservableSync({
  persist: {
      plugin: ObservablePersistLocalStorage
  }
})

// Create an observable object
const state$ = observable({
  settings: { theme: 'dark' },
})

const store$ = observable({
  user: {
    name: 'Cheer',
  },
})

syncObservable(store$, {
  persist: {
    name: 'dapp-user',
  },
})

// observe(state$, state => {
//   console.log('state', state)
// })

export {
  state$,
  store$,
}

import { action, observable, makeObservable } from 'mobx'
import GlobalStore, { GlobalHydration } from './global.store'

export type RootStoreHydration = {
  loading?: boolean

  setLoader?: (loading: boolean) => void
  globalStore?: GlobalHydration
}
export default class RootStore {
  @observable loading = false
  globalStore: GlobalStore

  constructor() {
    this.globalStore = new GlobalStore(this)
    makeObservable(this)
  }

  @action setLoader(_loading: boolean) {
    this.loading = _loading
  }

  @action hydrate(data: RootStoreHydration) {
    if (data.globalStore) {
      this.globalStore.hydrate(data.globalStore)
    }
  }
}

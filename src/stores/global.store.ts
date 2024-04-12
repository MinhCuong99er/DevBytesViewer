import { action, observable, makeObservable } from 'mobx'
import RootStore from './RootStore'
import { STATE } from '@src/interfaces/enums'

export type GlobalHydration = {
  state?: STATE
}

export default class GlobalStore {
  @observable state = STATE.PENDING
  @observable root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeObservable(this)
  }

  @action hydrate(data?: GlobalHydration) {
    console.log(data)
  }
}

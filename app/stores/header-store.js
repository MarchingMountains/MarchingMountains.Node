import alt from '../alt';
import HeaderActions from '../actions/header-actions';

class HeaderStore {
  constructor() {
    this.bindActions(HeaderActions);
  }
}

export default alt.createStore(HeaderStore);
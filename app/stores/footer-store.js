import alt from '../alt';
import FooterActions from '../actions/footer-actions';

class FooterStore {
  constructor() {
    this.bindActions(FooterActions);
  }
}

export default alt.createStore(FooterStore);
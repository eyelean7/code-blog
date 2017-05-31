import Ember from 'ember';

export default Ember.Component.extend({
  addNewUser: false,
  actions: {
    userFormShow() {
      this.set('addNewUser', true);
    },

    saveUser1() {
      var params = {
        name: this.get('name'),
        bio: this.get('bio'),
        img: this.get('img'),
      };
      this.set('addNewUser', false);
      this.sendAction('saveUser2', params)
    }
  }
});

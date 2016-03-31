import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newCommentForm() {
      this.set('newCommentForm', true);
    },
    newComment: function() {
      var params = {
        user: this.get('user'),
        date: new Date(),
        content: this.get('content'),
        post: this.get('post')
      };
      this.sendAction('newComment', params);
      this.set('user', null);
      this.set('content', null);
      this.set('newCommentForm', false);
    }

  }
});

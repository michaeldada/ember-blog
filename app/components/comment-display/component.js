import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
    },
    delete(comment) {
      var post = this.get('post');
      if(confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('deleteComment', comment, post);
      }
    }
  }
});

const getPosts = () => {
  console.log('\n arrow getPosts \n', this);
};

function addPost(onSuccess = () => {}) {
  console.log('\n function declaration addPost \n', this);
  onSuccess();
}
// getPosts();
// addPost();
/*
const abstarctUserActions = {
  name: 'credentialsActions',
  addPost,
  getPosts,
};

// abstarctUserActions.addPost();
// abstarctUserActions.getPosts();
*/

const abstractApi = {
  getPosts: () => {
    console.log('\n abstractApi.getPosts \n', this);
  },

  addPost: function () {
    console.log('\n abstractApi.addPosts \n', this);
  },
};

abstractApi.addPost();
abstractApi.getPosts();

addPost(abstractApi.addPost);


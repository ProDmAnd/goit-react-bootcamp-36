class API {
  constructor(baseUrl = '') {
    this.url = baseUrl;
    this.loading = false;
  }

  post(onSuccess = () => {}, delay) {
    console.log('Post some data ...');
    setTimeout(() => onSuccess(), delay);
  }
}

function addPost(callback) {
  callback();
}

class UserAPI extends API {
  constructor(props) {
    super(props);
    this.loading = false;
    this.onLogin = this.onLogin.bind(this);
  }

  loginUser = () => {
    console.log('loginUser', this);
    this.loading = true;
    this.post(this.onLogin, 1000);
  };

  onLogin() {
    console.log('onLogin', this);
    this.loading = false;
    return true;
  }
}

const userApi = new UserAPI('not_random_url');

userApi.loginUser();

addPost(userApi.loginUser);

import { Button, Wrapper } from 'components';
import Modal from 'components/Modal/Modal';
import NewsList from 'components/NewsList/NewsList';
import { lsQueryConfigKey } from 'constants/api';
import { Component } from 'react';
import { fetchArticles, getArticles } from 'services/HNewsAPI';

export class App extends Component {
  state = {
    articles: [],
    loading: false,
    errorMessage: '',
    query: '',
    hitsPerPage: '10',
    showQueryModal: false,
  };

  componentDidMount() {
    const queryConfig =
      JSON.parse(localStorage.getItem(lsQueryConfigKey)) ?? {};

    this.setState(queryConfig);
    this.fetchArticles(queryConfig);
  }

  componentDidUpdate(_, prevState) {
    const { query, hitsPerPage } = this.state;
    localStorage.setItem(
      lsQueryConfigKey,
      JSON.stringify({ query, hitsPerPage })
    );
    if (prevState.query !== query || prevState.hitsPerPage !== hitsPerPage) {
      // this.fetchArticles({ query, hitsPerPage });
    }
  }

  fetchArticles = async queryConfig => {
    console.log('FETCH');
    try {
      this.setState({ loading: true, errorMessage: '' });
      const articles = await fetchArticles(queryConfig);
      this.setState({ articles });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  refetchArticles = () => {
    const { query, hitsPerPage } = this.state;
    this.fetchArticles({ query, hitsPerPage });
  };

  changeValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  openSearchModal = () => this.setState({ showQueryModal: true });
  closeSearchModal = () => this.setState({ showQueryModal: false });

  // toggleSearchModal = () =>
  //   this.setState(({ showQueryModal }) => ({
  //     showQueryModal: !showQueryModal,
  //   }));

  inputKeyDown = event => {
    const { query, hitsPerPage } = this.state;
    if (event.code === 'Enter') {
      this.fetchArticles({ query, hitsPerPage });
    }
  };

  render() {
    const {
      loading,
      articles,
      errorMessage,
      query,
      hitsPerPage,
      showQueryModal,
    } = this.state;

    return (
      <Wrapper>
        {showQueryModal && (
          <Modal onClose={this.closeSearchModal}>
            <div>
              <input
                name="query"
                value={query}
                onChange={this.changeValue}
                onKeyDown={this.inputKeyDown}
              />
              <select
                name="hitsPerPage"
                value={hitsPerPage}
                onChange={this.changeValue}
              >
                {[10, 30, 50].map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <Button onClick={this.refetchArticles}>Search Articles</Button>
            </div>
          </Modal>
        )}
        {/* <ControlledForm city={this.state} /> */}
        <Button onClick={this.openSearchModal}>Open Search</Button>
        {loading && <h3>Loading...</h3>}
        {errorMessage && <p>{errorMessage}</p>}
        {articles.length && !loading ? <NewsList articles={articles} /> : null}
      </Wrapper>
    );
  }
}

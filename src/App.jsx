import { Button, Wrapper } from 'components';
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
      this.fetchArticles({ query, hitsPerPage });
    }
  }

  fetchArticles = async queryConfig => {
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

  render() {
    const { loading, articles, errorMessage, query, hitsPerPage } = this.state;

    return (
      <Wrapper>
        <input name="query" value={query} onChange={this.changeValue} />
        {/* <ControlledForm city={this.state} /> */}
        {loading && <h3>Loading...</h3>}
        {errorMessage && <p>{errorMessage}</p>}
        {articles.length && !loading ? <NewsList articles={articles} /> : null}
        <div>
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
          <Button onClick={this.refetchArticles}>Refetch Articles</Button>
        </div>
      </Wrapper>
    );
  }
}

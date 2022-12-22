import { Button, Wrapper } from 'components';
import Modal from 'components/Modal/Modal';
import NewsList from 'components/NewsList/NewsList';
import { lsQueryConfigKey } from 'constants/api';
import useModal from 'hooks/useModal';
import { useEffect, useMemo, useRef } from 'react';
import { Component, useState } from 'react';
import { fetchArticles, getArticles } from 'services/HNewsAPI';
import { useMedia, useAsyncFn } from 'react-use';
import { object } from 'prop-types';
import { forwardRef } from 'react';
import useMount from 'hooks/useMount';
import { useCallback } from 'react';
import useQuery from 'hooks/useQuery';
import { useUserAuthContext } from 'contexts/UserAuthProvider';

class NewsClass extends Component {
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
      this.fetchArticles({ query, hitsPerPage });
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
      <>
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
      </>
    );
  }
}

const News = ({ minWidth = 450 }) => {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState('');

  const mount = useMount();
  const [query, setQuery] = useState('');
  const [hitsPerPage, setHitsPerPage] = useState('10');
  const [queryModalOpen, showQueryModal, closeQueryModal] = useModal();
  const [articles, getArticles, loading, errorMessage] = useQuery(
    [],
    fetchArticles
  );

  const [asc, setAsc] = useState(true);
  const [desc, setDesc] = useState(false);
  // const [
  //   { value: articles = [], loading, error: { message } = { message: '' } },
  //   getArticles,
  // ] = useAsyncFn(async queryConfig => await fetchArticles(queryConfig), []);

  const inputRef = useRef();
  const divRef = useRef();
  // console.log('IS LOW?', isLow);

  // const getArticles = useCallback(async queryConfig => {
  //   try {
  //     setLoading(true);
  //     setErrorMessage('');
  //     const articles = await fetchArticles(queryConfig);
  //     setArticles(articles);
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  const sortedArticles = useMemo(() => {
    const articlesCopy = [...articles];
    return articlesCopy.sort((a, b) => a.num_comments - b.num_comments);
  }, [articles]);

  useEffect(() => {
    if (!mount) return;
    console.log('changeQuery', query);
  }, [query, mount]);

  useEffect(() => {
    const queryConfig =
      JSON.parse(localStorage.getItem(lsQueryConfigKey)) ?? {};

    getArticles(queryConfig);
    console.log('componentDidMount');
    setQuery(queryConfig?.query);
    setHitsPerPage(queryConfig?.hitsPerPage);
  }, [getArticles]);

  const onKeyDown = event => {
    if (event.code === 'Enter') {
      getArticles({ query, hitsPerPage });
    }
  };

  useEffect(() => {
    if (!queryModalOpen) return;

    inputRef.current.focus();
  }, [queryModalOpen]);

  return (
    <>
      {queryModalOpen && (
        <Modal onClose={closeQueryModal}>
          <div>
            <input
              ref={inputRef}
              name="query"
              value={query}
              onChange={({ target: { value } }) => setQuery(value)}
              // onKeyDown={onKeyDown}
            />
            <select
              name="hitsPerPage"
              value={hitsPerPage}
              onChange={({ target: { value } }) => setHitsPerPage(value)}
            >
              {[10, 30, 50].map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <Button onClick={() => getArticles({ query, hitsPerPage })}>
              Search Articles
            </Button>
          </div>
        </Modal>
      )}
      {/* <ControlledForm city={this.state} /> */}
      <div>
        <Button onClick={showQueryModal}>Open Search</Button>
        <Button
          onClick={() => {
            setDesc(false);
            setAsc(true);
          }}
          disabled={asc}
        >
          Sort by Asc
        </Button>
        <Button
          onClick={() => {
            setDesc(true);
            setAsc(false);
          }}
          disabled={desc}
        >
          Sort by Desc
        </Button>
        <Button
          onClick={() => setErrorMessage(prev => (prev ? '' : 'Some message'))}
        >
          Set State
        </Button>
      </div>
      <div ref={divRef}></div>
      {loading && <h3>Loading...</h3>}
      {errorMessage && <p>{errorMessage}</p>}
      <p>{message}</p>
      {articles?.length && !loading ? (
        <NewsList articles={articles} sort={{ asc, desc }} />
      ) : null}
    </>
  );
};

export default News;

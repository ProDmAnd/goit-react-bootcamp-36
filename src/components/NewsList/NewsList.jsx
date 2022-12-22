import { memo } from 'react';

// MEMOIZED NEWS LIST
const NewsList = ({ articles = [], sort: { asc, desc } }) => {
  let articlesCopy = [...articles];
  if (asc || desc) {
    articlesCopy.sort((a, b) =>
      asc ? a.num_comments - b.num_comments : b.num_comments - a.num_comments
    );
  }
  console.log('rerender', asc, desc);
  return (
    <ul>
      {articlesCopy.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default memo(NewsList, (prev, next) => {
  if (
    Object.is(prev.articles, next.articles) &&
    prev.sort.asc === next.sort.asc &&
    prev.sort.desc === next.sort.desc
  ) {
    // RETURN TRUE IF PROPS ARE EQUAL
    return true;
  }
  return false;
});

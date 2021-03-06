import React from 'react';
import { Link, navigate } from '@reach/router';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as api from './api';

export const formatArticle = article => (
  <div key={article.article_id} className="article-entry">
    <div className="articletitle">{article.title}</div>
    <div className="vote">
      <button
        type="button"
        key={`${article.article_id}UP`}
        className="votearrow"
        onClick={() => {
          api.updateArticleVote(article.article_id, 1).then((article) => {
            this.setState({ article });
          });
        }}
      >
        {' '}
        <FontAwesomeIcon icon={faArrowUp}>voteUp</FontAwesomeIcon>
      </button>
        Votes:
      {article.votes}
      <button
        type="button"
        key={`${article.article_id}Down`}
        className="votearrow"
        onClick={() => {
          api.updateArticleVote(article.article_id, -1).then((article) => {
            this.setState({ article: { ...article } });
          });
        }}
      >
        {' '}
        <FontAwesomeIcon icon={faArrowDown}>voteDown</FontAwesomeIcon>
      </button>
      <div />
    </div>

    <div className="article">
      <Link
        key={`${article.article_id}article`}
          // state={{ article: article }}
        to={`/article/${article.article_id}`}
      >
        {article.title}
        {article.body}
      </Link>
    </div>

    <div key={article.article_id} className="article-foot">
      <div>
Comments:
        {article.comment_count}
      </div>
      <div>
        {' '}
Author:
        {article.author}
      </div>
      <div>
        {' '}
Created_at:
        {article.created_at}
      </div>
    </div>
  </div>
);

export const handleErrors = (err) => {
  {
    const errcontent = {
      errstatus: err.response.status,
      errMsg: err.response.data.msg
    };
    navigate('/error', {
      state: {
        errcontent,
        replace: false
      }
    });
  }
};

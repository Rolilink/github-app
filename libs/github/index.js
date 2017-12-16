import request from 'superagent';
import { GITHUB_PATH } from './constants';

export const getRepositoryContributors = ({ repo, resourceUrl }) => {
  const url = repo ? `${GITHUB_PATH}/repos/${repo.owner}/${repo.name}/contributors` : resourceUrl;

  return new Promise((resolve, reject) => {
    request
      .get(url)
      .then((res) => {
        const { links } = res;
        const contributors = res.body;

        resolve({
          links,
          contributors,
        });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const searchRepositoryOwnersByQuery = ({ q, searchUrl }) => {
  const url = q ? `${GITHUB_PATH}/search/repositories?q=${q}` : searchUrl;

  return new Promise((resolve, reject) => {
    request
      .get(url)
      .then((res) => {
        const { links } = res;
        const { items } = res.body;

        const owners = items.map(repo => ({ ...repo.owner, repo: repo.full_name }));

        resolve({ links, owners });
      })
      .catch((err) => {
        reject({ error: err});
      });
  });
};

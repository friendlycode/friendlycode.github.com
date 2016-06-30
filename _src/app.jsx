import React from 'react';
import { render } from 'react-dom';

import GithubProjectList from './containers/GithubProjectList';

render(
  <GithubProjectList source='https://api.github.com/orgs/friendlycode/repos' />,
  document.getElementById('github-projects')
);
import React from 'react';

import GithubRepositoryItem from '../components/GithubRepositoryItem'

export default class GithubProjectList extends React.Component {
  render() {
    var repos = [];

    jQuery.ajax({
      url: this.props.source,
      success: function(result) {
                if(result.isOk == false) {
                  alert(result.message);
                } else {
                  result.forEach(function(repo) {
                    repos.push(<GithubRepositoryItem repo={repo} key={repo.name} />);
                  });
                }
              },
      async: false
    }); 

    return (
      <div>
        <h2>Github Projects</h2>
        <ul className="project-list" alignItems="stretch">
          {repos}
        </ul>
      </div>
    );
  }
}

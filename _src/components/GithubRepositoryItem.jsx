import React from 'react';

export default class GithubRepositoryItem extends React.Component {
  render() {
    return (
      <li className="project">
        <div>
          <h3>{this.props.repo.name}</h3>
          <p>{this.props.repo.description}</p>
          <a className="btn" href={this.props.repo.html_url} target="_blank">View on Github</a>
        </div>
      </li>
    );
  }
};

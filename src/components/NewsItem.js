import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, urlToImage, newsUrl} = this.props || {};
    console.log();
    return (
      <div className="my-3">
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}{title.length > 30 ? "..." : ""}</h5>
            <p className="card-text">{description}{description.length > 90 ? "..." : ""}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
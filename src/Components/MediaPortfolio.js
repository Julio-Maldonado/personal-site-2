import React, { Component } from 'react';

class MediaPortfolio extends Component {
  render() {
    if (this.props.data) {
      var media = this.props.data.media.map(function(media) {
        var projectImage = 'images/media/'+media.image;
        return (
          <div key={media.title} className="columns media-item">
            <div className="item-wrap">
              <a target="_blank" href={media.homepageUrl} title={media.title}>
                <img alt={media.title} src={projectImage} />
                <div className="overlay">
                  <div className="media-item-meta">
                    <h5>{media.title}</h5>
                    <p>{media.category}</p>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        );
      })
    }

    return (
      <section id="media">
        <div className="row">
          <div className="twelve columns">
            <h1>Featured By</h1>
            <div id="media-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {media}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MediaPortfolio;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import qs from 'qs';

import './header.css';

class Header extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onLogoClick = this.onLogoClick.bind(this);
    this.term = '';
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.term);
  }
  onHandleChange(e) {
    this.term = e.target.value;
  }
  onLogoClick(e) {
    e.preventDefault()
    this.props.onLogoClick();
  }
  render() {
    const { search } = qs.parse(this.props.location.search.substring(1));
    return (
      <section className="level ml--level">
        <div className="container">
          <nav className="navbar ml-navbar" aria-label="main">
            <div className="navbar-brand">
              <FormattedMessage id="title">
              {(text) => (
                <a className="navbar-item" href="/" onClick={this.onLogoClick} title={text}>
                  <span className="ml-navbar__logo"></span>
                </a>
              )}
              </FormattedMessage>
            </div>
            <div className="navbar-item column ml-navbar-item">
              <form className="control ml-is-fullwidth"
                action="/items" onSubmit={this.onSubmit} method="GET">
                <div className="field has-addons">
                  <label className="label is-hidden">
                    <FormattedMessage id="search" />
                  </label>
                  <div className="control is-expanded">
                    <FormattedMessage id="search_placeholder">
                    {(text) => (
                      <input className="input ml-navbar-input" type="text" name="search" placeholder={text}
                        onChange={this.onHandleChange} defaultValue={search} />
                    )}
                    </FormattedMessage>
                  </div>
                  <div className="control">
                    <button className="button ml-is-light" onClick={this.onSubmit}>
                      <span className="icon">
                        <i className="ml-icon-search"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(query) {
    dispatch(push(`/items?search=${query}`));
  },
  onLogoClick() {
    dispatch(push('/'));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

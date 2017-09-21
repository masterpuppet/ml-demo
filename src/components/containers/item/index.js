import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import Layout from '../../layout';
import Breadcrumb from '../../breadcrumb';
import Item from '../../item';
import Loader from '../../loader';
import ErrorMessage from '../../error-message';
import * as actions from '../../../actions';
import { getIsFetching, getItem, getCategories, getErrors } from '../../../reducers';

class ItemContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    item: PropTypes.object,
    categories: PropTypes.array.isRequired,
    errors: PropTypes.object
  }
  static fetchData(store, params) {
    return store.dispatch(actions.fetchItem(params.id));
  }
  componentWillMount() {
    this.props.fetchItem(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchItem(this.props.match.params.id);
    }
  }
  render() {
    const { isFetching, categories, item, errors } = this.props;
    if ((isFetching || item === null) && !errors) {
      return (<Layout><Loader /></Layout>);
    }
    if(errors) {
      return (
        <Layout>
          <section className="section has-text-centered">
            <ErrorMessage message={errors.message} />
          </section>
        </Layout>
      );
    }
    return (
      <Layout>
        <Helmet>
          <title>{item.title}</title>
          <meta property="og:image" content={item.thumbnail} />
          <meta property="og:title" content={item.title} />
          <meta name="twitter:title" content={item.title} />
          <meta name="twitter:description" content={item.description} />
        </Helmet>
        <Breadcrumb breadcrumbs={categories} />
        <Item item={item} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  categories: getCategories(state),
  item: getItem(state),
  isFetching: getIsFetching(state),
  errors: getErrors(state),
});

const mapDispatchToProps = dispatch => ({
  fetchItem(id) {
    dispatch(actions.fetchItem(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemContainer));

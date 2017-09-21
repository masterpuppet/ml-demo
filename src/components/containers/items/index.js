import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import qs from 'qs';
import Layout from '../../layout';
import Items from '../../items';
import Breadcrumb from '../../breadcrumb';
import Loader from '../../loader';
import ErrorMessage from '../../error-message';
import * as actions from '../../../actions';
import { getIsFetching, getItems, getCategories, getErrors } from '../../../reducers';

class ItemsContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    errors: PropTypes.object
  }
  static fetchData(store, params, search) {
    return store.dispatch(actions.searchItems(`?${qs.stringify(search)}`));
  }
  componentWillMount() {
    this.props.search(this.props.location.search);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.location.search !== nextProps.location.search) {
      this.props.search(nextProps.location.search);
    }
  }
  render() {
    const { isFetching, categories, items, errors } = this.props;
    if (isFetching) {
      return (
        <Layout>
          <Loader />
        </Layout>
      );
    }
    const err = errors && <ErrorMessage message={errors.message} />;
    if(items.length > 0) {
      return (
        <Layout>
          <Helmet>
            {categories.length > 0 && <title>{categories[0]}</title>}
            {categories.length > 0 && <meta property="og:title" content={categories[0]} />}
            {categories.length > 0 && <meta name="twitter:title" content={categories.title} />}
          </Helmet>
          {err}
          <Breadcrumb breadcrumbs={categories} />
          <Items items={items} />
        </Layout>
      );
    } else {
      return (
        <Layout>
          {errors ?
            (<section className="section has-text-centered">{err}</section>) :
            (<section className="section">
              <FormattedMessage id="items_not_found" >
              {(text) => (<h3 className="is-size-4">{text}</h3>)}
              </FormattedMessage>
              <ul className="menu-list">
                <li>- <FormattedMessage id="items_not_found_list_item1" /></li>
                <li>- <FormattedMessage id="items_not_found_list_item2" /></li>
              </ul>
            </section>)}
        </Layout>
      );
    }
  }
}

const mapStateToProps = state => ({
  categories: getCategories(state),
  items: getItems(state),
  isFetching: getIsFetching(state),
  errors: getErrors(state),
});

const mapDispatchToProps = (dispatch) => ({
  search(query) {
    dispatch(actions.searchItems(query));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemsContainer));

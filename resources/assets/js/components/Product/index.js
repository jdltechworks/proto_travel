import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import { Link } from 'react-router'
import chunk from 'lodash/chunk'
import Search from '../Search'
import ImagePreloader from '../Loaders/Image'
import Scroller from '../Scroller'
import Filter from '../Search/Filter'


class Products extends Component {
    componentDidMount() {
        const { props } = this
        const { actions, collection } = props
        actions.Product.setProducts(collection)
    }

    render() {
        const { props } = this
        const {
            Product: { list, isAppending },
            actions: { Product },
            url
        } = props
        const groupedCollection = chunk(list, 4)
        return(
            <Scroller more={Product.more} url={url} take={list.length}>
                <div className="columns">
                    <Filter {...props} />
                    <div className="column col-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        {groupedCollection.map((collection, key) => {
                          return(
                            <div className="columns mt-10 pt-10 mb-10 pb-10" key={key}>
                              {collection.map((product, index) => (
                                <div className="column col-3 col-sm-12"  key={product.id}>
                                  <div className="card">
                                    <div className="card-image">
                                      {product.images.map((image, i) => (
                                        (i == 0) ? <ImagePreloader src={image.filename} key={image.id} /> : null
                                      ))}
                                    </div>
                                    <div className="card-header text-right">
                                        <p className="card-title">
                                            <Link to={`/product/${product.slug}`}>{product.title}</Link>
                                        </p>
                                        <div className="card-subtitle"><span>Php {product.price}</span></div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                          )
                        })}
                        {isAppending ?
                            <div className="text-center">
                                <div className="loading"></div>
                            </div> : null}
                    </div>
                </div>
            </Scroller>
        )
    }
}

export default Products

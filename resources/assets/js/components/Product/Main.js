import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import { Link } from 'react-router'
import chunk from 'lodash/chunk'
import Search from '../Search'
import ImagePreloader from '../Loaders/Image'
import Scroller from '../Scroller'
import capitalize from 'lodash/capitalize'

class Product extends Component {
    componentWillMount() {
        const { props } = this
        const { actions, params } = props
        const { Product } = actions
        const { getProductBySlug } = Product
        getProductBySlug(params.slug)
    }
    goTo(value, e) {
        const { props } = this
        const { actions, params } = props
        const { Product } = actions
        const { getProductBySlug } = Product
        getProductBySlug(params.slug)
    }
    render() {
        const { goTo } = this
        const { Product } = this.props
        const { product, related } = Product
        const { images } = product
        return(
            <div className="container grid-xl" style={{paddingTop: '2%'}}>
                <div className="columns">
                    <div className="column col-7 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-carousel">
                            {map(images, (image, key) => (
                                <ImagePreloader src={image.filename} key={image.id} />
                            ))}
                        </div>
                        <div className="product-carousel-controller">
                            <ul>
                                {map(images, (image, key) => (
                                    <li key={key}>
                                        <ImagePreloader src={image.filename} key={image.id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ul className="tab tab-block">
                          <li className="tab-item active">
                            <a href="#">Stars</a>
                          </li>
                          <li className="tab-item">
                            <a href="#">Add to wishlist</a>
                          </li>
                          <li className="tab-item">
                            <a href="#">{product.price}</a>
                          </li>
                        </ul>
                    </div>
                    <div className="column col-5 product-details col-md-12 col-sm-12 col-xs-12">
                        <h3 className="title">{capitalize(product.title)}</h3>
                        <ul className="tab tab-block">
                          <li className="tab-item active">
                            <a href="#">Details</a>
                          </li>
                          <li className="tab-item">
                            <a href="#">Delivery Options</a>
                          </li>
                          <li className="tab-item">
                            <a href="#">Seller</a>
                          </li>
                        </ul>
                        <p className="description">{product.description}</p>
                        <p>{product.user ? product.user.name : null}</p>
                        <div className="product-buy"><a href="#" className="btn btn-block">ADD TO CART</a></div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column col-12">
                        <h5>You might also be interested: </h5>
                    </div>
                    {map(related, (product, index) => (
                        <div className="column col-2 col-md-3 col-sm-12"  key={product.id}>
                          <div className="card">
                            <div className="card-image">
                              {product.images.map((image, i) => (
                                (i == 0) ? <ImagePreloader src={image.filename} key={image.id} /> : null
                              ))}
                            </div>
                            <div className="card-header text-right">
                                <a className="card-title" href={`/product/${product.slug}`}>{product.title}</a>
                                <div className="card-subtitle"><span>Php {product.price}</span></div>
                            </div>
                          </div>
                        </div>
                    ))}
                </div>
                <div className="columns">
                    <div className="columns">
                        {map(product.comments, (comment, index) => {
                            return(
                                <div key={index} className="column col-12">
                                    <h4>
                                        {comment.title}
                                    </h4>
                                    <p>{comment.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Product

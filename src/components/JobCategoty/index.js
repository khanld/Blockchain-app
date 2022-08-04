/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
//import './css/bootstrap.css'
import './css/css.css'
import './css/font-awesome.min.css'
import './css/linearicons.css'
import './css/main.css'
import locationListData from './catListData';

function JobCategory(params) {
  const singlePosts = params.singlePostData.map(post => {
    const tags = post.thumb.tags.map(tag => {
      return (
        <li>
          <a href="#">{tag}</a>
        </li>
      )
    })
    return (
      <div className="single-post d-flex flex-row">
        <div className="thumb">
          <img src={post.thumb.img} style={{ width: "130px", height: "95px" }} />
          <ul className="tags">
            {tags}
          </ul>
        </div>
        <div className="details">
          <div className="title d-flex flex-row justify-content-between">
            <div className="titles">
              <a href="#">
                <h4>{post.details.titles[0]}</h4>
              </a>
              <h6>{post.details.titles[1]}</h6>
            </div>
            <ul className="btns">
              <li><a href="#"><span className="lnr lnr-heart"></span></a></li>
              <li style={{ cursor: post.tick ? "not-allowed" : "pointer"}} onClick={!post.tick ? () => params.onApplyHandler(post.id) : null}>{post.tick ? <strong><i className="far fa-check-circle" style={{color: "green"}}></i></strong> : "Apply"}</li>
            </ul>
          </div>
          <p>
            {post.details.briefDesc}
          </p>
          <h5>Job Nature: {post.details.jobNature}</h5>
          <p className="address"><span className="lnr lnr-map"></span> {post.details.address}</p>
          <p className="address"><span className="lnr lnr-database"></span> {post.details.salary}</p>
        </div>
      </div>
    )
  })
  const locationList = locationListData.map(location => {
    return (
      <li><a className="justify-content-between d-flex" href="#">
        <p>{location.city}</p><span>{location.amount}</span>
      </a></li>
    )
  })
  const singleRateds = params.singlePostData.map(rated => {
    return (
      <div className="active-relatedjob-carusel" style={{ marginBottom: "15px" }}>
        <div className="single-rated">
          <img className="img-fluid" src={rated.thumb.img} style={{width: "320px", height: "120px"}} />
          <a href="#">
            <h4>{rated.details.titles[0]}</h4>
          </a>
          <h6>{rated.details.titles[1]}</h6>
          <p>
            {rated.details.briefDesc}
          </p>
          <h5>Job Nature: Full time</h5>
          <p className="address"><span className="lnr lnr-map"></span> {rated.details.address}</p>
          <p className="address"><span className="lnr lnr-database"></span> {rated.details.salary}</p>
          <a href="#" className="btns text-uppercase">Apply job</a>
        </div>
      </div>
    )
  })


  return (
    <section className="post-area section-gap">
      <div className="container" style={{ fontFamily: "sans-serif", marginTop: "30px" }}>
        <div className="row justify-content-center d-flex">
          <div className="col-lg-8 post-list">
            {singlePosts}
          </div>
          <div className="col-lg-4 sidebar">
            <div className="single-slidebar">
              <h4>Jobs by Location</h4>
              <ul className="cat-list">
                {locationList}
              </ul>
            </div>
            <div className="single-slidebar">
              <h4>Top rated job posts</h4>
              {singleRateds}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobCategory
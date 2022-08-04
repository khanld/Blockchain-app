import React from 'react'
import { Link } from 'react-router-dom'

const Course = (props) => {
    window.scrollTo({ top: 0});
    return (
        <React.Fragment>
            <div className="breadcumb-area">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to>Course</Link></li>
                    </ol>
                </nav>
            </div>

            <div className="clever-catagory bg-img d-flex align-items-center justify-content-center p-3" style={{ backgroundImage: "url(img/bg-img/bg2.jpg)" }}>
                <h3>Art &amp; Design</h3>
            </div>

            <section className="popular-courses-area section-padding-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                                <img src="img/bg-img/c1.jpg" alt="" />
                                <div className="course-content">
                                    <h4>English Grammar</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse" className="free">Free</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="500ms">
                                <img src="img/bg-img/c2.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Vocabulary</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse">$20</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                                <img src="img/bg-img/c3.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Expository writing</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse">$45</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                                <img src="img/bg-img/c4.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Vocabulary</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse">$45</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="500ms">
                                <img src="img/bg-img/c5.jpg" alt="" />
                                <div className="course-content">
                                    <h4>English Grammer</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse" className="free">Free</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                                <img src="img/bg-img/c6.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Expository writing</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse">$45</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                                <img src="img/bg-img/c7.jpg" alt="" />
                                <div className="course-content">
                                    <h4>English Grammer</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse" className="free">Free</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="500ms">
                                <img src="img/bg-img/c8.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Vocabulary</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse">$20</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                                <img src="img/bg-img/c9.jpg" alt="" />
                                <div className="course-content">
                                    <h4>Expository writing</h4>
                                    <div className="meta d-flex align-items-center">
                                        <Link to="/singleCourse">Sarah Parker</Link>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        <Link to="/singleCourse">Art &amp; Design</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                </div>
                                <div className="seat-rating-fee d-flex justify-content-between">
                                    <div className="seat-rating h-100 d-flex align-items-center">
                                        <div className="seat">
                                            <i className="fa fa-user" aria-hidden="true"></i> 10
                                </div>
                                        <div className="rating">
                                            <i className="fa fa-star" aria-hidden="true"></i> 4.5
                                </div>
                                    </div>
                                    <div className="course-fee h-100">
                                        <Link to="/singleCourse">$45</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="load-more text-center wow fadeInUp" data-wow-delay="1000ms">
                                <Link to="/singleCourse" className="btn clever-btn btn-2">Load More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Course
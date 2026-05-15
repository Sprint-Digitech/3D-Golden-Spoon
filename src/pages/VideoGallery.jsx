
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const VideoGallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            
	

    
	<div className="page-header parallaxie">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					
					<div className="page-header-box">
						<h1 className="text-anime-style-2" data-cursor="-opaque">Videos</h1>
						<nav className="wow fadeInUp">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">videos</li>
							</ol>
						</nav>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	

    
    <div className="page-video-gallery">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-1.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.2s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-2.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.4s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-3.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.6s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-4.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.8s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-5.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-6.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.2s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-7.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.4s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-8.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6">
                    
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.6s" data-cursor-text="Play">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
                            <figure>
                                <img src="/images/video-gallery-img-9.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="reserve-table">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    
                    <div className="reserve-table-content">
                        
                        <div className="section-title">
                            <h3 className="wow fadeInUp">reserve a table</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">reserve now your table and <span>enjoy dining experience.</span></h2>
                        </div>
                        

                        
                        <div className="reserve-table-body wow fadeInUp" data-wow-delay="0.2s">
                            <h3>open hours</h3>
                            <ul>
                                <li>Mon - Thu <span>10:00 AM - 09:00 PM</span></li>
                                <li>Fri - Sat <span>09:00 AM - 10:00 PM</span></li>
                                <li>Sun <span>Closed</span></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="col-lg-6">
                    
                    <div className="reserve-table-form">
                        <form id="appointmentForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp">
                            <div className="row">
                                <div className="form-group col-md-12 mb-4">
                                    <label className="form-label">your name</label>
                                    <input type="text" name="name" className="form-control" id="name" placeholder="e.g. John" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <label className="form-label">email address</label>
                                    <input type="email" name ="email" className="form-control" id="email" placeholder="e.g. John@example.com" required />
                                    <div className="help-block with-errors"></div>
                                </div>
                                
                                <div className="form-group col-md-6 mb-4">
                                    <label className="form-label">phone number</label>
                                    <input type="text" name="phone" className="form-control" id="phone" placeholder="e.g. + 123 456 8792" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-4 mb-4">
                                    <label className="form-label">date</label>
                                    <input type="date" name="date" className="form-control" id="date" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-4 mb-4">
                                    <label className="form-label">time</label>
                                    <select name="time" className="form-control form-select" id="time" required>
                                        <option value="" disabled defaultValue>Select time</option>
                                        <option value="6_30pm">06:30 PM</option>
                                        <option value="7_00pm">07:00 PM</option>
                                        <option value="7_30pm">07:30 PM</option>
                                        <option value="8_00pm">08:00 PM</option>
                                        <option value="8_30pm">08:30 PM</option>
                                        <option value="9_00pm">09:00 PM</option>
                                    </select>
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-4 mb-4">
                                    <label className="form-label">Number Of Person</label>
                                    <select name="person" className="form-control form-select" id="person" required>
                                        <option value="" disabled defaultValue>number of person</option>
                                        <option value="1_person">1 Person</option>
                                        <option value="5_person">5 Person</option>
                                        <option value="10_person">10 Person</option>
                                        <option value="15_person">15 Person</option>
                                        <option value="20_person">20 Person</option>
                                    </select>
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="reserve-table-btn">
                                        <button type="submit" className="btn-default">reserve now</button>
                                        <div id="msgSubmit" className="h3 hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    
    
    
        </main>
    );
};

export default VideoGallery;

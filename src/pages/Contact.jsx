
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
						<h1 className="text-anime-style-2" data-cursor="-opaque">Contact us</h1>
						<nav className="wow fadeInUp">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">contact us</li>
							</ol>
						</nav>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	

    
    <div className="page-contact-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    
                    <div className="contact-us-content">
                        
                        <div className="section-title">
                            <h3 className="wow fadeInUp">contact us</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Get in touch <span>with us</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Have questions or feedback? Reach out to us through the form below, call us, or visit our restaurant. We're here to help and look forward to connecting with you!</p>
                        </div>
                        

                        
                        <div className="contact-info-list wow fadeInUp" data-wow-delay="0.4s">
                            <ul>
                                <li>F-111 Sector-8 Noida Top Floor</li>
                                <li><a href="tel:9217014763">9217014763</a></li>
                            </ul>
                        </div>
                        

                        
                        <div className="contact-social-list wow fadeInUp" data-wow-delay="0.6s">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/golden_spoon_restaurrant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="col-lg-6">
                    
                    <div className="contact-form">
                        <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp">
                            <div className="row">                                
                                <div className="form-group col-md-12 mb-4">
                                    <label className="form-label">your name</label>
                                    <input type="text" name="Name" className="form-control" id="Name" placeholder="e.g. John" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <label className="form-label">email address</label>
                                    <input type="email" name ="Email" className="form-control" id="Email" placeholder="e.g. John@example.com" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <label className="form-label">phone number</label>
                                    <input type="text" name="Phone" className="form-control" id="Phone" placeholder="e.g. + 123 456 879 2" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-12 mb-5">
                                    <label className="form-label">message</label>
                                    <textarea name="Message" className="form-control" id="Message" rows="4" placeholder="Write Message.."></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="col-md-12">
                                    <button type="submit" className="btn-default">submit inquiry</button>
                                    <div id="MsgSubmit" className="h3 hidden"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="google-map">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="google-map-iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.461937922718!2d77.3197669!3d28.5859187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50700000001%3A0x4000000000000000!2sF-111%2C%20Sector%208%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1715760000000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                                <li>Mon - Thu <span>11:00 AM - 07:00 PM</span></li>
                                <li>Fri - Sat <span>11:00 AM - 07:00 PM</span></li>
                                <li>Sun <span>11:00 AM - 07:00 PM</span></li>
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
                                        <option value="11_00am">11:00 AM</option>
                                        <option value="12_00pm">12:00 PM</option>
                                        <option value="1_00pm">01:00 PM</option>
                                        <option value="2_00pm">02:00 PM</option>
                                        <option value="3_00pm">03:00 PM</option>
                                        <option value="4_00pm">04:00 PM</option>
                                        <option value="5_00pm">05:00 PM</option>
                                        <option value="6_00pm">06:00 PM</option>
                                        <option value="7_00pm">07:00 PM</option>
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

export default Contact;

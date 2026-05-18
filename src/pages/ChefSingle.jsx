
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChefSingle = () => {
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
						<h1 className="text-anime-style-2" data-cursor="-opaque">Rakesh</h1>
						<nav className="wow fadeInUp">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">home</Link></li>
								<li className="breadcrumb-item"><Link to="/chefs">chefs</Link></li>
								<li className="breadcrumb-item active" aria-current="page">Rakesh </li>
							</ol>
						</nav>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	

    
    <div className="page-team-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    
                    <div className="team-single-sidebar">
                        
                        <div className="team-single-image">
                            <figure className="image-anime">
                                <img src="/images/team-1.jpg" alt="" />
                            </figure>
                        </div>
                        
                        
                        
                        <div className="sidebar-cta-box wow fadeInUp">
                            
                            <div className="icon-box">
                                <img src="/images/icon-sidebar-cta.svg" alt="" />
                            </div>
                            

                            
                            <div className="cta-contact-content">
                                <h3>You have different questions?</h3>
                                <p>Our team will answer all your questions. we ensure a quick response.</p>
                            </div>
                            

                            
                            <div className="cta-contact-btn">
                                <a href="tel:9217014763" className="btn-default btn-highlighted"><img src="/images/icon-sidebar-cta-phone.svg" alt="" />+9217014763</a>
                            </div>
                            
                        </div>
                        
                    </div> 
                                     
                </div>

                <div className="col-lg-8">
                    
                    <div className="team-single-content">
                        
                        <div className="team-member-info">
                            
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Chef</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">About <span>me</span></h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">Rakesh is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurant's guests. William's leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.</p>
                            </div>
                            

                            
                            <div className="team-info-list wow fadeInUp" data-wow-delay="0.4s">
                                <ul>
                                    <li>Specialty : <span>Chef</span></li>
                                    <li>Experience : <span>12 years of experience</span></li>
                                    <li>Email: <span>info@domain.com</span></li>
                                    <li>Phone: <span>+123 456 789</span></li>
                                </ul>
                            </div>
                            
                        </div>
                        

                        
                        <div className="team-member-contact-form">
                            
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Contact <span>me</span></h2>
                                <p className="wow fadeInUp">Rakesh is a talented and passionate Chef de Cuisine, known for her innovative approach to modern cuisine. With years of experience in fine dining, she leads the kitchen with creativity and precision. Her expertise in flavor pairing and culinary techniques ensures that every dish not only meets but exceeds the expectations of the restaurant's guests. William's leadership fosters a collaborative and efficient kitchen environment, allowing her team to deliver consistently exceptional dining experiences.</p>
                            </div>
                            

                            
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
                                <li>Mon - Sat<span>11:00 AM - 07:00 PM</span></li>
                                
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

export default ChefSingle;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
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
						<h1 className="text-anime-style-2" data-cursor="-opaque">our menu</h1>
						<nav className="wow fadeInUp">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">menu</li>
							</ol>
						</nav>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	

    
    <div className="page-menu">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    
                    <div className="section-title">
                        <h3 className="wow fadeInUp">taste the best that surprise you</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">our special <span>menu</span></h2>
                        <p className="wow fadeInUp" data-wow-delay="0.2s">Enjoy the unique dishes from the basillico restaurant that only our restaurant has,Fusce malesuada, lorem vitae euismod lobortis.</p>
                    </div>
                    
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="special-menu-list">
                        
                        <div className="special-menu-item wow fadeInUp">
                            <div className="special-menu-img">
                                <a href="#starters" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <img src="/images/special-menu-img-1.jpg" alt="" />
                                    </figure>
                                </a>
                            </div>
                            <div className="special-menu-item-content">
                                <h3><a href="#starters">starters</a></h3>
                            </div>
                        </div>
                        

                        
                        <div className="special-menu-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="special-menu-img">
                                <a href="#vegetables" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <img src="/images/special-menu-img-2.jpg" alt="" />
                                    </figure>
                                </a>
                            </div>
                            <div className="special-menu-item-content">
                                <h3><a href="#vegetables">vegetables</a></h3>
                            </div>
                        </div>
                        

                        
                        <div className="special-menu-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="special-menu-img">
                                <a href="#seafood" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <img src="/images/special-menu-img-3.jpg" alt="" />
                                    </figure>
                                </a>
                            </div>
                            <div className="special-menu-item-content">
                                <h3><a href="#seafood">seafood</a></h3>
                            </div>
                        </div>
                        

                        
                        <div className="special-menu-item wow fadeInUp" data-wow-delay="0.6s">
                            <div className="special-menu-img">
                                <a href="#desserts" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <img src="/images/special-menu-img-4.jpg" alt="" />
                                    </figure>
                                </a>
                            </div>
                            <div className="special-menu-item-content">
                                <h3><a href="#desserts">desserts</a></h3>
                            </div>
                        </div>
                        

                        
                        <div className="special-menu-item wow fadeInUp" data-wow-delay="0.8s">
                            <div className="special-menu-img">
                                <a href="#beverages" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <img src="/images/special-menu-img-5.jpg" alt="" />
                                    </figure>
                                </a>
                            </div>
                            <div className="special-menu-item-content">
                                <h3><a href="#beverages">beverages</a></h3>
                            </div>
                        </div>
                        

                        
                        <div className="special-menu-item wow fadeInUp" data-wow-delay="1s">
                            <div className="special-menu-img">
                                <a href="#salads_soups" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <img src="/images/special-menu-img-6.jpg" alt="" />
                                    </figure>
                                </a>
                            </div>
                            <div className="special-menu-item-content">
                                <h3><a href="#salads_soups">salads & soups</a></h3>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="our-food-menu">
        
        <div className="food-menu-item" id="starters">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        
                        <div className="food-menu-sidebar">
                            
                            <div className="section-title">
                                <h3 className="wow fadeInUp">menu & pricing</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Starters</h2>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="col-lg-9">
                        
                        <div className="our-menu-list">
                            
                            <div className="our-menu-item wow fadeInUp">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/starters-img-1.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Spring rolls</h3>
                                        <hr />
                                        <span>$16.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Crispy rolls filled with vegetables, served with dipping sauce.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/starters-img-2.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Aloo tikki</h3>
                                        <hr />
                                        <span>$12.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Golden potato patties served with chutney.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/starters-img-3.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Paneer tikka</h3>
                                        <hr />
                                        <span>$26.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Grilled paneer cubes, spiced to perfection.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/starters-img-4.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Hara kebab</h3>
                                        <hr />
                                        <span>$20.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Green vegetable and herb kebabs, grilled to perfection.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/starters-img-5.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Chili mushrooms</h3>
                                        <hr />
                                        <span>$10.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Spicy, crispy mushrooms with a tangy twist.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="1s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/starters-img-6.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Veg Pakoras</h3>
                                        <hr />
                                        <span>$22.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Crispy vegetable fritters with a dip.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="food-menu-item"  id="vegetables">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="food-menu-sidebar">
                            
                            <div className="section-title">
                                <h3 className="wow fadeInUp">menu & pricing</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">vegetables</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-9">
                        
                        <div className="our-menu-list">
                            
                            <div className="our-menu-item wow fadeInUp">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/vegetables-img-1.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Veg biryani</h3>
                                        <hr />
                                        <span>$06.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Octopus Fennel pairs tender octopus with fresh fennel.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/vegetables-img-2.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Baingan bharta</h3>
                                        <hr />
                                        <span>$05.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Crispy, freshly made chips paired with rich, flavorful dips.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/vegetables-img-3.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Paneer Butter</h3>
                                        <hr />
                                        <span>$06.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Corn Tostada offers a crunchy base with tasty toppings.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/vegetables-img-4.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Palak Paneer</h3>
                                        <hr />
                                        <span>$08.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Zesty Rolls are filled with vibrant flavors wrapped in a crispy.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/vegetables-img-5.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Aloo gobi</h3>
                                        <hr />
                                        <span>$10.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Spicy Bites features crispy, flavorful snacks with a bold, spicy kick.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="1s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/vegetables-img-6.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>Veg. curry</h3>
                                        <hr />
                                        <span>$08.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Fire Grill offers perfectly charred, smoky-flavored dishes.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="food-menu-item"  id="seafood">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="food-menu-sidebar">
                            
                            <div className="section-title">
                                <h3 className="wow fadeInUp">menu & pricing</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">seafood</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-9">
                        
                        <div className="our-menu-list">
                            
                            <div className="our-menu-item wow fadeInUp">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/seafood-img-1.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>grilled salmon</h3>
                                        <hr />
                                        <span>$12.99</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Octopus Fennel pairs tender octopus with fresh fennel.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/seafood-img-2.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>calamari rings</h3>
                                        <hr />
                                        <span>$05.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Crispy, freshly made chips paired with rich, flavorful dips.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/seafood-img-3.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>shrimp masala</h3>
                                        <hr />
                                        <span>$09.10</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Corn Tostada offers a crunchy base with tasty toppings.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/seafood-img-4.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>lobster roll</h3>
                                        <hr />
                                        <span>$18.99</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Zesty Rolls are filled with vibrant flavors wrapped in a crispy.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/seafood-img-5.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>fish tacos</h3>
                                        <hr />
                                        <span>$12.10</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Spicy Bites features crispy, flavorful snacks with a bold, spicy kick.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="1s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/seafood-img-6.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>fish curry</h3>
                                        <hr />
                                        <span>$18.50</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Fire Grill offers perfectly charred, smoky-flavored dishes.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="food-menu-item"  id="desserts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="food-menu-sidebar">
                            
                            <div className="section-title">
                                <h3 className="wow fadeInUp">menu & pricing</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">desserts</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-9">
                        
                        <div className="our-menu-list">
                            
                            <div className="our-menu-item wow fadeInUp">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/desserts-img-1.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>choco lava cake</h3>
                                        <hr />
                                        <span>$06.99</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Warm, gooey chocolate cake with a molten center.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/desserts-img-2.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>gulab jamun</h3>
                                        <hr />
                                        <span>$15.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Soft, syrup-soaked Indian sweet dumplings.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/desserts-img-3.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>tiramisu</h3>
                                        <hr />
                                        <span>$16.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>A creamy, coffee-flavored Italian classic.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/desserts-img-4.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>vanilla panna</h3>
                                        <hr />
                                        <span>$20.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Creamy, silky dessert with a hint of vanilla..</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/desserts-img-5.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>berry cake</h3>
                                        <hr />
                                        <span>$10.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Smooth cheesecake topped with fresh berries.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="1s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/desserts-img-6.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>apple pie</h3>
                                        <hr />
                                        <span>$22.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Warm, spiced apple filling in a flaky crust.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="food-menu-item"  id="beverages">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="food-menu-sidebar">
                            
                            <div className="section-title">
                                <h3 className="wow fadeInUp">menu & pricing</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">beverages</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-9">
                        
                        <div className="our-menu-list">
                            
                            <div className="our-menu-item wow fadeInUp">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/beverages-img-1.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>mango lassi</h3>
                                        <hr />
                                        <span>$04.50</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>A refreshing yogurt-based mango drink.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/beverages-img-2.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>masala chai</h3>
                                        <hr />
                                        <span>$05.50</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Spiced Indian tea with a bold flavor.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/beverages-img-3.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>iced coffee</h3>
                                        <hr />
                                        <span>$07.99</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Chilled coffee with a smooth, rich flavor.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/beverages-img-4.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>mint mojito</h3>
                                        <hr />
                                        <span>$04.99</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>A cool, minty drink with a citrus kick.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/beverages-img-5.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>lemonade</h3>
                                        <hr />
                                        <span>$05.10</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Sweet and tangy homemade lemonade.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="1s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/beverages-img-6.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>coconut water</h3>
                                        <hr />
                                        <span>$03.99</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Naturally refreshing and hydrating coconut water.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="food-menu-item"  id="salads_soups">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="food-menu-sidebar">
                            
                            <div className="section-title">
                                <h3 className="wow fadeInUp">menu & pricing</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">salads & soups</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-9">
                        
                        <div className="our-menu-list">
                            
                            <div className="our-menu-item wow fadeInUp">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/salads-img-1.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>greek salad</h3>
                                        <hr />
                                        <span>$06.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>A fresh mix of cucumbers, olives, feta, and tomatoes drizzled.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/salads-img-2.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>minestrone soup</h3>
                                        <hr />
                                        <span>$05.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Hearty vegetable soup with pasta and beans in a savory broth.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/salads-img-3.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>caesar salad</h3>
                                        <hr />
                                        <span>$06.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Crisp lettuce, creamy dressing, croutons, and parmesan cheese.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/salads-img-4.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>chicken salad</h3>
                                        <hr />
                                        <span>$08.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>Grilled chicken, mixed greens, avocado, and a tangy dressing.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/salads-img-5.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>tomato soup</h3>
                                        <hr />
                                        <span>$10.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>A rich, velvety tomato soup with a hint of basil.</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                            
                            <div className="our-menu-item wow fadeInUp" data-wow-delay="1s">
                                
                                <div className="our-menu-image">
                                    <figure>
                                        <img src="/images/salads-img-6.png" alt="" />
                                    </figure>
                                </div>
                                

                                
                                <div className="menu-item-body">
                                    
                                    <div className="menu-item-title">
                                        <h3>sweet corn soup</h3>
                                        <hr />
                                        <span>$08.00</span>
                                    </div>
                                    

                                    
                                    <div className="menu-item-content">
                                        <p>A warm and comforting corn-based soup with mild spices.</p>
                                    </div>
                                    
                                </div>
                                
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
                        

                        
                        <div className="reserve-table-body">
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

export default Menu;

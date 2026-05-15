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
                                <p className="wow fadeInUp" data-wow-delay="0.2s">Enjoy the unique dishes from the Golden Spoon restaurant that only our restaurant has.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="special-menu-list">
                                <div className="special-menu-item wow fadeInUp" data-wow-delay="0s">
                                    <div className="special-menu-img">
                                        <a href="#tandoor" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="/menu/tandoori-platter.jpeg" style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="Tandoor" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="special-menu-item-content">
                                        <h3><a href="#tandoor">Tandoor</a></h3>
                                    </div>
                                </div>
                                <div className="special-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="special-menu-img">
                                        <a href="#wrap-roll" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="/menu/veg-roll.jpeg" style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="Wrap & Roll" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="special-menu-item-content">
                                        <h3><a href="#wrap-roll">Wrap & Roll</a></h3>
                                    </div>
                                </div>
                                <div className="special-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="special-menu-img">
                                        <a href="#roti-rasoi" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="/menu/butter-naan.jpeg" style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="Roti Rasoi" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="special-menu-item-content">
                                        <h3><a href="#roti-rasoi">Roti Rasoi</a></h3>
                                    </div>
                                </div>
                                <div className="special-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                    <div className="special-menu-img">
                                        <a href="#sandwiches-burgers" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="/menu/veg-burger.jpeg" style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="Sandwiches & Burgers" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="special-menu-item-content">
                                        <h3><a href="#sandwiches-burgers">Sandwiches & Burgers</a></h3>
                                    </div>
                                </div>
                                <div className="special-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="special-menu-img">
                                        <a href="#pizza" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="/menu/farmhouse-pizza.png" style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="Pizza" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="special-menu-item-content">
                                        <h3><a href="#pizza">Pizza</a></h3>
                                    </div>
                                </div>
                                <div className="special-menu-item wow fadeInUp" data-wow-delay="1s">
                                    <div className="special-menu-img">
                                        <a href="#snacks" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="/menu/french-fries.jpeg" style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="Snacks" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="special-menu-item-content">
                                        <h3><a href="#snacks">Snacks</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-food-menu">
                <div className="food-menu-item" id="tandoor">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Tandoor</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/achari-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Achari Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Achari Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹120</small><br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/achari-mushroom-tikka.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Achari Mushroom Tikka" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Achari Mushroom Tikka</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/achari-paneer-tikka.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Achari Paneer Tikka" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Achari Paneer Tikka</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹210</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/afghani-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Afghani Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Afghani Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹190</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/dahi-ke-sholey.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Dahi Ke Sholey" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Dahi Ke Sholey</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹150</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/haryali-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Haryali Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Haryali Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹120</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/haryali-paneer-tikka.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Haryali Paneer Tikka" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Haryali Paneer Tikka</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹140</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹210</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/malai-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Malai Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Malai Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹120</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/malai-paneer-tikka.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Malai Paneer Tikka" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Malai Paneer Tikka</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹140</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹210</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mushroom-tikka.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mushroom Tikka" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mushroom Tikka</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/stuffed-malai-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Stuffed Malai Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Stuffed Malai Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹150</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/stuffed-tandoori-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Stuffed Tandoori Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Stuffed Tandoori Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹150</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tandoori-masala-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tandoori Masala Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tandoori Masala Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹110</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹170</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tandoori-paneer-tikka.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tandoori Paneer Tikka" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tandoori Paneer Tikka</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹210</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tandoori-platter.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tandoori Platter" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tandoori Platter</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹399</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="wrap-roll">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Wrap & Roll</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/afghani-chaap-roll.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Afghani Chaap Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Afghani Chaap Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-mushroom-wrap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Mushroom Wrap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Mushroom Wrap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-paneer-wrap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Paneer Wrap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Paneer Wrap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/malai-chaap-roll.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Malai Chaap Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Malai Chaap Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-roll.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tandoori-chaap-roll.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tandoori Chaap Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tandoori Chaap Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-manchurian-roll.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Manchurian Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Manchurian Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-roll.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="roti-rasoi">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Roti Rasoi</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/aloo-naan.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Aloo Naan" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Aloo Naan</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹45</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/aloo-paratha.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Aloo Paratha" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Aloo Paratha</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹40</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/aloo-pyaaz-paratha.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Aloo Pyaaz Paratha" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Aloo Pyaaz Paratha</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹60</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/amritsari-kulcha.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Amritsari Kulcha" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Amritsari Kulcha</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/butter-naan.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Butter Naan" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Butter Naan</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹40</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/classic-boondi-raita.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Classic Boondi Raita" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Classic Boondi Raita</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹56</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/garlic-naan.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Garlic Naan" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Garlic Naan</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/lachcha-paratha.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Lachcha Paratha" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Lachcha Paratha</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹40</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/masala-missi-roti.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Masala Missi Roti" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Masala Missi Roti</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹35</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/missi-roti.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Missi Roti" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Missi Roti</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹30</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mix-veg-paratha.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mix Veg Paratha" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mix Veg Paratha</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mix-veg-raita.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mix Veg Raita" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mix Veg Raita</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹64</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/onion-missi-roti.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Onion Missi Roti" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Onion Missi Roti</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹30</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-naan.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Naan" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Naan</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-paratha.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Paratha" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Paratha</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/plain-naan.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Plain Naan" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Plain Naan</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹30</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/pudina-naan.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Pudina Naan" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Pudina Naan</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹45</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/rumali-roti.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Rumali Roti" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Rumali Roti</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹10</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/special-pineapple-raita.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Special Pineapple Raita" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Special Pineapple Raita</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹72</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/stuffed-kulcha.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Stuffed Kulcha" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Stuffed Kulcha</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/stuffed-naan.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Stuffed Naan" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Stuffed Naan</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹60</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tandoori-plain-roti.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tandoori Plain Roti" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tandoori Plain Roti</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹12</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tandoori-roti-butter.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tandoori Roti Butter" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tandoori Roti Butter</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹15</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="sandwiches-burgers">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Sandwiches & Burgers</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/aloo-sandwich.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Aloo Sandwich" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Aloo Sandwich</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/cheese-burger.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Cheese Burger" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Cheese Burger</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹60</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/cheese-corn-sandwich.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Cheese Corn Sandwich" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Cheese Corn Sandwich</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹60</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-paneer-sandwich.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Paneer Sandwich" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Paneer Sandwich</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/double-patty-burger.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Double Patty Burger" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Double Patty Burger</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/grilled-sandwich.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Grilled Sandwich" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Grilled Sandwich</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-burger.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Burger" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Burger</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-kurkure-burger.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Kurkure Burger" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Kurkure Burger</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veggie-delight-burger.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veggie Delight Burger" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veggie Delight Burger</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="pizza">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Pizza</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/american-remix-pizza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="American Remix Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>American Remix Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹90 <br/> 8 inch: ₹140 <br/> 10 inch: ₹190</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/capsicum-cheese-pizza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Capsicum Cheese Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Capsicum Cheese Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹70 <br/> 8 inch: ₹120 <br/> 10 inch: ₹170</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/exotic-veg-pizza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Exotic Veg Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Exotic Veg Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹90 <br/> 8 inch: ₹140 <br/> 10 inch: ₹190</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/farmhouse-pizza.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Farmhouse Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Farmhouse Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹80 <br/> 8 inch: ₹130 <br/> 10 inch: ₹180</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/golden-corn-pizza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Golden Corn Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Golden Corn Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹70 <br/> 8 inch: ₹120 <br/> 10 inch: ₹170</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/margherita-pizza.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Margherita Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Margherita Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹70 <br/> 8 inch: ₹120 <br/> 10 inch: ₹170</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/onion-capsicum-pizza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Onion Capsicum Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Onion Capsicum Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹80 <br/> 8 inch: ₹130 <br/> 10 inch: ₹180</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-tikka-pizza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Tikka Pizza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Tikka Pizza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><span style={{whiteSpace: 'nowrap', fontSize: '0.85em', display: 'inline-block', lineHeight: '1.4'}}>6 inch: ₹80 <br/> 8 inch: ₹130 <br/> 10 inch: ₹180</span></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="snacks">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Snacks</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/cheesy-fries.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Cheesy Fries" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Cheesy Fries</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-baby-corn.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Baby Corn" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Baby Corn</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹90</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹150</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹70</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-mushroom.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Mushroom" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Mushroom</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹128</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-paneer-dry.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Paneer Dry" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Paneer Dry</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹90</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹150</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-paneer-gravy.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Paneer Gravy" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Paneer Gravy</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹100</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹160</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-potato.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Potato" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Potato</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹70</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/crispy-corn.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Crispy Corn" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Crispy Corn</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/french-fries.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="French Fries" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>French Fries</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/honey-chilli-potato.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Honey Chilli Potato" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Honey Chilli Potato</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/peri-peri-fries.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Peri-Peri Fries" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Peri-Peri Fries</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-manchurian-dry.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Manchurian Dry" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Manchurian Dry</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-manchurian-gravy.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Manchurian Gravy" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Manchurian Gravy</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹90</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹140</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-spring-roll.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Spring Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Spring Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="main-course">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Main Course</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chaap-butter-masala.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chaap Butter Masala" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chaap Butter Masala</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹110</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/dal-fry.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Dal Fry" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Dal Fry</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹70</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/dal-handi.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Dal Handi" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Dal Handi</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹110</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/dal-makhani.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Dal Makhani" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Dal Makhani</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹100</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/dal-tadka.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Dal Tadka" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Dal Tadka</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹90</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/dum-aloo-kashmiri.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Dum Aloo Kashmiri" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Dum Aloo Kashmiri</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹120</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹200</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/kadhai-chaap.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Kadhai Chaap" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Kadhai Chaap</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/kadhai-paneer.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Kadhai Paneer" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Kadhai Paneer</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹230</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/malai-kofta-red-gravy.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Malai Kofta Red Gravy" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Malai Kofta Red Gravy</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/matar-mushroom.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Matar Mushroom" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Matar Mushroom</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹115</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹190</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/matar-paneer.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Matar Paneer" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Matar Paneer</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹120</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹200</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mix-veg.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mix Veg" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mix Veg</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹110</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mushroom-do-pyaaza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mushroom Do Pyaaza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mushroom Do Pyaaza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹120</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹200</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-bhurji.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Bhurji" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Bhurji</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹140</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹240</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-butter-masala.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Butter Masala" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Butter Masala</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-do-pyaaza.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Do Pyaaza" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Do Pyaaza</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹120</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹210</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-handi.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Handi" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Handi</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹150</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹260</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-lababdar.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Lababdar" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Lababdar</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹230</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-pasanda.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Pasanda" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Pasanda</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹140</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹240</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-tikka-masala.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Tikka Masala" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Tikka Masala</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹140</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹240</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/shahi-paneer.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Shahi Paneer" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Shahi Paneer</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tawa-chaap-curry.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tawa Chaap Curry" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tawa Chaap Curry</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹130</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="maggie">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Maggie</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/cheesy-maggie.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Cheesy Maggie" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Cheesy Maggie</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/peri-peri-maggie.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Peri-Peri Maggie" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Peri-Peri Maggie</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹60</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/plain-maggie.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Plain Maggie" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Plain Maggie</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹40</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veggie-maggie.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veggie Maggie" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veggie Maggie</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="momo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Momo</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-afghani-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Afghani Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Afghani Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹110</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹150</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-fried-momo.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Fried Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Fried Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹100</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-kurkure-momo.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Kurkure Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Kurkure Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹110</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹130</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-steamed-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Steamed Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Steamed Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-tandoori-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Tandoori Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Tandoori Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹100</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹140</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-afghani-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Afghani Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Afghani Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹110</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹140</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-fried-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Fried Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Fried Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹60</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-kurkure-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Kurkure Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Kurkure Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹70</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-steamed-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Steamed Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Steamed Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹50</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-tandoori-momo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Tandoori Momo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Tandoori Momo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹90</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹130</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="noodles">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Noodles</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-garlic-noodles.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Garlic Noodles" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Garlic Noodles</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹60</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-noodles.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Noodles" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Noodles</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/singapuri-noodles.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Singapuri Noodles" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Singapuri Noodles</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-hakka-noodles.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Hakka Noodles" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Hakka Noodles</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹60</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-noodles.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Noodles" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Noodles</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹50</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="rice">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Rice</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chilli-garlic-fried-rice.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chilli Garlic Fried Rice" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chilli Garlic Fried Rice</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹70</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹110</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-fried-rice.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Fried Rice" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Fried Rice</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹90</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹130</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-corn-rice.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Corn Rice" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Corn Rice</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-fried-rice.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Fried Rice" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Fried Rice</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹70</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-singapuri-fried-rice.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Singapuri Fried Rice" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Singapuri Fried Rice</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Half: ₹80</small> <br/><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="pulao-biryani">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Pulao & Biryani</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/jeera-rice.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Jeera Rice" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Jeera Rice</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/kashmiri-pulao.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Kashmiri Pulao" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Kashmiri Pulao</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹130</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mutter-pulao.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mutter Pulao" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mutter Pulao</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/steamed-rice.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Steamed Rice" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Steamed Rice</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-hyderabadi-biryani.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Hyderabadi Biryani" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Hyderabadi Biryani</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹150</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-pulao.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Pulao" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Pulao</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="italian-pasta">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Italian Pasta</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mushroom-onion-pasta--red-sauce-.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mushroom Onion Pasta (Red Sauce)" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mushroom Onion Pasta (Red Sauce)</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mushroom-onion-pasta--white-sauce-.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mushroom Onion Pasta (White Sauce)" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mushroom Onion Pasta (White Sauce)</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/pink-sauce-pasta.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Pink Sauce Pasta" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Pink Sauce Pasta</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹130</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/red-sauce-pasta.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Red Sauce Pasta" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Red Sauce Pasta</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/white-sauce-pasta.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="White Sauce Pasta" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>White Sauce Pasta</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹120</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="hotspot-soups">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Hotspot Soups</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/hot-n-sour-soup.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Hot N Sour Soup" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Hot N Sour Soup</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹60</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/manchow-soup.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Manchow Soup" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Manchow Soup</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/talumein-soup.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Talumein Soup" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Talumein Soup</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹60</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tomato-soup.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tomato Soup" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tomato Soup</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/veg-sweet-corn-soup.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Veg Sweet Corn Soup" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Veg Sweet Corn Soup</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="combo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Combo</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/china-town.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="China Town" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>China Town</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/kungfu-bowl.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Kungfu Bowl" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Kungfu Bowl</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹99</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/roll-s-roller.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Roll'S Roller" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Roll'S Roller</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹110</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/sip-n-roll.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Sip-N-Roll" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Sip-N-Roll</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹110</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/thaar-roll-s.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Thaar Roll'S" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Thaar Roll'S</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹110</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="combo-ke-sath">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Combo Ke Sath</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chur-chur-naan-thali.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chur-Chur Naan Thali" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chur-Chur Naan Thali</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹110</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/combo-bowl.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Combo Bowl" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Combo Bowl</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/delight-combo.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Delight Combo" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Delight Combo</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/malai-chaap---2-rumali--cold-drink.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Malai Chaap + 2 Rumali + Cold Drink" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Malai Chaap + 2 Rumali + Cold Drink</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/masala-chaap--2-rumali--cold-drink.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Masala Chaap + 2 Rumali + Cold Drink" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Masala Chaap + 2 Rumali + Cold Drink</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹170</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/paneer-tikka-masala---2-rumali--cold-drink.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Paneer Tikka Masala + 2 Rumali + Cold Drink" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Paneer Tikka Masala + 2 Rumali + Cold Drink</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹180</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/regular-thali.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Regular Thali" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Regular Thali</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹150</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/standard-thali.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Standard Thali" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Standard Thali</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹100</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/super-deluxe-thali.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Super Deluxe Thali" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Super Deluxe Thali</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹220</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="beverages">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Beverages</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/images/logo.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Bisleri" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Bisleri</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: MRP applicable</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/images/logo.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Coke" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Coke</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: MRP applicable</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/images/logo.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Fanta" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Fanta</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: MRP applicable</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/hot-chocolate-milk.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Hot Chocolate Milk" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Hot Chocolate Milk</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/hot-coffee.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Hot Coffee" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Hot Coffee</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹40</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/masala-tea.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Masala Tea" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Masala Tea</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹30</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/images/logo.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Pepsi" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Pepsi</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: MRP applicable</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/tea.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Tea" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Tea</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹15</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/images/logo.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Thums Up" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Thums Up</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: MRP applicable</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="mojito">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Mojito</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/blood-orange-mojito.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Blood Orange Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Blood Orange Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/blue-lagoon-mojito.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Blue Lagoon Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Blue Lagoon Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/green-apple-mojito.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Green Apple Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Green Apple Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mango-mojito.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mango Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mango Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/peach-mojito.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Peach Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Peach Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/pineapple-mojito.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Pineapple Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Pineapple Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/strawberry-mojito.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Strawberry Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Strawberry Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/virgin-mojito.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Virgin Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Virgin Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/water-melon-mojito.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Water Melon Mojito" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Water Melon Mojito</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹69</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="chill-sip">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Chill & Sip</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/blueberry-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Blueberry Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Blueberry Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/chocolate-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Chocolate Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Chocolate Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/cold-coffee.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Cold Coffee" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Cold Coffee</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/kit-kat-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Kit-Kat Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Kit-Kat Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/mango-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Mango Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Mango Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/oreo-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Oreo Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Oreo Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹80</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/pine-apple-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Pineapple Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Pineapple Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/strawberry-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Strawberry Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Strawberry Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.6000000000000001s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/vanilla-milk-shake.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Vanilla Milk Shake" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Vanilla Milk Shake</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹70</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="the-dahi-house">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">The Dahi House</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/boondi-raita.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Boondi Raita" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Boondi Raita</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹35</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/fresh-plain-curd.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Fresh Plain Curd" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Fresh Plain Curd</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹30</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-menu-item" id="dessert">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="food-menu-sidebar">
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">menu & pricing</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Dessert</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="our-menu-list">
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/gulab-jamun--per-pc-.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Gulab Jamun (Per Pc)" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Gulab Jamun (Per Pc)</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹40</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/special-thandi-kheer.jpeg" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Special Thandi Kheer" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Special Thandi Kheer</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹90</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our-menu-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="our-menu-image">
                                            <figure>
                                                <img src="/menu/sponge-rasgulla--per-pc-.png" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%'}} alt="Sponge Rasgulla (Per Pc)" />
                                            </figure>
                                        </div>
                                        <div className="menu-item-body">
                                            <div className="menu-item-title" style={{ alignItems: 'flex-start' }}>
                                                <h3>Sponge Rasgulla (Per Pc)</h3>
                                                <hr style={{ alignSelf: 'center', flex: 1, margin: '0 15px' }} />
                                                <span style={{ textAlign: 'right' }}><small style={{whiteSpace: 'nowrap', fontSize: '0.9em'}}>Full: ₹50</small></span>
                                            </div>
                                            <div className="menu-item-content">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Menu;

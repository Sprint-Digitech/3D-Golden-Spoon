import os

filepath = 'd:/3DSpoonRestaurant/spicyhunt-react/src/pages/Faqs.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '                    <div className="page-faqs-catagery">'
end_marker = '                    </div>\n                                   \n                </div>'

idx1 = content.find(start_marker)
idx2 = content.find(end_marker)

if idx1 == -1 or idx2 == -1:
    print("Could not find markers!")
    print("idx1:", idx1, "idx2:", idx2)
    exit(1)

new_block = """                    <div className="page-faqs-catagery">
                        
                        <div className="faq-accordion page-faq-accordion" id="general_information">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">general <span>information</span></h2>
                            </div>
                            
                            <div className="faq-accordion" id="accordion">
                                
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            1. What are your restaurant's hours of operation?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>We are open Monday to Saturday from 11:00 AM to 07:00 PM. We are closed on Sundays.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            2. Do you offer takeout or delivery services?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Yes, we offer both takeout and direct delivery services! You can call us at +91 9217014763 to place your order.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            3. Do I need to make a reservation?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Reservations are recommended, especially during busy hours or for larger groups, though walk-ins are always welcome.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            4. Is parking available at your restaurant?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Yes, we have free parking available for our customers right in front of the restaurant premises.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            5. Do you accommodate dietary restrictions?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Yes, we accommodate various dietary requirements, including gluten-free, vegan, and nut allergies. Please inform our servers before ordering.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        

                        
                        <div className="faq-accordion page-faq-accordion" id="services_and-offerings">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">services and <span>offerings</span></h2>
                            </div>
                            
                            <div className="faq-accordion" id="accordion1">
                                
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading6">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                            1. What type of cuisine do you offer?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse show" aria-labelledby="heading6" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>We specialize in premium Indian and multi-cuisine dishes prepared with the freshest ingredients by our expert chefs.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading7">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                            2. Do you offer catering services?
                                        </button>
                                    </h2>
                                    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Yes! We offer catering for private parties, corporate events, weddings, and family gatherings. Reach out to us for customized menu options.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading8">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                            3. Can I customize my meal?
                                        </button>
                                    </h2>
                                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Absolutely. You can request spice level adjustments, remove specific ingredients, or customize dishes to your liking.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading9">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                            4. Do you offer any special promotions or discounts?
                                        </button>
                                    </h2>
                                    <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Yes, we offer special weekday lunch deals and discounts for loyal members. Follow our website or contact us to check the latest active promotions.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading10">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                            5. Is there a kids' menu available?
                                        </button>
                                    </h2>
                                    <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Yes, we have a dedicated kid's menu featuring milder spice levels and kid-friendly portions of popular favorites.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        

                        
                        <div className="faq-accordion page-faq-accordion" id="pricing_and_payment">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">pricing <span>and payment</span></h2>
                            </div>
                            
                            <div className="faq-accordion" id="accordion2">
                                
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading11">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                            1. How are your prices determined?
                                        </button>
                                    </h2>
                                    <div id="collapse11" className="accordion-collapse collapse show" aria-labelledby="heading11" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Our prices are determined based on the quality of ingredients, preparation hygiene, and the premium dining experience we provide.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading12">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                            2. Do you accept credit/debit cards?
                                        </button>
                                    </h2>
                                    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Yes, we accept all major credit/debit cards, UPI, digital wallets (Paytm, PhonePe, GPay), and cash payments.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading13">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                            3. Is tipping included in the bill?
                                        </button>
                                    </h2>
                                    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Tipping is entirely voluntary and is not automatically added to your bill. If you liked our service, you are welcome to leave a tip.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading14">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                            4. Do you offer any payment plans for large events or catering?
                                        </button>
                                    </h2>
                                    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>For catering and large group bookings, we require a 50% deposit to confirm the date, with the balance due on the day of the event.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading15">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                            5. Are there any hidden fees or charges?
                                        </button>
                                    </h2>
                                    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>No, there are no hidden fees. All taxes and standard service charges are transparently listed on the bill.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        

                        
                        <div className="faq-accordion page-faq-accordion" id="orders_and_delivery">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">orders and <span>delivery</span></h2>
                            </div>
                            
                            <div className="faq-accordion" id="accordion3">
                                
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading16">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                            1. How can I place an order for delivery?
                                        </button>
                                    </h2>
                                    <div id="collapse16" className="accordion-collapse collapse show" aria-labelledby="heading16" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>You can place an order by calling us directly at +91 9217014763 or by visiting our website to place a direct home delivery order.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading17">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="true" aria-controls="collapse17">
                                            2. Is there a minimum order amount for delivery?
                                        </button>
                                    </h2>
                                    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>Yes, the minimum order value for home delivery is ₹300. Orders below this amount can be collected as takeout.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading18">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                            3. How long does the delivery usually take?
                                        </button>
                                    </h2>
                                    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>Our standard delivery time is 30 to 45 minutes, depending on the distance, food preparation time, and traffic conditions.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading19">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="true" aria-controls="collapse19">
                                            4. Do you deliver to all areas in Noida?
                                        </button>
                                    </h2>
                                    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>We deliver within an 8km radius of our location in Sector 8, Noida. Please contact us to verify if we deliver to your specific sector.</p>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading20">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                            5. What should I do if my delivery is delayed?
                                        </button>
                                    </h2>
                                    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>If your order is delayed, please contact us immediately at +91 9217014763. We will track the rider and update you on the delivery status.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>"""

new_content = content[:idx1] + new_block + content[idx2:]
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("FAQ modification completed!")

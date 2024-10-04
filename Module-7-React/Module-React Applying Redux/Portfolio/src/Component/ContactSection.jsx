import React from 'react'

function ContactSection() {
    return (
        <>
        <section class="contact-section">
            <div class="contact-heading-1">
                <h2>Contact Me</h2>
            </div>

            <div class="contact-us">
                <div class="contact-us-1">
                    <div class="contact-us-1-item">
                        <div class="contact-talk-heading">
                            <h3>Let's Talk About Everything!</h3>
                        </div>
                        <div class="contact-talk-dec">
                            <p>I'm currently avaliable to take on new projects, so feel free to send me a
                                message about anything that you want me to work on. You can contact anytime.
                            </p>
                        </div>
                    </div>
                    <div class="contact-list-item-2">
                    <div class="contact-list">
                        <i class="fa-brands fa-linkedin"></i>
                        <a href="#">Arvind Kumar</a>
                    </div>
                    <div class="contact-list">
                        <i class="fa-brands fa-whatsapp"></i>
                        <a href="#">M 9166042971</a>
                    </div>
                    <div class="contact-list">
                        <i class="fa-solid fa-envelope"></i>
                        <a href="#">arvindsuthar744@gmail.com</a>
                    </div>
                        </div>
            </div>

            <div class="contact-us-2">
                <div class="contact-list-item-2">
                    <h2 class="get-font">Get in Touch</h2>
                    <input type="text" id="fullname" name="fullname" placeholder="Full Name"/>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                    <textarea name="message" id="message" cols="" rows="" placeholder="Message"></textarea>
                    <button id="submit-btn" >
                        Send Message 
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default ContactSection

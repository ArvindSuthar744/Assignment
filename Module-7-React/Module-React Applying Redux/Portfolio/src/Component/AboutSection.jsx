import React from 'react'

function AboutSection() {
    return (
        <>
            <section class="about-section">
                <div class="all-heading">
                    <p class="all-heading-para">Get To Know More</p>
                    <h2>About me</h2>
                </div>

                <div class="about-head-part">

                    <div class="about-head-1">
                        <img src="Images/profile-pic.png" alt="" class="about-img"/>
                        <div className="links">
                            <a href="#">Linkedin</a>
                            <a href="#">Instagram</a>
                            <a href="#">Github</a>
                            <a href="#">Dribble</a>
                        </div>
                    </div>

                    <div class="about-head-2">
                        <div class="about-dec">
                            <h2>Hi I'm Arvindkumar,</h2>
                            <p>I createunconventional yet functional & visually pleasing
                                interfaces for the mobile and web. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Totam natus expedita autem quis, illo iuresapiente.
                                Inventore expedita rerum perferendis?
                            </p>
                        </div>

                        <div class="education">
                            <h3>Education</h3>
                            <div class="edu-1">
                                <h4>Undergraduate</h4>
                                <p>BCA (2024) passout</p>
                                <p>S.P.U College, Falna, pali(Raj.)</p>
                            </div>
                            <div class="edu-2">
                                <h3>Course</h3>
                                <h4>Fronted Course</h4>
                                <p></p>
                                <p>Tops ahemdabad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection

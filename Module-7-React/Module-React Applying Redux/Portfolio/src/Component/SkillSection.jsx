import React from 'react'

function SkillSection() {
    return (
        <>
            <section class="skills-section">
                <div class="all-heading">
                    <p class="all-heading-para" >Explore My</p>
                    <h2>My Skills</h2>
                </div>
                <div class="skills-boxs">
                    <div class="box">
                        <img src="Images/html-logo.svg" alt="HTML" id="box-img"/>
                            <p>HTML</p>
                    </div>
                    <div class="box">
                        <img src="Images/css-logo.svg" alt="CSS" id="box-img"/>
                            <p>CSS</p>
                    </div>
                    <div class="box">
                        <img src="Images/javascript-logo.svg" alt="Javascript" id="box-img"/>
                            <p>Javascript</p>
                    </div>
                    <div class="box">
                        <img src="Images/react-logo.svg" alt="React" id="box-img"/>
                            <p>React</p>
                    </div>
                    <div class="box">
                        <img src="Images/jquery-logo.svg" alt="Jquery" id="box-img"/>
                            <p>Jquery</p>
                    </div>
                    <div class="box">
                        <img src="Images/tailwind-css-logo.svg" alt="Tailwind-css" id="box-img"/>
                            <p>Tailwind-css</p>
                    </div>
                    <div class="box">
                        <img src="Images/bootstrap-logo.svg" alt="Bootstrap" id="box-img"/>
                            <p>Bootstrap</p>
                    </div>
                    <div class="box">
                        <img src="Images/github-logo.svg" alt="Github" id="box-img"/>
                            <p>Github</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillSection

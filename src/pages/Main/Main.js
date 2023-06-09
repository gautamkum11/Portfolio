import React from 'react'

import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Projects } from '../../components'


function Main() {
    return (
        <div>
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            {/* <Experience /> */}
            <Projects />
            {/* <Achievement /> */}
            {/* <Services /> */}
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main

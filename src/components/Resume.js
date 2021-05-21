import React, { Component } from 'react'

class Resume extends Component {
    render() {
        return (
            <div className='resume'>
                <div className="heading">
                    <h1>Resume</h1>
                </div>
                <div className='details'>
                    <div className='detail'>
                        <h1 className='position'>Work <br></br>Experience</h1>
                        <p className='period'>2020 -  Present</p>
                        <h1 className='info-head' style={{marginLeft: "2%"}}>Editor</h1>
                    </div>
                    <div className='full-details'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <div className='details'>
                    <div className='detail-two'>
                        <p className='period'>2018 - 2020</p>
                        <h1 className='info-head2'>Writer at Large</h1>
                    </div>
                    <div className='full-details'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <div className='details'>
                    <div className='detail-two'>
                        <p className='period'>2017 - 2018</p>
                        <h1 className='info-head2'>Intern</h1>
                    </div>
                    <div className='full-details' style={{ marginBottom: "100px" }}>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <hr style={{ margin: "auto" }}/>
                <div className='details'>
                    <div className='detail'>
                        <h1 className='position' style={{ marginTop: "5%" }}>Education</h1>
                        <p className='period'>2015 - 2017</p>
                        <h1 className='info-head'>Establishment Name <br />Master’s Degree</h1>
                    </div>
                    <div className='full-details'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    </div>
                </div>
                <div className='details'>
                    <div className='detail-two'>
                        <p className='period'>2012 - 2015</p>
                        <h1 className='info-head2'>Establishment Name |<br />Bachelor's Degree</h1>
                    </div>
                    <div className='full-details' style={{ marginBottom: "100px" }}>
                        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    </div>
                </div>
                <hr style={{ margin: "auto" }} />
                <div className='details'>
                    <div className='detail'>
                        <h1 className='position'>Skils<br />& Expertise</h1>
                    </div>
                    <ul className='my-skills'>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Resume

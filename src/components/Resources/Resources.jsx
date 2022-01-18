import React from 'react';
import "./Resources.css"
import axios from 'axios';

const Resources = (props)=>{
    return(
        <div className="resourcesParent">
                <div className="slideOneText">
                    <h1>Structure and Spice</h1>
                    <h3>    Bring some foundation and pazazz to your writing with spelling, word choice, and grammar resources.</h3>
                    <body className="slideText">If you are above the age of 14, then you know English class after middle school is absolutely useless for creative writing. As much as they want to fill your heads with knowledge on poetry and playwrights, they forget you're losing your information on correct grammar, appropriate punctuation, and several other writing skills. Because of that, we at Dewey proudly promote resources that help you get back to your roots, from serious re-education to quick tools to help you on the fly.</body>
                    <h5 className="textTitle">Grammarly</h5>
                    <body className="slideText">From spellcheck to correct tone, Grammarly does it all. This is the #1 tool Dewey promotes because it is almost essential to write. Remember when teachers used to con us out of using calculators on homework with their reasoning being, "You won't have a calculator with you everywhere in the real world." Then when we get to the real world, no one remembers anything, and it turns out we do always have a calculator? Well, Grammarly is like the calculator for writing. </body>
                    <h5 className="textTitle">THESAURUS.COM</h5>
                    <body className="slideText">Look, we know this one seems obvious to put on a list of resources for writers. However, in reality, very few people ever think to check for a better word to use and go straight from the noggin. While some of us do have quite the range in vocabulary, the rest of us ill-speaking peasants need a little help.</body>
                    <h5 className="textTitle">Dewey</h5>
                    <body className="slideText">Hey, don't roll your eyes at us! Here at Dewey, we pride ourselves on being the platform for creative writers. While we are not much yet, we have some exciting plans for the future of this site. Stick around to find out?</body>
                </div>
                <div className="slideOneBlank">
                <img className="resourcesImage" src="ResourcesImage.png" alt="Resources Picture"/>
                </div>
        </div>
    );
}
export default Resources;
import React from 'react';

class Video extends React.Component {
	render(){
		return (
			<div>
	<div className="batonContainer left">
    <h2>Marching Mountains Musical Instrument Distributions in Appalachia</h2>
    <p>
        In September 2011, Marching Mountains distributed 25 instruments to 14 schools in
        distressed counties of Appalachia. The video displays an interview between Mr. Sean Coughlin, Band Director of Sheldon
        Clark High School in Inez, Kentucky, and Ian Felton, founder of Marching Mountains. Mr. Coughlin emphasizes the importance of <a href="/donate-a-musical-instrument" title="donate a musical instrument">
        donating musical instruments</a> and the benefit to the children who receive them.
    </p>

                <div id="Content1">
                    <iframe width="595" height="360" src="http://www.youtube.com/embed/DZpJ4KHC_HU" frameborder="0"
                        allowfullscreen></iframe>
                </div>
</div>
<div className="batonContainer left">
    <p>
        This video details our trip through several distressed regions in Appalachia to
        distribute <a href="/donate-a-musical-instrument" title="donate a musical instrument">
            musical instrument donations</a>. We interview several band directors and get
        their feedback about the importance of receiving donted musical instruments for
        the children in their area.
    </p>
                <div>
                    <iframe width="560" height="315" src="http://www.youtube.com/embed/HeOUh2NRQdQ" frameborder="0"
                        allowfullscreen></iframe>
                </div>
</div>
</div>
			);
	}
}

export default Video;
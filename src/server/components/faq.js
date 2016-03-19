import React from 'react';

class FAQ extends React.Component {
	render() {
		return (
			<div className="content-wrapper">
			<h1>FAQ</h1>
    <ul className="indent">
        <li><b>Q:</b><i>In sending a donation, is there a specific school we support or is it
        a general donation? </i>
            <br />
            <b>A:</b>Currently, there isn't a way to select a specific school to donate to.
        However, this may be an option in the future. </li>
        <li><b>Q:</b><i>Is it possible to <a href="/donate-a-musical-instrument" title="donate a musical instrument">donate musical instruments</a> as well as funds? </i>
            <br />
            <b>A:</b>Yes! We are mainly looking for <a href="/donate-a-musical-instrument" title="donate a musical instrument">musical instrument donations</a> as well as donations of music-related supplies
        and resources. Monetary donations are also accepted of course with the goal of getting
        the musical instruments and supplies shipped to the hands of children in distressed
        schools in Appalachia.
        <br />
            <b><i>Note: Musical instrument donations should be in good working condition. As much
            as the thought counts, already struggling band programs will not have the resources
            to invest into significant repairs for unusable donations. We appreciate your understanding.
            </i></b></li>
        <li><b>Q:</b><i>How can I tell if a musical instrument is in good working condition?
        </i>
            <br />
            <b>A:</b>If all of the notes can be played, it&#39;s in good working condition.
        Dings and dents are acceptable as long as they don&#39;t interfere with the playability
        of the instrument.</li>
        <li><b>Q:</b><i>Are musical instruments tax deductible?</i>
            <br />
            <b>A:</b>Yes. As a 501(c)(3) organization, any musical instrument donations made
        to us can be deducted from your&nbsp; federal taxes.</li>
        <li><b>Q:</b><i>How do I determine how much my musical instrument donation is worth?
        </i>
            <br />
            <b>A</b>We do not appraise the value of musical instrument donations. The donor
        must value the musical instrument donation. Please visit <a href="http://www.irs.gov/publications/p526/ar02.html">this page on the IRS website for exact details about deducting your musical instrument
            donation</a>.</li>
        <li><b>Q:</b><i>How do I know what happened to my musical instrument donation after
        your organization receives it?</i>
            <br />
            <b>A:</b>We make it a point to write to donors after their musical instrument donation
        has found a home, usually with feedback from the band director who received it.
        </li>
        <li><b>Q:</b><i>Is it possible to send a check directly? </i>
            <br />
            <b>A:</b>Checks are accepted and can be addressed and written out to:<br />
            Marching Mountains<br />
            700 Douglas Ave. #1007<br />
            Minneapolis, MN 55403<br />
        </li>
    </ul>
    <p>
        Please feel free to raise any other questions you have or submit any feedback to
    us at <a href="mailto:donate@marchingmountains.org">donate@marchingmountains.org</a>.
    </p>
</div>
			);
	}
}
module.exports =FAQ;
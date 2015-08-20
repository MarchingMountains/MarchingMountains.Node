import React from 'react';

class Project extends React.Component {
  render() {
    return (
    	<div className="content-wrapper">
    <img src="/img/bubblesA.png" alt="Strong - Courageous - Able" />
    <h2>Vision</h2>
    <p>
        Marching Mountains’ vision is to see a child become something more than that child
    would have become because an instrument found its way into their hands; to see band
    programs across Appalachia become more successful because band directors are working
    together using technology to share ideas and resources; to see local communities
    hold events that benefit their bands because they’ve seen a child with an instrument
    believe in themselves and now they believe more in their community.
    </p>
    <h2>Mission Statement</h2>
    <p>
        Marching Mountains organizes at the grassroots level while creating and leveraging
    Internet technology to empower our networks of involved people. Marching Mountains
    seeks grants and corporate sponsorship in addition to fundraising to provide resources,
    grants and scholarships to aid music programs at public middle schools and high
    schools in distressed counties in Appalachia. Marching Mountains promotes and organizes
    instrument drives to put instruments in the hands of children in Appalachia who
    have a desire to participate in music.
    </p>
    <h2>Discover Marching Mountains</h2>
    <ul className="indent disc">
        <li><a href="what-does-marching-mountains-do" title="What does Marching Mountains do?">What does Marching Mountains do?</a></li>
        <li><a href="who-is-in-marching-mountains" title="Who is involved with Marching Mountains?">Who is involved with Marching Mountains?</a></li>
        <li><a href="helps-children-in-poverty-in-appalachia" title="How does Marching Mountains help children in Appalachia?">How does Marching Mountains help children in Appalachia?</a></li>
        <li><a href="areas-marching-mountains-helps" title="What areas does Marching Mountains help?">What areas does Marching Mountains help?</a></li>
    </ul>
</div>

    	);
	}
}

export default Project;
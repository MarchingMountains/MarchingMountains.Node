import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
       <section>
    	<div class="row-fluid hidden-phone">
        <div class="content-wrapper">
            <h2>Donating Musical Instruments Changes Children’s Lives for the Better</h2>
            <p><img src="/img/quote.gif" />Recently, I was at the airport getting ready to leave town for a while to take a vacation. While at the gate, I checked my voice mail one last time before being cut off from technology for several days. I was surprised to get a message from a woman in Connecticut, who wanted to donate a flute to the organization. I only had a few minutes before boarding, so I quickly returned her phone call, leaving a message in a bit of a panic; I wanted to give her enough information but felt rushed as I would be boarding the plane at any moment. </p>
            <p>After I hung up, I resigned myself to the fact that I had lost that donation. In my mind, I must have sounded anxious and scattered, not really the type of message I typically leave for someone who is generously handing over an instrument to a stranger, an instrument that was likely prized by them or someone close to them.</p>
            <p>When I returned from my vacation, I spoke with my mother, who informed me that a flute had arrived from Connecticut. My mother lives in Appalachia, and where she lives is much closer to the schools we work with. Donors who are able to may ship their donations to my mother’s house in West Virginia so that they’re much closer to the schools. This saves the organization precious funds when paying for shipping instruments to many schools across Appalachia.</p>
            <p>I was surprised that my hurried voice mail had not put the donor off and felt very happy to have received the flute. Later on that week, I received a text message from my step-mother, who said she knew someone who knew someone who had a child that wanted to play the flute but who didn’t have the money to rent or buy one for her daughter.</p>
            <p>This was a new situation for me. Typically, I work directly with band programs, not with parents, because I want the instruments to stay with a school and not possibly end up in someone’s closet, unused. I called the mother and explained this to her, letting her know I wanted to find a solution. I suggested that she give me the name of her daughter’s school and band director, adding that I would ship the flute to the band director with a letter that explained that the flute was for the woman’s daughter, Isabel, to use. As long as she was in band, the flute was hers to use. This means that even when she leaves elementary school and continues on to middle school, if she stays in band, she can take the flute with her. If she quits band, the flute stays with the band program so that another child can use it. The mother agreed. </p>
            <p>I was at work when the conversation took place. After we hung up, I stopped and thought about what just took place. I realized what a special kind of person it is that calls someone to ask for help when they’re in a tough position. I thought about what this mother was doing by putting aside any feelings that would stop her from helping her daughter get a flute and calling me, not just once, but twice within the hour. She really wanted to get a hold of me! When I realized what I was experiencing in this chain of actions -- the generosity of the donor, the humility and determination of the mother, the kindness of the others involved in making the connections -- I teared-up in my cube and had to take a deep breath. </p>
            <p>I wrote the letter, emailing it to my mother for her to print and package with the flute. She shipped it off that Monday. Now the flute is in the hands of Isabel, who gets to experience playing music with her friends, hopefully for many, many years.</p>
            <p>One person who never met me wanted to donate a musical instrument -- a flute -- to Marching Mountains. With faith and hope, she made a simple, generous gesture. That flute is now the difference between Isabel becoming part of something meaningful to her instead of feeling like she’s missing out and not deserving enough to be a musician. </p>
            <p>
                We’ll never know the real effects of Isabel being in band instead of being at home or somewhere else, but we do know that playing the flute is incredibly important to Isabel and her mother. Because someone donated a musical instrument, one little girl’s wish came true. It might not be much, but another little girl who received a flute from a kind donor once said, “This is better than Christmas.” For me, that makes it worth the effort.
                <img src="/img/unquote.gif" />
            </p>
            <p>
                Ian Felton<br />
                Founder, Marching Mountains
            </p>
            <p>
                <i>
                    Ian Felton is the founder of Marching Mountains, a non-profit based in Minneapolis. The goal of Marching Mountains is to create a network to supply public school band programs in distressed counties in Appalachia with donated new and used musical instruments.
                </i>
            </p>
        </div>
    </div>
</section>
<section>
    <div>
        <h3>Interview With Mr. Sean Coughlin About Musical Instrument Donation</h3>
        <iframe width="595" height="360" src="http://www.youtube.com/embed/DZpJ4KHC_HU" frameborder="0" allowfullscreen></iframe>
        <p>
            In September 2011, Marching Mountains distributed 25 instruments to 14 schools in
            distressed counties of Appalachia. The video displays an interview between Mr. Sean Coughlin, Band Director of Sheldon
            Clark High School in Inez, Kentucky, and Ian Felton, founder of Marching Mountains. Mr. Coughlin emphasizes the importance of <a href="@Url.Action(MM.DonateMusicalInstrument.Index())" title="donate a musical instrument">donating musical instruments</a> and the benefit to the children who receive
            them.
        </p>
    </div>
</section>

    <div>
        <h2>Donate Musical Instruments to Marching Mountains</h2>
        <h3>Musical instruments we need</h3>
        <div>
            <fieldset>
                <ul>
                    <li>Trumpets</li>
                    <li>Saxophones</li>
                    <li>Trombones</li>
                    <li>Flutes</li>
                    <li>Clarinets</li>
                    <li>Snare Drums</li>
                    <li>French Horns</li>
                    <li>Tubas</li>
                    <li>Percussion</li>
                </ul>
            </fieldset>
        </div>
        <p>
            <strong>*Sadly, we cannot accept pianos, organs or drum kits. We do not have the means to pick-up, ship or store these.</strong>
        </p>
        <p>
            This list isnt exclusive so please <a href="/organization/contact" title="Contact Marching Mountains">contact us</a> if you have any question about the
            instrument you want to donate.
        </p>
        <h3>Drop-Off Information</h3>
        <p>
            In the Twin Cities, please drop-off instruments in good-working condition:
        </p>
        <p>
            <a href="http://www.mmimports.com/">Midwest Musical Imports</a><br />
            2021 E. Hennepin Ave. Suite 374<br />
            Minneapolis, MN 55413
        </p>
        <p>
            Local:&nbsp;(612) 331-4717<br />
            Toll Free:&nbsp;(800) 926-5587<br />
            Fax: (612) 331-4718
        </p>
        <p>Hours: 9am-5pm Monday-Friday – 10am-2pm Saturday</p>
        <h3>Shipping Information</h3>
        <p>
            Please ship instruments, musical supplies and donations to:<br />
            <strong>Marching Mountains</strong><br />
            1449 Andmore Ave.<br />
            Morgantown, WV 26505
        </p>
    </div>
      </div>
    );
  }
}

export default Home;
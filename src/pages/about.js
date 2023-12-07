import logo from '../img/logo.png';
function About() {
    return ( 
        <>
            <section className="section section-black">
                <h1 className="h_big clr-white">About Us</h1>
            </section>
            <section className="section content">
                <h2 className="content__h h_mid">We’re a group of creative thinkers who have built a business to change the world.</h2>
                <div className='content__text'>
                    <p className="p_sml">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p className="p_sml">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                    <p className="p_sml">She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                </div>
            </section>
            <section className="section services">
                <p className="p_sml">WHAT WE ARE BEST AT</p>
                <h2 className="h_mid">Our Services</h2>
                <div className="grid-3fr">
                    <div className="box">
                        <picture className="box__pic">
                            <img className="box__pic-img" src={logo}/>
                        </picture>
                        <p className='p_big'>Support</p>
                        <p className='p_sml'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="box">
                        <picture className="box__pic">
                            <img className="box__pic-img" src={logo}/>
                        </picture>
                        <p className='p_big'>Support</p>
                        <p className='p_sml'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="box">
                        <picture className="box__pic">
                            <img className="box__pic-img" src={logo}/>
                        </picture>
                        <p className='p_big'>Support</p>
                        <p className='p_sml'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="box">
                        <picture className="box__pic">
                            <img className="box__pic-img" src={logo}/>
                        </picture>
                        <p className='p_big'>Support</p>
                        <p className='p_sml'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="box">
                        <picture className="box__pic">
                            <img className="box__pic-img" src={logo}/>
                        </picture>
                        <p className='p_big'>Support</p>
                        <p className='p_sml'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="box">
                        <picture className="box__pic">
                            <img className="box__pic-img" src={logo}/>
                        </picture>
                        <p className='p_big'>Support</p>
                        <p className='p_sml'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                </div>
            </section>
        </>
     );
}

export default About;
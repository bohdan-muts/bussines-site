import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <section className="footer__top">
                    <h2 className="h_mid">Grow your business.</h2>
                    <p className="p_sml">Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.</p>
                    <NavLink to='/contact' className="btn">Start Now</NavLink>
                </section>
                <section className="footer__bottom">
                    <p className="p_sml">We in a social</p>
                    <ul className="social__list">
                        <li className="social__list-item"><a href="#">in</a></li>
                        <li className="social__list-item"><a href="#">tt</a></li>
                        <li className="social__list-item"><a href="#">fk</a></li>
                        <li className="social__list-item"><a href="#">tg</a></li>
                        <li className="social__list-item"><a href="#">vb</a></li>
                        <li className="social__list-item"><a href="#">wa</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
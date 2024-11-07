
import '../styles/header.css';

function Header() {
    return (
        <header className="header">
        <div className="header-top">
            <span className="address">21 Fifth Avenue, New York</span>
            <span className="offers">Special offers and discounts for booking in April</span>
            <div className="contact">
                <a href="tel:+6534715168">+653 4715 168</a>
                <a href="/faq">FAQ</a>
                <a href="/gift-vouchers">Gift Vouchers</a>
            </div>
        </div>
        <div className="header-main">
            <div className="logo">CALISTA SPA WELLNESS</div>
            <nav className="navigation">
                <a href="/">Home</a>
                <a href="/pages">Pages</a>
                <a href="/blog">Blog</a>
                <a href="/shop">Shop</a>
                <a href="/landing">Landing</a>
            </nav>
            <button className="book-now">Book Now</button>
        </div>
        <div className="header-banner">
            <h1>Reconnect and reinvigorate your <span className="highlight">senses</span> with personalized <span className="highlight">wellness</span> experiences</h1>
            <button className="discover-more">Discover More</button>
        </div>
    </header>
    );
}

export default Header;

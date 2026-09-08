import ThemeSwitcher from './themeSwitcher.jsx';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
            <ThemeSwitcher />

            <div className="card-footer">
                <p>&copy; 2026 Mael Albany. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            access_key: import.meta.env.VITE_WEB3FORMS_KEY,
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
            } else {
                alert("Error sending message. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Network error. Please try again later.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">
                <span className="text-muted">04.</span> Get In Touch
            </h2>

            <div className="contact-card">
                <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                </div>

                {submitted ? (
                    <div className="contact-success">
                        <p className="terminal-prompt">$ send-message --status</p>
                        <p className="success-message">✔ Message sent successfully! I'll get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <p className="terminal-prompt">$ ./send_message.sh</p>

                        <div className="form-group">
                            <label htmlFor="name">[Name]</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">[Email]</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">[Message]</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Your message here..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Execute Send
                        </button>
                    </form>
                )}

                <div className="contact-socials">
                    <span className="social-label">-- Direct links:</span>
                    <a href="mailto:maelalbany2@gmail.com" className="card-link">[Email]</a>
                    <a href="https://github.com/Walou974" target="_blank" rel="noreferrer" className="card-link">[GitHub]</a>
                    <a href="https://linkedin.com/in/mael-albany" target="_blank" rel="noreferrer" className="card-link">[LinkedIn]</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
import "./Contact.css"

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="content">
                    <div className="contact-details">
                        <input type="text" name="name" placeholder="First Name" required />
                        <input type="text" name="name" placeholder="Last Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="message">
                        <textarea className="message-textarea" name="message" placeholder="Message" required></textarea>
                    </div>
                </div>
                <div className="submit">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact
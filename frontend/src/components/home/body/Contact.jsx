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
                        <input type="text" name="name" value="First Name" required />
                        <input type="text" name="name" value="Last Name" required />
                        <input type="email" name="email" value="Email" required />
                    </div>
                    <div className="message">
                        <textarea className="message-textarea" name="message" value="Message" required></textarea>
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
export default function Contact(props) {    //Destructing Props({img, name, phone, email})
    console.log(props)
    return (
        <article className="contact-card">
            <img
                src={props.img}             //This is to be written {img} directly inspite {props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}
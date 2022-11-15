<template>
    <div id="contact" className="service">
			<div className="service-header">CONTACT</div>
			<div className="service-hr"></div>
			<div className="contact-info">
				<div className="contact-item">
					<div className="contact-name">ADDRESS</div>
					<div className="contact-content">123 Street, New York (USA)</div>
				</div>
				<div className="contact-item">
					<div className="contact-name">PHONE</div>
					<div className="contact-content">+123 456 789</div>
				</div>
				<div className="contact-item">
					<div className="contact-name">EMAIL</div>
					<div className="contact-content purple">info@myemail.com</div>
				</div>
			</div>
			<div className="contact-form">
					<form>
						<input type="text" name="" placeholder="Name*"/>
						<input type="email" name="" placeholder="Email*"/>
					</form>
			</div>
			<textarea cols="3" className="contact-mess" placeholder="Message"></textarea>
			<div className="contact-button">SEND</div>
		</div>
</template>

<script>
export default {

}
</script>

<style>
.contact-info {
    display: flex;
    margin-left: 15%;
    margin-top: 3.5rem;
}
.contact-info>.contact-item {
    width: 28%;
}

.contact-info>.contact-item>.contact-name {
    font-size: 21px;
    letter-spacing: 0.2rem;
    margin-bottom: 0.5rem;
}
.purple {
    color: purple;
}
.contact-form{
    margin-top: 5rem;
    margin-left: 12.5%;  
}
.contact-form form {
    display: flex;
    justify-content: space-between;
    width: 85%;
}
.contact-form form input {
    width: 48%;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid gray;
}
.contact-mess {
    text-align: none;
    max-width: 75%;
    margin-top: 5rem;
    border: none;
    border-bottom: 2px solid gray;
    min-width: 75%;
}
.contact-mess:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid gray;
}
.contact-button {
    margin-top: 4rem;
    margin-left: 80%;
    border: 2px solid purple;
    padding: 1rem;
    color: purple;
    width: 100px;
}
.service {
    text-align: center;
    margin-bottom: 10rem;
}

.service>.service-header {
    font-size: 32px;
    margin-top: 13rem;
    font-family: "Open Sans",sans-serif;
    letter-spacing: 7px;
}

.service>.service-hr {
    border-bottom: 2px solid purple;
    text-align: center;
    width: 5%;
    margin-left: 47.5%;
    margin-top: 2rem;
}
</style>
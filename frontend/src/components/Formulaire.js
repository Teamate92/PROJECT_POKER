import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Formulaire = () => {
  //Déclaration de chaque input
  const [name, setName] = useState("");
  const [promo, setPromo] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Récupération des données saisies

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //regex pour récupérer forcément un mail

      //Vérification du champ email
      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    //Validation des champs
    if (name && isEmail() && message) {
      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      //appel de emailJS
      emailjs
        .send(
          "service_zvmb35k", //ID de mon service
          "template_yrg83h7", //ID de mon template
          {
            name,
            promo,
            phone,
            email,
            message,
          },
          "user_WNeacQJhf6hMqYE9sfRWp",//ID utilisateur
        )
        .then(
          () => {
            formMess.innerHTML = "Message envoyé ! Je vous recontacterai dès que possible.";
            formMess.style.background = "#00c1ec";
            formMess.style.opacity = "1";

            document.getElementById("name").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("message").classList.remove("error");
            //Réinitialisation des champs
            setName("");
            setPromo("");
            setPhone("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          //Message d'erreur
          (err) => {
            console.log(err);
            formMess.style.background = "rgb(253, 87, 87)";
            formMess.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
          }
        );
        //Vérification des champs obligatoires
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  return (
    <form className="contact-form">
      <h3>Contactez-nous</h3>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
        />
        <input
          type="text"
          id="promo"
          name="promo"
          required
          onChange={(e) => setPromo(e.target.value)}
          placeholder="promo"
          value={promo}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          required
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <input
        className="button hover"
        type="submit"
        value="Envoyer"
        onClick={(e) => handleSubmit(e)}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default Formulaire;

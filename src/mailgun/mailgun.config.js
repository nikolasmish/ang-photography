import {firestore} from '../firebase/firebase.utils'

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

export async function sendMail(name, from, message){
    const mg = mailgun.client(
        await firestore.collection('utils').doc('mailgun').get()
        .then(doc => {return doc.data()}))

    await mg.messages.create('sandboxfc4fde5de9eb4bbdb95aae59213973d3.mailgun.org', {
        from: from,
        to: ["nikola.smis@outlook.com"],
        subject: `ONA ITTY - Kontakt - ${name}`,
        text: message,
        
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.log(err)); // logs any error.
}


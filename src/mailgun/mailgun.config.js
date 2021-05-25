import {firestore} from '../firebase/firebase.utils'

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
let mg;

let mailgunConfig = []

export async function sendMail(name, from, message){
    let mailsent = false
    

    if(mailgunConfig.length === 0){
        mailgunConfig = await firestore.collection('utils').doc('mailgun').get()
        .then(doc => {return doc.data()})

    console.log('MAILGUN FETCHING FROM FIREBASE')
    }

    mg = mailgun.client(mailgunConfig)

    await mg.messages.create('sandboxfc4fde5de9eb4bbdb95aae59213973d3.mailgun.org', {
        from: from,
        to: ["nikola.smis@outlook.com"],
        subject: `ONA ITTY - Kontakt - ${name}`,
        text: message,
        
      })
      .then(() => {mailsent = true}) // logs response data
      .catch(() => {return false}); // logs any error.

      return mailsent
}


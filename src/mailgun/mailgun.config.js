import {firestore} from '../firebase/firebase.utils'

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mailSenderAccount = 'sandboxfc4fde5de9eb4bbdb95aae59213973d3.mailgun.org'
const emails = ['nikola.smis@outlook.com']
let mg;

let mailgunConfig = []

export async function sendContactMail(name, from, message, instagram){
    let mailsent = false
    instagram = instagram || '/';

    if(mailgunConfig.length === 0){
        mailgunConfig = await firestore.collection('utils').doc('mailgun').get()
        .then(doc => {return doc.data()})

    console.log('MAILGUN FETCHING FROM FIREBASE')
    }

    mg = mailgun.client(mailgunConfig)

    await mg.messages.create(mailSenderAccount, {
        from: from,
        to: emails,
        subject: `ONA ITTY - Kontakt - ${name}`,
        text:  message + 
        `\n\nIme: ${name}\nEmail: ${from}\nInstagram: ${instagram}\n` ,
        
      })
      .then(() => {mailsent = true}) // logs response data
      .catch(() => {return false}); // logs any error.

      return mailsent
}

export async function sendArrangeMail(name, from, message, instagram, date){
    let mailsent = false
    instagram = instagram || '/';

    if(mailgunConfig.length === 0){
        mailgunConfig = await firestore.collection('utils').doc('mailgun').get()
        .then(doc => {return doc.data()})

    console.log('MAILGUN FETCHING FROM FIREBASE')
    }

    mg = mailgun.client(mailgunConfig)

    await mg.messages.create(mailSenderAccount, {
        from: from,
        to: emails,
        subject: `ONA ITTY - Zakazivanje - ${name}`,
        text: message + 
            `\n\nIme: ${name}\nEmail: ${from}\nInstagram: ${instagram}\nDatum slikanja: ${date}` ,
        
      })
      .then(() => {mailsent = true}) // logs response data
      .catch(() => {return false}); // logs any error.

      return mailsent
}


import emailjs from "@emailjs/browser"
import { getEnvVariables } from "../../../helpers";

const { VITE_PUBLIC_KEY_EMAILJS } = getEnvVariables()

const status = { 200: true, 400: false }

export const sendEmail = async (infoForm) => {
    console.log({ infoForm, emailjs })
    const answers = { toMe: false, toU: false }
    await emailjs.send('service_rbk4mfm', 'template_hsev9cn', { ...infoForm }, VITE_PUBLIC_KEY_EMAILJS)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            answers.toMe = status[response.status] || false
        }, function (error) {
            console.log('FAILED...');
        });
    await emailjs.send('service_rbk4mfm', 'template_xhnuq3r', { name: infoForm.name, email: infoForm.email }, VITE_PUBLIC_KEY_EMAILJS)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            answers.toU = status[response.status] || false
        }, function (error) {
            console.log('FAILED...');
        });
    return Object.values(answers).every(x => x)
}

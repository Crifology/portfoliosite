import React, {useRef} from 'react';
import { ContactContainer, 
        ContactWrap, 
        ContactIcon, 
        ContactContent,
        Form, 
        FormH1, 
        FormLabel,
        FormInput, 
        FormButton,
        ContactBg,
        VideoBg } from './ContactElements';
import Video from '../../videos/spacetheme.mp4';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pma8cjo', 'crifology_email_template', form.current, 'user_kuI4AIJw3gzrshRW4lqab')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
    };

    return (
        <>
            <ContactContainer>
                <ContactWrap>
                    <ContactBg>
                    <ContactIcon to='/'>Back to Site!</ContactIcon>
                        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                    </ContactBg>
                    <ContactContent>
                        <Form ref={form} onSubmit={sendEmail}>
                            <FormH1>Please Reach Out to Me!</FormH1>
                            <FormLabel htmlFor='for'>Your Name</FormLabel>
                            <FormInput type="text" required />
                            <FormLabel htmlFor='for'>Your Email</FormLabel>
                            <FormInput type="email"  required />
                            <FormLabel htmlFor='for'>Message to Me</FormLabel>
                            <FormInput type="text" col="20" rows="8" required />
                            <FormButton type="submit">Submit</FormButton>
                        </Form>
                    </ContactContent>
                </ContactWrap>
            </ContactContainer>
        </>
    )
}
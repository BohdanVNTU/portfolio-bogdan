import React from 'react';
import {Container, Box, Button, Typography} from '@mui/material';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {TextField} from 'formik-material-ui';

/**
 * The ContactForm component provides a way for visitors to send a message to the photographer.
 */

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    message: Yup.string()
        .required('Required'),
});

const ContactForm: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '80vh', paddingTop: '2rem'}}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Contact Form
                </Typography>

                <Formik
                    initialValues={{name: '', email: '', message: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        // handle form submission here
                        console.log(values);
                        setSubmitting(false);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form style={{width: '100%'}}>
                            <Field
                                component={TextField}
                                name="name"
                                label="Name"
                                variant="outlined"
                                style={{marginBottom: '1rem', width: '100%'}}
                            />
                            <Field
                                component={TextField}
                                name="email"
                                label="Email"
                                variant="outlined"
                                style={{marginBottom: '1rem', width: '100%'}}
                            />
                            <Field
                                component={TextField}
                                name="message"
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                style={{marginBottom: '1rem', width: '100%'}}
                            />
                            <Button variant="contained" type="submit" disabled={isSubmitting} fullWidth>
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default ContactForm;

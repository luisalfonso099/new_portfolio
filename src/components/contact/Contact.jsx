import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import useTheme from "../../hooks/useTheme";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { darkTheme } = useTheme();
  const temID = 'template_gih95bm';

  const submitForm = (values, { setSubmitting }) => {
    emailjs.init('QiTdk6InZErhA0ti7')
    emailjs.send('service_b6lglkg', temID, values)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
    setSubmitting(false);
  }
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Este campo es requerido'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Este campo es requerido'),
    subject: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Este campo es requerido'),
    message: Yup.string()
      .min(30, 'Must be 30 characters or more')
      .required('Este campo es requerido'),
  });

  return (
    <section className={"contact-container " + (darkTheme ? 'text-white' : '')} id='contact'>
      <div className="border-bottom-ligth"></div>
      <div className="content-contact">
        <div className="contact-text">
          {/* <h2>¡Hagamos que tu marca brille!</h2> */}
          <p>Si busca un profesional comprometido, con pasión por aprender y contribuir al éxito de su empresa, estaré encantado de conversar sobre cómo puedo ser parte de su equipo. ¡Espero saber de usted pronto!</p>
        </div>
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => (submitForm(values, { setSubmitting }))}
        >{({ errors }) => (
          <Form className="contact-form" noValidate>
            <div className='md:flex xl:flex-row flex-col'>
              <div className='flex flex-col'>
                <Field name="name" type="text" placeholder="Nombre" className={`border-${darkTheme ? 'dark text-white' : 'ligth'}`} />
                {errors.name ? (<div className='error-message'>{errors.name}</div>) : null}
              </div>
              <div className='flex flex-col'>
                <Field name="email" type="email" placeholder="Correo electrónico" className={`border-${darkTheme ? 'dark text-white' : 'ligth'}`} />
                {errors.email ? (<div className='error-message'>{errors.email}</div>) : null}
              </div>
            </div>
            <Field name="subject" type="text" placeholder="Asunto" className={`border-${darkTheme ? 'dark text-white' : 'ligth '}`} />
            {errors.subject ? (<div className='error-message'>{errors.subject}</div>) : null}
            <Field name="message" as="textarea" placeholder="Mensaje" className={`p-3 border-${darkTheme ? 'dark text-white' : 'ligth'}`} />
            {errors.message ? (<div className='error-message'>{errors.message}</div>) : null}
            <button type="submit" className={`btn-send border-${darkTheme ? 'dark text-white' : 'ligth'}`}>
              <span>ENVIAR</span>
            </button>
          </Form>
        )}
        </Formik>
      </div>
    </section>
  )
}

export default Contact;
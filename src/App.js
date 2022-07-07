import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header'
import Footer from './footer'

function App() {

  const { id } = useParams();

  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = (date.getDate() + 1) < 10 ? '0' + date.getDate() : date.getDate() + 1

  const data = {
    nom_cliente: 'SAUL HERNANDEZ',
    fecha_reg: '' + year + '-' + month + '-' + day + '',
    preg_1: '',
    preg_2: '',
    preg_3: '',
    preg_4: '',
    preg_5: '',
    preg_6: '',
    preg_7: '',
    preg_8: '',
    preg_9: '',
    preg_10: ''
  }

  useEffect(() => {
    console.log(id)
  }, [id])

  const requerido = 'Esta pregunta es obligatoria.'
  const dataSchema = Yup.object().shape({
    preg_1: Yup.string().required(requerido),
    preg_2: Yup.string().required(requerido),
    preg_3: Yup.string().required(requerido),
    preg_4: Yup.string().required(requerido),
    preg_5: Yup.string().required(requerido),
    preg_6: Yup.string().required(requerido),
    preg_7: Yup.string().required(requerido),
    preg_8: Yup.string().required(requerido),
    preg_9: Yup.string().required(requerido),
    preg_10: Yup.string().required(requerido)
  });

  function handleOnSubmit(values) {
    console.log(values)
  }

  return (
    <div>
      {
        id ?
          <div>
            <Header />
            <div className="salto1px"></div>
            <div className="container">
              <div className="salto20px"></div>
              <h2>ENCUESTA DE SATISFACCIÓN INSTRACVIAL- SERVICIO DE INSPECCIÓN</h2>
              <div className="salto1px"></div>
              <Formik
                initialValues={data}
                validationSchema={dataSchema}
                onSubmit={(values) => { handleOnSubmit(values) }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="column-half">
                      Nombre de cliente
                      <div className="salto1px"></div>
                      <input className="form-control" name="nom_cliente" type="text" value={data.nom_cliente} disabled />
                    </div>
                    <div className="column-half">
                      Fecha de diligenciamiento
                      <div className="salto1px"></div>
                      <input className="form-control" name="fecha_reg" type="date" value={data.fecha_reg} disabled />
                    </div>
                    <div className="salto1px"></div>
                    <div className="column-half">
                      ¿Cómo considera el tiempo de respuesta a las llamadas telefónicas?
                      <Field name="preg_1" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_1 && touched.preg_1 ? <div className="error">{errors.preg_1}</div> : null}
                    </div>
                    <div className="column-half">
                      ¿Cómo considera la calidad de nuestro servicio ofrecido?
                      <Field name="preg_2" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_2 && touched.preg_2 ? <div className="error">{errors.preg_2}</div> : null}
                    </div>
                    <div className="salto1px"></div>
                    <div className="column-half">
                      ¿Cómo considera los tiempos de entrega del Servicio contratado?
                      <Field name="preg_3" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_3 && touched.preg_3 ? <div className="error">{errors.preg_3}</div> : null}
                    </div>
                    <div className="column-half">
                      ¿Cómo califica la actitud, amabilidad, disponibilidad y gestión de nuestro personal?
                      <Field name="preg_4" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_4 && touched.preg_4 ? <div className="error">{errors.preg_4}</div> : null}
                    </div>
                    <div className="salto1px"></div>
                    <div className="column-half">
                      ¿Cómo califica el tiempo de respuesta a sus solicitudes o inquietudes?
                      <Field name="preg_5" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_5 && touched.preg_5 ? <div className="error">{errors.preg_5}</div> : null}
                    </div>
                    <div className="column-half">
                      ¿Cómo califica la atención en general de INSTRACVIAL S.A.S?
                      <Field name="preg_6" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_6 && touched.preg_6 ? <div className="error">{errors.preg_6}</div> : null}
                    </div>
                    <div className="salto1px"></div>
                    <div className="column-half">
                      ¿Considera que el tipo de inspección fue el adecuado?
                      <Field name="preg_7" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_7 && touched.preg_7 ? <div className="error">{errors.preg_7}</div> : null}
                    </div>
                    <div className="column-half">
                      ¿La zona de inspección es la adecuada para realizar este proceso?
                      <Field name="preg_8" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>Buena</option>
                        <option key="2" value={2}>Regular</option>
                        <option key="3" value={3}>Mala</option>
                      </Field>
                      {errors.preg_8 && touched.preg_8 ? <div className="error">{errors.preg_8}</div> : null}
                    </div>
                    <div className="salto1px"></div>
                    <div className="column-half">
                      ¿El servicio supero su expectativas?
                      <Field name="preg_9" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>SI</option>
                        <option key="2" value={2}>NO</option>
                      </Field>
                      {errors.preg_9 && touched.preg_9 ? <div className="error">{errors.preg_9}</div> : null}
                    </div>
                    <div className="column-half">
                      ¿Volveria a adquirir servicios en INSTRACVIAL SAS?
                      <Field name="preg_10" as="select" className="form-control">
                        <option key="0" value="">Seleccione una respuesta</option>
                        <option key="1" value={1}>SI</option>
                        <option key="2" value={2}>NO</option>
                      </Field>
                      {errors.preg_10 && touched.preg_10 ? <div className="error">{errors.preg_10}</div> : null}
                    </div>
                    <div className="salto20px"></div>
                    <div className="column-center">
                      <button className="btn btn-success" type="submit" >Enviar</button>
                    </div>
                    <div className="salto20px"></div>
                  </Form>
                )}
              </Formik>
              <Footer />
            </div>
          </div>
          :
          <div className="loader">Loading....</div>
      }
    </div>
  );
}

export default App;

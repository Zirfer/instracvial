import './App.css';
import Footer from './footer'

function Container(data, handleOnChange, handleOnSubmit) {

    const info = data.data

    return (
        <div className="container">
            <div className="salto20px"></div>
            <h2>ENCUESTA DE SATISFACCIÓN INSTRACVIAL- SERVICIO DE INSPECCIÓN</h2>
            <div className="salto1px"></div>
            <div className="column-half">
                Nombre de cliente
                <div className="salto1px"></div>
                <input className="form-control" name="nom_cliente" type="text" value={info.nom_cliente} disabled />
            </div>
            <div className="column-half">
                Fecha de diligenciamiento
                <div className="salto1px"></div>
                <input className="form-control" name="fecha_reg" type="date" value={info.fecha_reg} disabled />
            </div>
            <div className="salto1px"></div>
            <div className="column-half">
                ¿Cómo considera el tiempo de respuesta a las llamadas telefónicas?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_1" defaultValue={info.preg_1} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="column-half">
                ¿Cómo considera la calidad de nuestro servicio ofrecido?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_2" defaultValue={info.preg_2} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="salto1px"></div>
            <div className="column-half">
                ¿Cómo considera los tiempos de entrega del Servicio contratado?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_3" defaultValue={info.preg_3} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="column-half">
                ¿Cómo califica la actitud, amabilidad, disponibilidad y gestión de nuestro personal?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_4" defaultValue={info.preg_4} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="salto1px"></div>
            <div className="column-half">
                ¿Cómo califica el tiempo de respuesta a sus solicitudes o inquietudes?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_5" defaultValue={info.preg_5} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="column-half">
                ¿Cómo califica la atención en general de INSTRACVIAL S.A.S?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_6" defaultValue={info.preg_6} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="salto1px"></div>
            <div className="column-half">
                ¿Considera que el tipo de inspección fue el adecuado?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_7" defaultValue={info.preg_7} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="column-half">
                ¿La zona de inspección es la adecuada para realizar este proceso?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_8" defaultValue={info.preg_8} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>Buena</option>
                    <option key="2" value={2}>Regular</option>
                    <option key="3" value={3}>Mala</option>
                </select>
            </div>
            <div className="salto1px"></div>
            <div className="column-half">
                ¿El servicio supero su expectativas?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_9" defaultValue={info.preg_9} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>SI</option>
                    <option key="2" value={2}>NO</option>
                </select>
            </div>
            <div className="column-half">
                ¿Volveria a adquirir servicios en INSTRACVIAL SAS?
                <div className="salto1px"></div>
                <select className="form-control" name="preg_10" defaultValue={info.preg_10} onChange={(e) => { handleOnChange(e) }}>
                    <option key="0" value={0}>Seleccione una respuesta</option>
                    <option key="1" value={1}>SI</option>
                    <option key="2" value={2}>NO</option>
                </select>
            </div>
            <div className="salto20px"></div>
            <div className="column-center">
                <button className="btn btn-success" onClick={(e) => { handleOnSubmit(e) }}>Enviar</button>
            </div>
            <div className="salto20px"></div>
            <Footer />
        </div>
    );
}

export default Container;

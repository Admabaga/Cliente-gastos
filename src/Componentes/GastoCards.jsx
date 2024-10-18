import './GastoCards.css'
import facturaimg from '../assets/facturaimg.png'

function GastoCards () {
    const [gastos, setGastos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [respuesta, setRespuesta] = useState('');
    const [respuestaError, setRespuestaError] = useState(false);

    useEffect(() => {
        traerGastos();
    }, []);

    const traerGastos = async () => {
        setCargando(true);
        try {
            const response = await axios.get('http://localhost:8000/gastos');
            if (Array.isArray(response.data)) {
                setGastos(response.data);
            } else {
                throw new Error('Datos inválidos');
            }
        } catch (error) {
            console.error('Error:', error);
            setRespuesta(`Error al obtener gastos: ${error.response?.data || error.message}`);
            setRespuestaError(true);
        } finally {
            setCargando(false);
        }
    };

    const handleRefresh = () => {
        setGastos([]);
        setRespuesta('');
        setRespuestaError(false);
        traerGastos();
    };

    
    return (
        <>
            <section className="cards-section">
                <div className="card-container">
                    <div className="img-container">
                        <img src={facturaimg} className="imageAdding" />
                    </div>
                    <div className="info-container">
                        <h1 className="gasto">{gasto}</h1>
                        <hr />
                        <p className="monto">{monto}</p>
                        <hr />
                        <p className="fecha">{fecha}</p>
                        <hr />
                        <p className="descripcion">{descripcion}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GastoCards;
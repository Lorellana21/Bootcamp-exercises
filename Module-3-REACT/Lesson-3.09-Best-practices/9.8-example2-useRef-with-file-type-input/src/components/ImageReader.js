
import { useRef, useState } from 'react';

/*
El orden cronológico en el que se ejecuta este componente es:
- Se renderiza la primera vez
  - Se crea la referencia fileElement
  - Se crea el lector de ficheros fileReader
  - Se pinta el input file
- Cuando la usuaria selecciona una imagen:
  - Se ejecuta la función handleFile
    - Esta función ejecuta fileReader.readAsDataURL(selectedFile)
    - La función readAsDataURL lee el contenido de la imagen
    - La función readAsDataURL es asíncrona. Cuando termine lanzará un evento 'load'.
- Pasados unos milisegundos cuando se lance el evento 'load':
  - Se ejecutará la función getImage
    - Que subirá los datos de la imagen por lifting
*/

const ImageReader = props => {
    const [fileSize, setFileSize] = useState(0);
    const [fileType, setFileType] = useState('desconocida');

    // Creamos una referencia al input file para poder leer su contenido más tarde
    const fileElement = useRef();

    // Creamos un lector de ficheros
    // FileReader es una funcionalidad nativa de JavaScript, búscala en Internet si te atreves
    const fileReader = new FileReader();

    // Cuando la usuaria selecciona una imagen se ejecuta esta función
    const handleFile = () => {
        // fileElement.current es literalmente el input file
        // Cogemos su propiedad files que es un array con todas las imagenes seleccionadas por la usuaria
        // Como solo queremos la primera imagen seleccionada cogemos el primer elemento de files
        const selectedFile = fileElement.current.files[0];

        // Si la usuaria ha seleccionado al menos una imagen selectedFile es diferente de undefined
        if (selectedFile) {
            // Por curiosidad mira lo que contiene la constante selectedFile
            console.log(selectedFile);

            // Guardamos el tamaño y el tipo de la imagen en el estado
            setFileSize(selectedFile.size);
            setFileType(selectedFile.type);

            // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria
            fileReader.readAsDataURL(selectedFile);
            // Cuando esta acción termine fileReader lanzará el evento 'load'
        }
    };

    // Esta función se ejecuta cuando fileReader lanza el evento 'load'
    const getImage = () => {
        // Cuando la imagen ya está lista en fileReader.result tenemos su contenido
        // Hacemos lifting de este contenido hacia arriba
        props.handleImage(fileReader.result);
    };

    // Escuchamos el evento load de fileReader y cuando se lance lo manejamos con la función getImage
    fileReader.addEventListener('load', getImage);

    return (
        <div>
            <label>
                Selecciona una imagen por favor:
                {/* Usamos fileElement como referencia de este input */}
                <input ref={fileElement} type="file" name="image-reader" onChange={handleFile} />
            </label>

            <p>El tamaño de la imagen es: {fileSize} bytes.</p>
            <p>El tipo de la imagen es: {fileType}.</p>
        </div>
    );
};

export default ImageReader;
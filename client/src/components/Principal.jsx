import axios from 'axios';
import { useEffect, useState } from 'react';


const Principal = () => {

    const [ nombre, setNombre ] = useState("Mi nombre");

    useEffect (() => {
        const getData = async () => {
            console.log("En getData");
            try {
                await axios('/test')
                    .then((response)=> setNombre(response.data))
            } catch (error) {
                console.error(error)
            }
            /* console.log(response)
            let data= response.data;
            console.log(data);
            return data */
        }
        getData();

    },[])

   
    
    
    return (
        <div>
            {nombre}
        </div>
    );
};

export default Principal;
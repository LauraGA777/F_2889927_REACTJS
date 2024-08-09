import React, { useState } from "react";
import ListSuppliers from "./components/list-supplier";
import FormSuppliers from "./components/form-supliers";

const Suppliers = ()=>{ 

    const [listSuppliers, setListSuppliers] = useState([]) ;

    // Función para llenar el arreglo
    const handleSuppliers = (supplier)=>{ 
        setListSuppliers([...listSuppliers, supplier]);
        console.log(supplier);
    }
 
    console.log("Componente principal ")


    return(
        <>
        <h2>H</h2>
            <FormSuppliers handleSupplier={handleSuppliers}/>
            <ListSuppliers listSuppliers={listSuppliers}/>
        </>
    )
}


export default Suppliers;
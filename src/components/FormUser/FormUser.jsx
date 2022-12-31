
const FormUser = ({dataForm, handleOnChange, addOrder}) => {
    return (
        <form onSubmit={addOrder}>
            <h3>Ingrese sus datos</h3>
            <input type="text" onChange={handleOnChange} name='name' value={dataForm.name}
            placeholder="Nombre completo"/>

            <input type="text" onChange={handleOnChange} name='phone' value={dataForm.phone}
            placeholder="Teléfono de contacto"/>
                                
            <input type="text" onChange={handleOnChange} name='email' value={dataForm.email}
            placeholder="Correo electrónico"/>

            <button className="btn btn-outline-success" >Terminar Compra</button>
        </form>
    )
}

export default FormUser
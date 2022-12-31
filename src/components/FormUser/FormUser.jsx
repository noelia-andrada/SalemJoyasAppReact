
const FormUser = ({dataForm, handleOnChange, addOrder}) => {
    return (
        <form onSubmit={addOrder}>
            <h3>Ingrese sus datos</h3>
            <input type="text" onChange={handleOnChange} name='name' value={dataForm.name}
            placeholder="Nombre completo"/>
                                
            <input type="text" onChange={handleOnChange} name='email' value={dataForm.email}
            placeholder="Email"/>

            <input type="text" onChange={handleOnChange} name='confirmEmail' value={dataForm.confirmEmail}
            placeholder="Repetir email"/>

            <input type="text" onChange={handleOnChange} name='phone' value={dataForm.phone}
            placeholder="Teléfono de contacto"/>

            {dataForm.email === dataForm.confirmEmail && dataForm.name.length > 5 && dataForm.phone.length > 9
                ?
            <button className="btn btn-outline-success">Terminar Compra</button>
                :
            <h3>Complete todos los campos</h3>
            }
        </form>
    )
}

export default FormUser
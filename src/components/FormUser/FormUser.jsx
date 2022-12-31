
const FormUser = ({dataForm, handleOnChange, addOrder}) => {
    return (
        <form onSubmit={addOrder}>
            <h3 className="pb-3">Ingrese sus datos</h3>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Nombre completo</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={handleOnChange} name='name' value={dataForm.name}
                    placeholder="Nombres y apellido"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Correo electrónico</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" onChange={handleOnChange} name='email' value={dataForm.email}
                    placeholder="ejemplo@ejemplo.com"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Repetir correo electrónico</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" onChange={handleOnChange} name='confirmEmail' value={dataForm.confirmEmail}
                    placeholder="ejemplo@ejemplo.com"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Teléfono de contacto</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" onChange={handleOnChange} name='phone' value={dataForm.phone}
                    placeholder="Solo números"/>
                </div>
            </div>

            {dataForm.email === dataForm.confirmEmail && dataForm.name.length > 5 && dataForm.phone.length > 9
                ?
            <button type="submit" className="btn btn-dark m-2 mt-3">Terminar Compra</button>
                :
            <h3>Complete todos los campos</h3>
            }



        </form>
    )
}

export default FormUser
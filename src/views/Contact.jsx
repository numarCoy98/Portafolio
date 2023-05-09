import Swal from 'sweetalert2'

import { useForm } from "../hooks/useForm"
import { sendEmail } from "./helpers/sendEmail"


const listInputs = [
    { id: 1, placeholder: 'Nombre', type: 'text', name: 'name' },
    { id: 2, placeholder: 'Correo', type: 'email', name: 'email' },
    { id: 3, placeholder: 'Telefono o celular', type: 'number', name: 'phone' },
]

export const Contact = () => {
    const { state: stateForm, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        const resp = await sendEmail(stateForm)
        Swal.fire({
            icon: resp ? 'success' : 'error',
            text: resp ? 'Mesaje fue enviado' : 'Existe un error en el servidor'
        })
        resp && onResetForm()
    }
    return (
        <div className="bg-blue-dark flex justify-center">
            <div className="rounded-xl py-16 w-4/5 md:w-1/2">
                <p className="text-4xl text-white text-center my-3">Contactame </p>
                <form onSubmit={onSubmit} className='bg-white flex flex-col container rounded-xl' >
                    {listInputs.map(({ id, type, name, placeholder }) => (
                        <div key={id} className="flex flex-col">
                            <label className="mx-5 mt-5" >
                                {placeholder}
                            </label>
                            <input
                                className="mb-2 mx-5 h-12 rounded-lg p-2 bg-gray-light"
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                value={stateForm?.[name]}
                                onChange={onInputChange}
                                required={true}
                            />
                        </div>
                    ))}
                    <label className="mx-5 mt-5">
                        Mensaje, recomendación y comentario.
                    </label>
                    <textarea onChange={onInputChange}
                        name="message"
                        cols="20" rows="8"
                        placeholder="Mensaje"
                        className='mb-5 mx-5 h-48 rounded-lg p-2 bg-gray-light'
                        value={stateForm?.message}
                    >
                    </textarea>
                    <button
                        type="submit"
                        className="font-bold bg-blue-light shadow-md shadow-blue p-3 rounded-3xl text-blue-dark w-3/4 m-auto my-3 hover:bg-white">
                        Enviar</button>
                </form>
            </div>
        </div>
    )
}

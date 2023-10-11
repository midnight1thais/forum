import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/url"

export const useUserOperations = (initialForm,path) =>{

    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [form, onChangeForm] = useForm(initialForm)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('/home')
        }
    },[navigate])

    console.log(email)
    console.log(password)

    const handleSubmit = (e) =>{
        e.preventDefault()

    

        axios.post(`${BASE_URL}${path}`, form)
        .then(response =>{
            localStorage.setItem('token', response.data.token)
            setMessage(response.data.message)
            navigate('/home')
        })
        .catch(error => console.log(error))

    }



    return{
        form,
        onChangeForm,
        handleSubmit,
        message
    }
}
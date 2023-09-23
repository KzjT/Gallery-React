import { Button } from 'react-bootstrap'
import './Error404.scss'
import error from '../../assets/error404.svg'
import { useNavigate } from 'react-router-dom'

export const Error404 = () => {
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate('/')
    }

    return (
        <div className='footer-container-bug'>
            <div className='Error404Container container'>
                <img className='error404img' src={error} alt='error404' />
                <Button className='btn btn-danger btn-error404 btn-err0r' onClick={handleVolver}>Home</Button>
            </div>
        </div>
    )
}

export default Error404;
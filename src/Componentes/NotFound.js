import { useNavigate} from "react-router-dom";
import { useEffect } from "react";

const NotFound = ()=>{
    const redirect = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            redirect('/')
        },3000)
    })
    return (
        <div>Not Found. Redirecting...</div>
    )
}

export default NotFound
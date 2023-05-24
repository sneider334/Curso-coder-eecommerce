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
        <div className="not-found"><b>Not Found. Redirecting...</b></div>
    )
}

export default NotFound
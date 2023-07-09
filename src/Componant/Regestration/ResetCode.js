import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BaseURL from "../../BaseURL.js";


export default function ResetCode() {

    const navigate = useNavigate();

    const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit =async userData => {
        const response = await BaseURL.post('/api/auth/resetCode', userData)
        console.log(response)
        if(response){
            navigate(`/ResetPassword`)
        } 
    }

    
    return(
        <>
        <div className="container">
            <Link to="/MainPage">
                <div className="row d-flex justify-content-center align-items-center">
                <img style={{width:'150px'}} 
                            src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-1536x960.jpg"
                            className="logo"
                            alt=""
                        />
                </div>
            </Link>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Reset Code</h4>
                    </div>
                    <div className="card-body">
                        <form id='form' onSubmit={handleSubmit(onSubmit)} className="form-group row">
                        <div className="mb-3">
                            <label  className="form-label"><b>Enter The Reset Code</b></label>
                            <input type="text" 
                            className="form-control" 
                            {...register('resetCode',{required:true})}
                            placeholder="Enter The Reset Code "/>
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger" >
                                {errors.resetCode?.type === 'required' && "We'll never share your Email with anyone else"}
                            </small>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-warning">Continue</button>
                        </div>
                        </form>
                    </div>

                    </div>
                </div>
            </div>    
        </div>
        </>
    )
}

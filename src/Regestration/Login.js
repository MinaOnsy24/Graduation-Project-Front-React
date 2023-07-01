import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function Login() {

    const { register, handleSubmit,watch,formState:{errors} } = useForm();
    const onSubmit = data => console.log(data)
    console.log(watch('name'))

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
                        <h4 className="text-center">Sing in</h4>
                    </div>
                    <div className="card-body">
                        <form id='form' onSubmit={handleSubmit(onSubmit)} className="form-group row">
                        <div className="mb-3">
                            <label  className="form-label"><b>Email address</b></label>
                            <input type="text" 
                            className="form-control" 
                            {...register('email',{required:true , pattern:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/})}
                            placeholder="Enter email"/>
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger" >
                                {errors.email?.type === 'required' && "We'll never share your Email with anyone else"}
                                {errors.email?.type === 'pattern' && "Email must   letters ( uppercase and lowercase), Numbers, @ , $ , . , - . EX: abc.12@gmail.com"}
                            </small>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-warning">Continue</button>
                        </div>
                        <div className="mt-3 text-center">
                            <Link to="/Forget">Forget your passwod</Link>
                        </div>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <p className="mb-0"><Link className="btn btn-secondary" to="/SignUp">
                        Create your Amazon account
                                </Link></p>
                    </div>
                    </div>
                </div>
            </div>    
        </div>
        </>
    )
}

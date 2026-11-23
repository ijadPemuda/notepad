import './style.css'
import '../../styles/global.css'

function SigninPage() {
    return (
        <main className='half-grid white-surface container-fluid min-vh-100 shadow-sm border-color'>

            <div className='d-flex justify-content-center align-items-center white-surface'>
                <div className='d-flex flex-column'>
                    <h1 className='main-text'>Notepad.</h1>
                    <p className='secondary-text'>Simple notepad built by me.</p>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center border-start'>
                <form action="" className='w-75'>
                    <h2 className='main-text'>Welcome to Notepad!</h2>
                    <p className='secondary-text'>Sign in To Continue</p>

                    <div className='d-flex flex-column gap-3 mt-5'>
                        <div className='rounded border border-color py-1 d-flex px-2 mb-2'>
                            <i className="bi bi-person d-flex align-items-center main-text fs-5 p-2"></i>
                            <input type="text" className='form-control mb-0 border-0 secondary-text p-1' placeholder='Username' />
                        </div>

                        <div className='rounded border border-color py-1 d-flex px-2'>
                            <i className="bi bi-envelope d-flex align-items-center main-text fs-5 p-2"></i>
                            <input type="email" className='form-control mb-0 border-0 secondary-text p-1' placeholder='Email Addreas' />
                        </div>

                        <div className='rounded border border-color py-1 px-2 d-flex'>
                            <i className="bi bi-shield-lock d-flex align-items-center main-text fs-5 p-2"></i>
                            <input type="password" className='form-control mb-0 border-0 secondary-text p-1' placeholder='Password' />
                        </div>
                    </div>

                    <div className='d-flex flex-column mt-5 gap-3'>
                        <button className='btn primary-blue text-white'>Sign in</button>
                        <p className='text-center secondary-text mb-0'>or</p>
                        <button className='btn border border-color d-flex gap-3 justify-content-center'><i className="bi bi-google"></i>Continue with Google</button>
                        <p className='secondary-text text-center'>Already Have An Account? <a href="/login" className='main-text'>LOG IN</a></p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default SigninPage
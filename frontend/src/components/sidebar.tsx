import './sidebar.css'

function Sidebar() {
    return (
        <aside className='min-vh-100'>
            <button className="btn d-lg-none d-md-none d-sm-block fs-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-list"></i></button>

            <div className="offcanvas offcanvas-start w-50" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0">
                    <div className='d-flex flex-column justify-content-between py-4 px-2 h-100'>
                        <div className='h-25 d-flex w-100 flex-column justify-content-center'>
                            <h2 className='main-text text-center'>Notepad<span className='active-blue-text'>.</span></h2>
                        </div>
                        <div className='h-50 d-flex flex-column gap-3 d-flex align-items-start w-100'>
                            <a href="/" className='text-decoration-none w-100'><button className='pale-blue-surface btn w-100 active-blue-text d-flex gap-4 p-2'><i className="bi bi-house-door-fill"></i><span>Home</span></button></a>
                            <a href="/" className='text-decoration-none w-100'><button className='btn w-100 secondary-text d-flex gap-4 p-2'><i className="bi bi-archive"></i><span>Archive</span></button></a>
                        </div>
                        <div className='h-25 d-flex justify-content-end flex-column w-100'>
                            <a href="/" className='text-decoration-none'><button className='btn w-100 secondary-text d-flex gap-4 p-2'><i className="bi bi-box-arrow-left"></i><span>Log out</span></button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-none d-lg-flex d-md-flex flex-column justify-content-between border-end p-2 vh-100'>
                <div className='vh-25 d-flex w-100 flex-column justify-content-center align-items-start px-2'>
                    <h2 className='main-text text-center'>Notepad<span className='active-blue-text'>.</span></h2>
                </div>
                <div className='vh-50 d-flex flex-column gap-3 d-flex align-items-start w-100'>
                    <a href="/" className='text-decoration-none w-100'><button className='pale-blue-surface btn w-100 active-blue-text d-flex gap-4'><i className="bi bi-house-door-fill"></i><span>Home</span></button></a>
                    <a href="/" className='text-decoration-none w-100'><button className='btn w-100 secondary-text d-flex gap-4'><i className="bi bi-archive"></i><span>Archive</span></button></a>
                </div>
                <div className='vh-25 d-flex justify-content-end flex-column w-100'>
                    <a href="/" className='text-decoration-none'><button className='btn w-100 secondary-text d-flex gap-4 p-2'><i className="bi bi-box-arrow-left"></i><span>Log out</span></button></a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
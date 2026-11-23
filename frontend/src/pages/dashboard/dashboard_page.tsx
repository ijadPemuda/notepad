import '../../styles/global.css'
import './style.css'


import Sidebar from '../../components/sidebar'

function Dashboard() {
    return (
        <main className='white-surface container-fluid min-vh-100 shadow-sm border-color p-0 d-flex'>
            <Sidebar />
            
            <div className='d-flex container-fluid flex-column'>
                <nav className='d-flex justify-content-between p-4 gap-5'>
                    <form className='w-75'>
                        <div className='d-flex gap-2 secondary-background border-0 px-4'>
                            <i className="bi bi-search d-flex align-items-center justify-content-center secondary-text"></i>
                            <input type="text" className='form-control py-2 secondary-background border-0' placeholder='Search Note...'/>
                        </div>
                    </form>

                    <button className='btn primary-blue px-3 py-1 w-25 text-white'>+ New Note</button>
                </nav>

                <div className='d-flex flex-column py-4 px-3'>
                    <h2 className='main-text'>My Notes</h2>
                </div>
            </div>

        </main>
    )
}

export default Dashboard
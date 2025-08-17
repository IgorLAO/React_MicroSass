import ContainerPrin from "./container"

function Navbar() {

    return (
        <ContainerPrin>
            <nav className='bg-white border-gray-200 dark:bg-gray-800'>
                <div className='max-w-screen-x2 flex flex-wrap items-center justify-between mx-auto p-4 gap-4'>
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        sistema
                    </a>
                    <div className="flex gap-5">
                        <button type="button" className="inline-flex">
                            buttao
                        </button>
                        <a>
                            igor
                        </a>
                    </div>
                </div>
            </nav>
        </ContainerPrin>
    )
}

export default Navbar

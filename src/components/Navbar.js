import React from 'react'
import { useSelector } from 'react-redux'
import { UseSelector } from 'react-redux/es/hooks/useSelector'

export const Navbar = () => {
    const amountState = useSelector(state => state.amountt.amount)

    const cardData = useSelector(state  => state.posts)
    console.log('>>>>>>',amountState)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Malik Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <button disabled={true} className="btn-primary">
                                Your Balance : {amountState}
                            </button>
                        </div>
                    </div>
                    {/* <div>
                        {cardData.map((data)=>{
                            return (
                                <>
                                <small>{data.title}</small>
                                </>
                            )
                        })}
                    </div> */}
                </div>
            </nav>
        </>
    )
}

import React from 'react'

const Footer = () => {
    return (
        <div className='bg-danger' style={{position:"fixed",bottom:"0px", textAlign:"center", width:"100vw"}}>
            <p className='p-3'>Copyright &copy; By TEZER Tech. {new Date().getFullYear()} </p>    
        </div>
    )
}

export default Footer
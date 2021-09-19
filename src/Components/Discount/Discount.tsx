import React, { FC, useState } from 'react'
import './Discount.scss'
import closBtn from '../../img/discount/close.svg'

const Discount:FC = () => {
    const [close, setClose] = useState<boolean>(false)


    return (
       <section style={close ? {display: "none"} : {display: "block"}} className="section discount">
           <div className="container">
               <div className="discount-block">
                    <p className="discount__text">
                        Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. 
                        Promotion valid for new users only.
                    </p>
                    <img onClick={() => setClose(true)} className="discount__close" src={closBtn} alt={closBtn} />
               </div>
           </div>
       </section>
    )
}

export default Discount

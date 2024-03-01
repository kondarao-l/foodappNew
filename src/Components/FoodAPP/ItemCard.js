import React, { useState } from 'react';
import './/ItemCard.css'
import sandwich1 from './FoodImages/sandwitch1.jpg'
import { Link } from 'react-router-dom'


const Item = () => {
    const [showpopup, setShowpopup] = useState(true);

    const closeModal = () => {
        setShowpopup(false);
    }
    const [count,setCount] = useState(1)
    const [price,setPrice] = useState(7.50)
    const [chillpaper,setChillPaper] = useState(true)
    const [avacado,setAvacado] = useState(true)
    const countButton = ()=> {
        setCount(count+1)
        setPrice(7.5*(count+1))
    }
    const CountDecreaseButton = ()=> {
        if(count>=2) {
            setCount(count-1)
            setPrice(7.5*(count-1))
        }
        else {
            setCount(count)
            setPrice(7.5)
        }
    }

    return (
        showpopup && (
            <div className="item-card-container">
                <div className="item-card-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div style={{  }}>
                        <img style={{ height: '120px', width: '100%' }} src={sandwich1} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='item-heading'>Artichoke Sandwich</h1>
                            <p className='popular-button'>Popular</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <h1 className='item-heading'> $7.50</h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <p style={{ fontSize: '15px', marginTop: '2px' }}>Artichoke,spinach,cheddar and mushrooms</p>
                        </div>

                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <h1 className='item-heading'>Toppings</h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <p style={{ fontSize: '15px', marginTop: '2px' }}>Choose upto 4 additional items</p>
                        </div>
                    {avacado ? 
                     <div onClick={()=>setAvacado(false)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <label onClick={()=>setPrice(price+1.50)}>
                        <input style={{height:"12px"}} type='checkbox' name='Avacado' /> Avacado
                        </label>
                        <p>+$1.50</p>
                     </div>
                     :
                     <div onClick={()=>setAvacado(true)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <label onClick={()=>setPrice(price-1.50)}>
                        <input style={{height:"12px"}} type='checkbox' name='Avacado' /> Avacado
                        </label>
                        <p>+$1.50</p>
                     </div>
}
           {chillpaper ?
                     <div onClick={()=>setChillPaper(false)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <label  onClick={()=>setPrice(price+1.00)}>
                        <input style={{height:"12px"}} type='checkbox' name='Avacado' /> Chilli peppers
                        </label>
                        <p>+$1.00</p>
                     </div>
                     :
                     <div onClick={()=>setChillPaper(true)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <label  onClick={()=>setPrice(price-1.00)}>
                        <input style={{height:"12px"}} type='checkbox' name='Avacado' /> Chilli peppers
                        </label>
                        <p>+$1.00</p>
                     </div>
}
                     <hr/>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='item-heading'>Subtotal</h1>
                            <h1 className='item-heading'>${price}</h1>
                            
                        </div>
                        <div style={{ display: 'flex',  alignItems: 'center' }}>
                           <button  className='count-button'><span onClick={CountDecreaseButton}>-</span> {count} <span onClick={countButton}>+</span></button>
                         <Link to='/cart'>
                         <button className='order-button'>Add to Order</button>
                         </Link> 
                            
                        </div>
                       



                    </div>





                </div>
            </div>)


    );
};

export default Item;

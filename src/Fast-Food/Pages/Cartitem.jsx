import React, { useContext,useState,useEffect} from "react";
import { Store } from "./Storefoodlistt";
import './cartitem.css'
import { useNavigate} from "react-router-dom";
const Cart=()=>{
    const {cartIteams,foodlist,removefromcart,gettotalcartamount}=useContext(Store)
    const navigate=useNavigate()
   // const [total,settotal]=useState();
    // //const [Delivery,setdelevery]=useState(0);
    // if(gettotalcartamount()>0){
    //    settotal(gettotalcartamount()+19);
    //   // setdelevery(10);
    // }

    
    const [count,setcount]=useState(0)
    useEffect(() => {
        let tempCount = 0;
        const keys = Object.keys(cartIteams);
        const len = keys.length;
        
        for (var i = 0; i < len; i++) {
          const key = keys[i];
          const value = cartIteams[key];
          if (value > 0) {
            tempCount++;
          }
        }
        setcount(tempCount*19); 
      }, [cartIteams]);
    //   console.log(count);
   
    
    const btn=()=>{
        if(gettotalcartamount()>0) navigate("/order");
    }
   
    return(
        <>
        <div className="cart mt-5 ml-10">

            <table  className=" tab ml-10 float-left ">
                <tr className="tb">
                    <th>Items</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>

                {
                cartIteams.length==0?console.log("not card"):""
            }

            {foodlist.map((item,index)=>{
                if(cartIteams[item.id]>0)
                {
                    return(
                            <tr className="tb">
                            <th className="p-2"><img src={item.image} className="w-16 h-16"/></th>
                            <th>{item.name}</th>
                            <th>{item.price}</th>
                            <th>{cartIteams[item.id]}</th>
                            <th>{item.price*cartIteams[item.id]}</th>
                            <th ><button onClick={()=>removefromcart(item.id)}  className="text-red-800 text-xl">Remove</button> </th>
                            </tr>
                    )
                }
            })}
          
          {gettotalcartamount()<=0?<h1 className="text-3xl font-bold ml-20 mt-5" >Not Card Items</h1>:""}

            </table>
            <table className="w-96 mt-40 ml-10 float-left" cellPadding="10px">
                <tr >
                    <td className="text-2xl font-bold">Cart Totals</td>
                </tr>
                <tr className="tb">
                    <td>Subtotal</td>
                    <td>{gettotalcartamount()}</td>
                </tr>
                <tr className="tb">
                    <td>Delivery Fee</td>
                    <td>   {gettotalcartamount()>0?count:"0"}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>
                        {gettotalcartamount()>0?gettotalcartamount()+count:"0"}
                        </td>
                </tr>
                <button onClick={btn} className="w-60 mt-5 text-white font-bold font-sans h-8 bg-orange-500">PROCEED TO ORDER</button>
            </table>

            <div className="w-80 float-left">
                {/* <p>If you hava promo code, Enter it here</p> */}
            </div>
        </div>
        </>
    )
}
export default Cart
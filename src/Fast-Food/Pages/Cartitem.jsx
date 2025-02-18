import React, { useContext} from "react";
import { Store } from "./Storefoodlistt";
import './cartitem.css'
const Cart=()=>{
    const {cartIteams,foodlist,removefromcart,gettotalcartamount}=useContext(Store)
    
   // console.log(cartIteams.length);
   // const [total,settotal]=useState();
    // //const [Delivery,setdelevery]=useState(0);
    // if(gettotalcartamount()>0){
    //    settotal(gettotalcartamount()+19);
    //   // setdelevery(10);
    // }
   
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
                    <td>{19}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{gettotalcartamount()+19}</td>
                </tr>
                <button className="w-60 mt-5 text-white font-bold font-sans h-8 bg-orange-500">PROCEED TO ORDER</button>
            </table>

            <div className="w-80 float-left">
                {/* <p>If you hava promo code, Enter it here</p> */}
            </div>
        </div>
        </>
    )
}
export default Cart
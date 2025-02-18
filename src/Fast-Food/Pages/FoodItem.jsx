import './fooddisplay.css'
import { useContext} from 'react';
import { Store } from './Storefoodlistt';

function Fooditem({key,id,category,image,name,description,price}){
    const {cartIteams,addtocart,removefromcart}=useContext(Store);
    const plusblue = './fooditems/icons/plusblue.jpg'
    const plusgreen = './fooditems/icons/plusgreen.jpg'
    const subtraction = './fooditems/icons/subtractionorange.jpg'
    const star = './fooditems/icons/starrating.png';
    return(
        <>
      
                <div  className="item w-72 ml-14 h-96 mt-16 float-left p-5 rounded-2xl">
                    <img src={image} className="w-60 h-40 rounded-md "/>
                    <img src={star} className="w-20 h-8 float-right"/>
                    <p className="mt-7 text-xl w-60 font-bold">{name}</p>
                    <p className="mt-2">{description}</p>
                    <p className="text-xl font-semibold mt-5 text-yellow-700">Rs:{price}/-</p>

                    <div className="cardimage float-right ">
                        {!cartIteams[id]?
                        <img onClick={()=>addtocart(id)} className="w-8 h-8" src={plusblue}/>:
                        <div className="flex">
                        <img onClick={()=>removefromcart(id)} className="w-8 h-8"src={subtraction}/>
                        <p className="mr-2 ml-1 text-xl">{cartIteams[id]}</p>
                        <img onClick={()=>addtocart(id)} className="w-8 h-8" src={plusgreen}/></div>
}
                    </div>
               </div>
       
        </>
    )
}
export default Fooditem
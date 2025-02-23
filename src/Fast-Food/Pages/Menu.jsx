import { menulist } from "../../data/menuitems"
import './menu.css';
function Menu({category,setcategory}){
   // console.log(menulist);
    
    return(
        <>
        <div className="exploremenulist flex lg:w-auto lg:ml-80 sm:ml-20 mt-10 " id="menu">
        {menulist.map((itam,index)=>{
            return(
                <div key={index} className="menuitem w-20 ml-16 gap-10 " onClick={()=>setcategory(prev=>prev==itam.name?"All":itam.name)}>
                   
                    
              <img src={itam.image} alt="" className={category==itam.name?"active":""} id="menuimage"/>
              <p className="text-center font-bold mt-3 text-xl">{itam.name}</p>
                </div>
            )
        })}
        </div>

        </>
    )
}
export default Menu
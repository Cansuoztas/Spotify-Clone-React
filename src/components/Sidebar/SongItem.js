import { Icon } from "Icons"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrent } from "redux/reducers/playerSlice";
function SongItem({item}) {


    const dispatch = useDispatch()
    const { current }= useSelector(state => state.playerSlice)
    const imageStyle=item =>{
        switch(item.type){
            case 'artist':
                return 'rounded-full';
            
                case 'podcast':
                    return 'rounded-lg'

             default:
                return 'rounded';
        }
    }

    const updateCurrent = () => {
        dispatch(setCurrent(item))
    }

return(
    <NavLink 
                    key={item.id}
                    to="/"
                    className={"bg-footer p-4 rounded hover:bg-active group"}>
                        <div className="pt-[100%] relative mb-4"> 
                             <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />
                             <button 
                             
                             onClick={updateCurrent}
                             className="w-10 h-10 rounded-full bg-primary absolute group-hover:block group-focus:flex bottom-2 right-2  items-center justify-center hidden ">
                                <Icon name="play" size={16}/>
                             </button>
                             </div>
                        <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                          {item.title}  
                        </h6>
                        <p className="line-clamp-2 text-link text-sm mt-1">
                            {item.description}
                        </p>
                        
                    </NavLink>
)


}

export default SongItem
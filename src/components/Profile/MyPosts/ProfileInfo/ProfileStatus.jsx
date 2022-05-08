import React, {useEffect, useState} from "react";
const ProfileStatus = (props) => {
    const [state,setState] = useState(false)
    const [status,setStatus] = useState(props.status)
    useEffect(()=>{
        setState(props.status)
    },[props.status ])
    const activateEditMode = () =>{
       setState(true)
    }
    const deactivateEditMode = () => {
       setState(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


       return(
       <div>
           {!state &&
           <div>
               <span onDoubleClick={activateEditMode}>{props.status}</span>
           </div>
           }
           {state &&
           <div>
               <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
           </div>
           }
       </div>
       )
   }
export default ProfileStatus
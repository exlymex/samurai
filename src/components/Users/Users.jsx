import React from 'react'
import a from './Users.module.css'
let Users = (props)=>{
    if(props.users.length === 0){
        props.setUsers([
                { id: 1,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:false, fullName: 'Pasha', status: "I'm a boss",location: {city: 'Kyiv',country:'Ukraine'} },
                { id: 2,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:false, fullName: 'Ruslan', status: "I'm a ex-boss",location: {city: 'Lviv',country:'Ukraine'} },
                { id: 3,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:true, fullName: 'Andriy', status: "I'm a future boss",location: {city: 'Mariupol',country:'Ukraine'} },
                { id: 4,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:true, fullName: 'Roman', status: "I'm a mega-boss",location: {city: 'Donetsk',country:'Ukraine'} },
            ]
        )

    }

            return <div>
                {
            props.users.map(u => <div key = {u.id}>
                <span>
                    <div>
                        <img src = {u.photoURL} className={a.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=> {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                      <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users
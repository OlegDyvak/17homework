import React from 'react'

function Publication (props) {
    return (
        <div className="Publication">
            <img className="userImg" src={props.userImg} alt="User" />
            <div className="container">
                <h4>{props.name} ✔ {props.nickname} - {props.date}</h4>
                <p>WTF? Who is Ray? Why she is Skywalker? Luke...?</p>
                <img className="publicationImg" src={props.publicationImg} alt="" />
                <button>like❤</button>
            </div>
        </div>
    )
}

export default Publication
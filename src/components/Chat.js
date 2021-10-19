import React, { Component } from 'react'
import {FaSearch} from "react-icons/fa";
import styles from '../Chat.module.css'
import img1 from '../images/paschal-2.jpg'
import img2 from '../images/paschal-4.jpg'
import img3 from '../images/pixabay-1.jpg'
import img4 from '../images/pixabay.webp'
import img5 from '../images/paschal-5.webp'
import img6 from '../images/love-message.png'

class Chat extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:""
        }
    }

    handleSearchChange= (event)=> {
        this.setState({
            username:event.target.value
        })}

    mySubmitHandler =(event) =>{
       event.preventDefault();
       alert('You are looking for' + ' ' + this.state.username)
    }   
    
    
    render() {
        return (
            <>
            <div className={styles.Container}>
             <h1 className={styles.icons}>
                 <b>Chats</b>
             </h1>
             <form className={styles.example} onSubmit={this.mySubmitHandler}>
                 <input type="username"  value={this.state.username} onChange={this.handleSearchChange}/>
                 <button type="submit"><FaSearch /></button>
             </form>
             <div className={styles.row} id={styles.one}>
              <img src={img1} alt="paschal" className={styles.circle} />
              <div className={styles.pillow}>
                  <h3><b>Al-ameen Sodiq</b></h3>
                  <h4>Full-Stack Developer</h4>
              </div>
              <h4 className={styles.bed}>11:30p.m</h4>
             </div>
             <hr id={styles.line}/>
             <div className={styles.row} id={styles.two}>
              <img src={img2} alt="paschal" className={styles.circle} />
              <div className={styles.pillow}>
                  <h3><b>Omolola Fine Lady</b></h3>
                  <h4>Full-Stack Developer</h4>
              </div>
              <h4 className={styles.bed}>12:30p.m</h4>
             </div>
             <hr id={styles.line}/>
             <div className={styles.row} id={styles.three}>
              <img src={img3} alt="paschal" className={styles.circle} />
              <div className={styles.pillow}>
                  <h3><b>Nimi Baddest</b></h3>
                  <h4>Backend Developer</h4>
              </div>
              <h4 className={styles.bed}>01:30p.m</h4>
             </div>
             <hr id={styles.line}/>
             <div className={styles.row} id={styles.four}>
              <img src={img4} alt="paschal" className={styles.circle} />
              <div className={styles.pillow}>
                  <h3><b>Pelumi BeardGang</b></h3>
                  <h4>Data Scientist</h4>
              </div>
              <h4 className={styles.bed}>11:30a.m</h4>
             </div>
             <hr id={styles.line}/>
             <div className={styles.row} id={styles.five}>
              <img src={img5} alt="paschal" className={styles.circle} />
              <div className={styles.pillow}>
                  <h3><b>Bammy Usher</b></h3>
                  <h4>FrontEnd Developer</h4>
              </div>
              <h4 className={styles.bed}>11:30a.m</h4>
             </div>
             <hr id={styles.line}/>
             <div className={styles.row} id={styles.six}>
              <img src={img6} alt="paschal" className={styles.circle} />
              <div className={styles.pillow}>
                  <h3><b>Victor Easy</b></h3>
                  <h4>IBM Machine Developer</h4>
              </div>
              <h4 className={styles.bed}>02:30a.m</h4>
             </div>
            </div>
            </>
        )
    }
}

export default Chat


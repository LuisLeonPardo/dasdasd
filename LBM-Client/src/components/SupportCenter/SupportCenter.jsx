import React from "react";
import NavBar from "../Landing/NavBar/NavBar";
import Footer from "../Landing/Footer/Footer";
import styles from "./SupportCenter.module.scss";
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";


export default function SupportCenter() {
    return (
      <div className={styles.supcontainer}>
        <nav>
          <NavBar />
        </nav>
        <div className={styles.content}>
            <h1 className={styles.h1} >Support Center</h1>
            <span >
            <h3 className={styles.h3}>Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.</h3>
            </span>   
            <span>
              <SearchBar></SearchBar>
            </span>
            <div  className={styles.divPopular}>
              <h3 className={styles.popular}>POPULAR:</h3>
                <Link to ="/detail/6" className={styles.question1}><p>What is hosting?</p></Link>
                <Link to ="/detail/7" className={styles.question2}><p>Why my website is slow?</p></Link>      
            </div>
            <div>
              <Cards/>
            </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  
import { motion } from "framer-motion";
import { Component } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";



const SectionWrapper = (Component, idName) => () => {       // Higher order function returning a function that returns passed component. 
    return (
        <motion.section variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={idName}>        
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}


export default SectionWrapper;
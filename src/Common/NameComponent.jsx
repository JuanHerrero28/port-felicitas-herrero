import { motion } from "framer-motion";
import "./NameComponent.css" 

const NameComponent = ({ name, onClick }) => {
    return (
      <div className="name-component">
        {name.split('').map((letter, index) => (
          <button key={index} className="name-letter-button" onClick={onClick}>
            <motion.div
              key={index}
              className="name-letter"
              transition={{ type: "spring", stiffness: 150 }}
              whileHover={{ rotate: 360 }}
            >
              {letter}
            </motion.div>
          </button>
        ))}
      </div>
    );
  };
  
  export default NameComponent;
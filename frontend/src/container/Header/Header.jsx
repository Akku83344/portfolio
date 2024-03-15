import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>

              <h1 className="head-text">Akanksha</h1>
            </div>
          </div>
          <div className="tag-cmpp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info-right"
      >
        <div className="app__header-badge">
          <div className="tag-cmp app__flex">
            <p className="p-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              eum inventore. Ipsum sit asperiores, eius laboriosam repellat,
              assumenda libero odio soluta mollitia inventore tenetur.
              Necessitatibus nobis eaque odio facere maiores id saepe labore
              cupiditate soluta quos dolorum rerum, cumque sed quia nemo earum
              veritatis debitis laborum velit, placeat omnis natus quo nesciunt!
              Accusamus voluptates minus alias veritatis provident
            </p>
            <div className="btn">
              <a href="https://drive.google.com/file/d/1cImkQry4eJyrsCoWuPJ4-eudhKjpIeZE/view?usp=sharing">
                <h2>DOWNLOAD RESUME</h2>
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WrapperHeader = AppWrap(Header, "home");

export default WrapperHeader;

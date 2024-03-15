import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/akanksha-gupta-27269a232/"
        target="__blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Akku83344" target="__blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/i_okko_/" target="__blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;

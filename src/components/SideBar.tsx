import style from "./SideBar.module.css";
import Avatar from "./Avatar";
import { PencilLine } from "phosphor-react";

const SideBar = () => {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.coverImage}
        src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=50"
      />
      <div className={style.profile}>
        <Avatar src="https://github.com/nahteruya.png"/>
        <strong>Naomi Teruya</strong>
        <span>Front end Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
};

export default SideBar;

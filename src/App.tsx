import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Post from "./components/Post";

import "./global.css";
import style from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nahteruya.png",
      name: "Naomi Teruya",
      role: "Front end developer",
    },
    content:
      "Fala galeraa 👋 \n\nAcabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀\n\n👉 jane.design/doctorcare\n\n#novoprojeto #nlw #rocketseat",
    publishedAt: new Date("2024-05-25 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content:
      "Fala pessoal 👋\n\nFinalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 \n\nAcesse e deixe seu feedback 👉 devonlane.design\n\n #uiux #userexperience",
    publishedAt: new Date("2024-05-27 17:30:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;

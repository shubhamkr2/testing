import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.home}>
    <div>
      <h1>Hi, my name is</h1>
      <h1 className={css.name}>SHUBHAM KUMAR</h1>
      <h1>I'm a Full Stack Web Developer</h1>
    </div>
    <div className={css.profile}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxYtUp3TihdXdPyHa-QW3DUsuI55o72wTHg&usqp=CAU" alt="Shubham pic" />
    </div>
    </div>
  );
};

export default Home;

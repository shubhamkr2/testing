import css from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <h1 className={css.title}>All About Me</h1>
      <div className={css.about}>
        <div>
          <img
            src="https://i.pinimg.com/originals/27/9d/a0/279da0eddd5cf914d29ec923e837e3fe.gif"
            alt="pic"
          />
        </div>
        <div>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

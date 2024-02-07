import s from "./foo.module.css";

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.content}>
          <h1>Footer</h1>
          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            pariatur veritatis aspernatur, recusandae dolorum tempora dolor, ab
            expedita at esse dolorem, fugit amet quibusdam eaque non soluta est
            provident tempore!
          </p>
        </div>
      </div>
    </div>
  );
};
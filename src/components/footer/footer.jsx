import s from "./foo.module.css";

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className="container">
        <div className={s.flex}>
          <div className={s.box}>
            <h2>Footer</h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur pariatur veritatis aspernatur, recusandae dolorum
              tempora dolor, ab expedita at esse dolorem, fugit amet quibusdam
              eaque non soluta est provident tempore!
            </p>
          </div>
					<div className={s.box}>
            <h2>Footer</h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur pariatur veritatis aspernatur, recusandae dolorum
              tempora dolor, ab expedita at esse dolorem, fugit amet quibusdam
              eaque non soluta est provident tempore!
            </p>
          </div>
					<div className={s.box}>
            <h2>Footer</h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur pariatur veritatis aspernatur, recusandae dolorum
              tempora dolor, ab expedita at esse dolorem, fugit amet quibusdam
              eaque non soluta est provident tempore!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

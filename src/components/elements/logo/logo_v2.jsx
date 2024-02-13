import s from "./logo.module.css";
export const Logo = () => {
  return (
    <a href="/">
      <div className={s.flex}>
        <h2>Полюс</h2>
        <div className={s.circle}>
        <img className={s.logo} src="https://images2.imgbox.com/82/ab/oM1RV7m2_o.png" alt="South Pole"/>
        </div>
        <h2>Юг</h2>
      </div>
    </a>
  );
};

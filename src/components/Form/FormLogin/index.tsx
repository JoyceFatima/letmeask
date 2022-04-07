import style from './style.module.css';

export default function FormLogin() {
  return (
    <>
      <form className={style.form}>
        <div className={style.logo}>
          <img src="logo.svg" alt="logo-letmeask" />
        </div>
        <div>
          <button className={style.google}><img className={style.google_img} src="google-icon.svg" alt="google" />Criar sua sala com o Google </button>
        </div>
        <div>
          <p>ou entre em uma sala</p>
        </div>
        <div className={style.caixa}>
          <input className={style.input} type="text" />
        </div>
        <div>
          <button className={style.button}>Entrar</button>
        </div>
      </form>
    </>
  );
}

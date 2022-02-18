function Share() {

  return (
    <div className="share">
      <button type="submit" className="share__button">
        <i className="far fa-id-card"></i>
        <span className="share__button--text"> Crear tarjeta </span>
      </button>
      <div className="shareclick"></div>
    </div>
  );
}

export default Share;
const Titulo = (props) => {
  return (
    <section>
      <h1 className="p-2 text-center">Hello World !!</h1>
      <h2 className="text-center">{props.subtitulo}</h2>
    </section>
  );
};

export default Titulo;

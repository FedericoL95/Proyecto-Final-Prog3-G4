import Card from "../components/ui/Card"; // Podria utilizarse para que quede mejor con el resto de la pagina, pero se me ocurrio despues de que ya habia escribido todo
export default function FAQ() {
  return (
    <div className="page">
      <div className="container">
        <h1>Preguntas Frecuentes</h1>
        
        <section className="card">
          <h2>¿Qué hago si mi libro no aparece en la página?</h2>
          <p>Si el libro que buscas no se encuentra en la página, esperá a la próxima actualización.
            Nuestra base de datos se actualiza con frecuencia para incluir más libros e autores.
          </p>
        </section>

        <section className="card">
          <h2>¿Por qué mi reseña no se guarda?</h2>
          <p>Si tu reseña no se guarda, es posible que hayas sobrepasado el límite de caracteres permitido.
            Intenta mantener tu reseña breve. Si tu reseña cumple con los requisitos y aún así no se guarda,
            es posible que sea un error temporal de nuestro servidor. De ser así, intentálo de nuevo más tarde.
          </p>
        </section>

        <section className="card">
          <h2>Un libro está mal clasificado, ¿puedo hacer algo al respecto?</h2>
          <p>Si creés que un libro está mal clasificado, podes contactarnos a través del formulario de contacto para informarnos del error.</p>
        </section>

      </div>
    </div>
  );
}
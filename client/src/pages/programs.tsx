import { useEffect, useState } from "react";

interface SeriesType {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [series, setSeries] = useState<SeriesType[] | null>();

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((series) => setSeries(series));
  });

  return (
    <>
      <h1>Séries</h1>
      <article>
        {series
          ? series.map((serie) => {
              return (
                <div key={serie.id} className="flex">
                  <h2>Nom : {serie.title}</h2>
                  <img src={serie.poster} alt={serie.poster} />
                  <p>Synopsis : {serie.synopsis}</p>
                  <p>Country : {serie.country}</p>
                  <p>Year : {serie.year}</p>
                </div>
              );
            })
          : "pas de séries"}
      </article>
    </>
  );
}

export default Programs;

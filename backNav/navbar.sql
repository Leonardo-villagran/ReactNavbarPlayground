CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR NOT NULL,
  ruta VARCHAR NOT NULL
);

CREATE TABLE estilo (
  id SERIAL PRIMARY KEY,
  colorfondo VARCHAR NOT NULL,
  colortexto VARCHAR NOT NULL
);

INSERT INTO estilo VALUES (DEFAULT,'black','white');


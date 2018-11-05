DROP DATABASE navy;
CREATE DATABASE navy;
\c navy;

CREATE TABLE fleets (
  id SERIAL PRIMARY KEY,
  name varchar(40) UNIQUE NOT NULL
);

CREATE TABLE ships (
  id SERIAL PRIMARY KEY,
  name varchar(40) UNIQUE,
  fleet_id integer references fleets(id),
  date_made date
);

CREATE TABLE ranks (
  id SERIAL PRIMARY KEY,
  name varchar(40) UNIQUE NOT NULL
);

CREATE TABLE sailors (
  id SERIAL PRIMARY KEY,
  name varchar(40) NOT NULL,
  date_of_birth date
);

CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  rank_id integer references ranks(id),
  sailor_id integer references sailors(id),
  ship_id integer references ships(id),
  name varchar(40),
  date_start date,
  date_end date
);

INSERT INTO fleets (name) VALUES ('South Pacific');
INSERT INTO ships (name, date_made, fleet_id) VALUES ('USS Rosevelt', date '1998-11-28', 1);
INSERT INTO ranks (name) VALUES ('private');
INSERT INTO sailors (name, date_of_birth) VALUES ('Jenkins McGee Jr.', date '1967-09-21');
INSERT INTO assignments (rank_id, sailor_id, ship_id, date_start, date_end, name) VALUES (1,1,1,'2018-02-01','2020-05-01','First Assignment');

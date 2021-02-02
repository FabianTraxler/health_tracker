REVOKE all privileges on database health_data FROM health;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM health;
DROP USER IF EXISTS health;
CREATE USER health WITH ENCRYPTED PASSWORD 'health';

drop table if exists nutrition cascade;
create table nutrition (
     Date_ date PRIMARY KEY,
     cow int,
     chicken int,
     pork int,
     fish int,
     meat int,
     wheat int,
     glutes int,
     dairy int,
     rice int,
     vegetables int ,
     sugar int,
     coffee int ,
     beer int ,
     wine int,
     strong_alcohol int,
     alcohol int
);

drop table if exists health cascade;
create table health (
     Date_ date PRIMARY KEY,
     feeling int,
     bowl_movement int,
     digestion int,
     skin int,
     sleep int,
     meditation int,
     stresslevel int
);

drop table if exists time cascade;
create table time (
     Date_ date PRIMARY KEY,
     sleep int,
     meditation int,
     screen_time int,
     HIIT int,
     Kondi int
);


GRANT all privileges on database health_data to health;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO health;

/*
INSERT INTO nutrition VALUES ('2020-05-26', 0, 0, 1, 0, 1, 2, 4, 2, 0, 3, 2, 1, 0, 0, 0,  0);
INSERT INTO health VALUES ('2020-05-26', 4, 4, 1, 2, 4, 3);
INSERT INTO time VALUES ('2020-05-26', 9, 15, 7, 15, 5);

INSERT INTO nutrition VALUES ('2020-05-27', 0, 0, 0, 0, 0, 4, 4, 3, 0, 2, 4, 3, 0, 0, 0,  0);
INSERT INTO health VALUES ('2020-05-27', 4, 4, 2, 4, 4, 4);
INSERT INTO time VALUES ('2020-05-27', 8, 10, 5, 20, 0)

INSERT INTO nutrition VALUES ('2020-05-28', 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0,  0);
INSERT INTO health VALUES ('2020-05-28', 4, ?, 3, 4, 2, 8, 2, 8, 5);*/
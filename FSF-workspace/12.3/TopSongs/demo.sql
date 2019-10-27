DROP DATABASE IF EXISTS topsongs_db;
CREATE DATABASE topsongs_db;
USE topsongs_db;


CREATE TABLE Top5000
(
    position int not null,
    artist varchar(100) null,
    song varchar(100)null,
    year int null,
    raw_total decimal(10,4),
    raw_usa decimal(10,4),
    raw_uk decimal(10,4),
    raw_eur decimal(10,4),
    raw_row decimal(10,4),
    primary key (position)
);

select *
from Top5000;

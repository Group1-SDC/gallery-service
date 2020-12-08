drop database if exists gallery;
create database gallery;
\c gallery;

create table if not exists images (
  id serial not null primary key,
  listing_id int not null,
  img_url varchar(255) not null
);

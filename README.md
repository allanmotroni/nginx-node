# NGINX + Node + Mysql

docker-compose up -d (no diretório que contém o arquivo docker-compose.yaml)

# Banco de dados

Entrar no container mysql
mysql -u root -p

use nodedb;
create table people(id int not null auto_increment, name varchar(255), primary key(id));
desc people;# nginx-node

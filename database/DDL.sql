create database tcc_vegano_cometique;
use tcc_vegano_cometique;

create table tb_usuario(
	id_usuario int primary key auto_increment,
    nm_usuario varchar(100) not null,
    ds_email varchar(100) not null,
    ds_cpf  varchar(14) not null ,
	dt_nascimento date,
    ds_telefone varchar(14),
    ds_senha	varchar(50) not null
);

create table tb_endereco_usuario(
	id_endereco_usuario int primary key auto_increment,
    id_usuario int,
    ds_cep varchar(10),
    ds_endereco varchar(100) not null,
    ds_pt_referencia varchar(100) not null,
    nr_casa int not null,
    foreign key (id_usuario) references  tb_usuario (id_usuario)
);

create table tb_categoria(
	id_categoria int primary key auto_increment,
    ds_categoria varchar(50)
);

create table tb_parte_corpo(
	id_parte_corpo int primary key auto_increment,
    ds_parte_corpo varchar(50)
);

create table tb_produto(
	id_produto int primary key auto_increment,
    id_categoria int,
    id_parte_corpo int,
    nm_produto varchar(100),
    ds_produto varchar(5000),
    nr_valor decimal(10,2),
    ds_fabricante varchar(50),
    dt_validade datetime,
    nr_volume	varchar(10),
    nr_quantidade int,
    ds_linha	varchar(50),
    img_produto varchar(5000),
    foreign key (id_categoria) references tb_categoria (id_categoria),
    foreign key (id_parte_corpo) references tb_parte_corpo (id_parte_corpo)
);

create table tb_ofertas(
	id_ofertas int primary key auto_increment,
    id_produto int,
    ds_preco_novo decimal(15,2),
    foreign key (id_produto) references tb_produto (id_produto) 
);

create table tb_depoimento(
	id_depoimento	int primary key auto_increment,
    id_usuario		int,
    ds_comentario varchar(500),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

create table tb_compra(
	id_compra int primary key auto_increment,
    id_endereco_usuario int,
    id_usuario int,
    nr_valor_final decimal(15,2),
    ds_status varchar(50),
    ds_tipo_pagamento varchar(50),
    foreign key (id_endereco_usuario) references tb_endereco_usuario (id_endereco_usuario),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

create table tb_pix(
	id_pix int primary key auto_increment,
    id_compra int,
    ds_chave_pix varchar(60),
    dt_processamento date,
    foreign key (id_compra) references tb_compra (id_compra)
);

create table tb_boleto(
	id_boleto int primary key auto_increment,
    id_compra int,
    ds_cod_boleto varchar(54),
    dt_processamento date,
    dt_vencimento date,
    foreign key (id_compra) references tb_compra (id_compra)
);

create table tb_cartao(
	id_cartao int primary key auto_increment,
    id_compra int,
    ds_bandeira varchar(20),
    nr_cartao varchar(20),
    dt_vencimento varchar(5),
    nm_titular_cartao varchar(100),
    nr_cod_seguranca varchar(3),
    foreign key (id_compra) references tb_compra (id_compra)
);

create table tb_compra_itens(
	id_compra_itens int primary key auto_increment,
    id_compra int,
    id_produto int,
    nr_quantidade int,
    foreign key (id_compra) references tb_compra (id_compra),
	foreign key (id_produto) references tb_produto (id_produto)
);

create table tb_adm(
	id_adm int primary key auto_increment,
    nm_adm varchar(100) not null,
    ds_email varchar(100) not null,
    ds_cpf  varchar(14) not null ,
	dt_nascimento date,
    ds_telefone varchar(14),
    ds_senha	varchar(50) not null
);
use tcc_vegano_cometique;

-- Cargas Inicais do site
insert into tb_adm (nm_adm, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Emily', 'emmily@gmail.com', '456.258.365-45', '2005-07-29', '91551311351', 'emily15');
            
insert into tb_adm (nm_adm, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Matheus Fagundes', 'matheus@gmail.com', '456.482.221-10', '2006-08-09', '951586152', 'matheus15');
            
insert into tb_adm (nm_adm, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Julia Nory', 'JuNory@gmail.com', '583.258.555-75', '2005-11-05', '955886566', 'julia15');
            
insert into tb_adm (nm_adm, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Kauanny ', 'kauanny@gmail.com', '582.258.365-12', '2002-04-29', '91551311351', 'kauanny15');
            
insert into tb_adm (nm_adm, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Maria Clara', 'mabenta@gmail.com', '892.120.365-10', '2005-10-22', '952134654', 'maria15');
            
insert into tb_usuario (nm_usuario, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Julio Knob', 'julio@gmail.com', '587.781.365-13', '1998-10-22', '952134654', 'julio10');
            
insert into tb_usuario (nm_usuario, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Gabrielle Silva', 'gabizzao@gmail.com', '589.255.789-22', '1998-03-15', '952134654', 'gabi10');
            
insert into tb_usuario (nm_usuario, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
			value ('Felipe Neres', 'felipe@gmail.com', '689.235.791-13', '2001-07-22', '952134654', 'felipe10');
            
insert into tb_categoria(ds_categoria)
			values('Perfumes');

insert into tb_categoria(ds_categoria)
			values('Maquiagem');
            
insert into tb_categoria(ds_categoria)
			values('Infantil');
            
insert into tb_categoria(ds_categoria)
			values('Banhos');
            
insert into tb_categoria(ds_categoria)
			values('Shampoo');
            
insert into tb_categoria(ds_categoria)
			values('Condicionador');
            
insert into tb_categoria(ds_categoria)
			values('Mascára Capilar');
            
insert into tb_parte_corpo(ds_parte_corpo)
			values('Mãos');
            
insert into tb_parte_corpo(ds_parte_corpo)
			values('Rosto');
            
insert into tb_parte_corpo(ds_parte_corpo)
			values('Corpo');
            
insert into tb_parte_corpo(ds_parte_corpo)
			values('Boca');
            
insert into tb_parte_corpo(ds_parte_corpo)
			values('Pés');
                            
 select id_categoria         as id,
               ds_categoria         as categoria
          from tb_categoria
         where id_categoria = 2;
         
 select id_parte_corpo         as id,
               ds_parte_corpo as Corpo
          from tb_parte_corpo
         where id_parte_corpo = 2;
					
            
select nm_produto,
		nr_valor,
        ds_categoria,
        ds_parte_corpo
	from tb_produto
    inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
    inner join tb_parte_corpo on tb_produto.id_parte_corpo = tb_parte_corpo.id_parte_corpo;
    
select  id_endereco_usuario		id,
		ds_cep					cep,
        ds_endereco				endereco,
        nr_casa					casa,
        ds_pt_referencia		referencia
	from tb_endereco_usuario
where id_usuario = 1;

insert into tb_endereco_usuario (id_usuario, ds_cep, ds_endereco, nr_casa, ds_pt_referencia)
						value (1, '13245-123', 'Rua Manuel Canalhes', '51', 'apartamento');



-- Começo API ADM

-- (01) Buscar categorias para cadastro de produtos
select
	id_categoria as id,
    ds_categoria as categoria
 from tb_categoria;


-- (02) Buscar Parte do corpo para cadastro de produtos
select
	id_parte_corpo as id,
    ds_parte_corpo as parteCorpo
 from tb_parte_corpo;

-- (03) Cadastro de produto informações
insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha)
	values('Axepscia', 'Sabonete para pele acnosa', 25.00,'Axepscia', '2029-06-05', 75, 'Uso diário');
    
-- (04) Consultar estoque
select id_produto as id,
		nm_produto as nome,
        ds_fabricante as fabricante,
        nr_valor as preco,
        nr_quantidade as quantidade
from tb_produto;


    
-- (05) alterar imagem
update tb_produto
	set img_produto = '/storage/filme/asdfasdf.jp'
where id_produto = 5;
	
    
-- (06) Login ADM 
select id_adm 	as	 id,
		nm_adm	as	nome,
        ds_email as email
from tb_adm
where ds_email = 'matheus@gmail.com' and
		ds_senha = 'matheus15';
        
-- (07) alterar produto
update tb_produto
	set nm_produto = '212 Rose',
		ds_produto  = 'Perfume pika',
        nr_valor = 150.50,
        ds_fabricante = 'Avon',
        dt_validade = '2030-12-01',
        ds_linha = 'Vegana',
        nr_quantidade = 250,
        nr_volume = '250ml',
        id_categoria = 1,
        id_parte_corpo = 2
where id_produto = 10;

-- (08.1) Filtrar Estoque Nome 
select id_produto as id,
		nm_produto as nome,
        ds_fabricante as fabricante,
        nr_valor as preco,
        nr_quantidade as quantidade
from tb_produto 
where nm_produto like '2%';

-- (09) Deletar produto
delete from tb_produto where id_produto = 3;

-- (10) Card produto usuario 
select id_produto as id,
        ds_categoria as categoria,
		ds_fabricante as fabricante,
		img_produto as imagem,
		nm_produto as nome,
        nr_volume as volume,
        ds_linha as linha,
        nr_valor as valor
from tb_produto
inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria;

-- (11) Buscar id
select	
	id_produto as id,
    ds_categoria as categoria,
	ds_parte_corpo as ParteCorpo,
	nm_produto as nome,
	ds_linha as linha,
	ds_produto as descricao,
	nr_valor as valor,
	ds_fabricante as fabricante,
	dt_validade as validade,
	nr_quantidade as quantidade,
	nr_volume as volume,
    img_produto as imagem
from tb_produto
inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
inner join tb_parte_corpo on tb_produto.id_parte_corpo = tb_parte_corpo.id_parte_corpo
where id_produto = 3;
        
-- Complemento Produtos
-- (01). FiltrarProdutos -- categoria
select id_categoria,
		ds_categoria
from tb_categoria
where ds_categoria = 'Banhos';

select id_produto as id,
		ds_fabricante as fabricante,
        ds_categoria as categoria,
		img_produto as imagem,
		nm_produto as nome,
        nr_volume as volume,
        ds_linha as linha,
        nr_valor as valor
from tb_produto
inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
where ds_categoria like "Perfumes";

-- (02) Filtro Produto nome
select id_produto as id,
		ds_fabricante as fabricante,
        ds_categoria as categoria,
		img_produto as imagem,
		nm_produto as nome,
        nr_volume as volume,
        ds_linha as linha,
        nr_valor as valor
from tb_produto
inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
where nm_produto like "%";
        
-- Endpoints usuario
-- 01 login usuario
select id_usuario 	as	 id,
		nm_usuario	as	nome,
        ds_email as email
from tb_usuario
where ds_email = 'julio@gmail.com' and
		ds_senha = 'julio10';
        
-- (02) Buscar info usuario
select id_usuario as id,
		nm_usuario as nome,
        ds_email as email,
        ds_cpf as cpf,
        dt_nascimento as nascimento,
        ds_telefone as telefone
from tb_usuario
	where id_usuario = 1;
    

-- (03)Cadastrar endereco    
insert into tb_endereco_usuario(id_usuario, ds_cep, ds_endereco,ds_pt_referencia, ds_bairro, ds_estado, ds_cidade, nr_casa)
		values(1, 04854840, 'Rua Aggenor Klaussner', 'Mercadinho do almeão', 'Chacará Cocaia', 'São Paulo', 'São Paulo', 1);
    
-- (04)Cadastrar cartão
insert into tb_cartao(id_compra, ds_bandeira, nr_cartao, dt_vencimento,nm_titular_cartao, nr_cod_seguranca, nr_parcelas)
			values();

-- (05) Ver Depoimentos
select 	id_depoimento,
        nm_usuario,
        vl_depoimento,
        ds_email,
        ds_comentario 
from tb_depoimento
inner join tb_usuario on tb_depoimento.id_usuario = tb_usuario.id_usuario;


-- (06) Mandar depoimentos
insert into tb_depoimento(id_usuario, vl_depoimento, ds_comentario)
		values(3, 'Positiva', 'Bons produtos');

select * from tb_endereco_usuario;

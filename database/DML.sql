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
            
insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha, img_produto)
			values('Selagem Vegana Marroquina', 'Selagem de qualidade', 139.90,'Marroquina', '2024-12-05', 1000, 'Profissional', 'adsdaddasd');
            
insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha, img_produto)
			values('Gel Creme Facil Antiacne', 'Gel para pessoas com a pele acnosa', 175.70,'Almanati', '2028-12-01', 50, 'Uso Diário', 'adsdaddasd');
            
insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha, img_produto)
			values('Máscara de Argila Verde', 'Argila para pessoas com a pele óleosa',45.30,'Matrix', '2024-12-05', 250, 'Uso Diário', 'adsdaddasd');
            
insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha, img_produto)
			values('Sérum Facil Natural Maria da Selva', 'Sérum para pessoas cuidadosas com sua pele', 67.90,'Cativa Natureza', '2026-12-05', 130, 'Uso Diário', 'adsdaddasd');
            
insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha, img_produto)
			values('Creme para Mãos Orgânico Lavanda', 'Creme para mãos ótimo para hidratar assim como deixar aquele cheirinho maravilhoso ', 75.00,'Urtekram', '2029-06-05', 75, 'Profissional', 'adsdaddasd');
            
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
insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha, img_produto)
	values('Creme para Mãos Orgânico Lavanda', 'Creme para mãos ótimo para hidratar assim como deixar aquele cheirinho maravilhoso ', 75.00,'Urtekram', '2029-06-05', 75, 'Profissional', 'adsdaddasd');

-- (04) alterar imagem
update tb_produto
	set img_produto = '/storage/filme/asdfasdf.jp'
where id_produto = 5;
    
-- (05) Login ADM 
select id_adm 	as	 id,
		nm_adm	as	nome,
        ds_email as email
from tb_adm
where ds_email = 'matheus@gmail.com' and
		ds_senha = 'matheus15';
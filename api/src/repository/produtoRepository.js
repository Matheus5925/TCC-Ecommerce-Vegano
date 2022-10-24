import { response } from 'express';
import { con } from './connection.js';


export async function CadastroProduto(infoProduto) {
    const comando = `
            insert into tb_produto(id_categoria, id_parte_corpo,nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,nr_quantidade,ds_linha)
			    values(? ,? ,? ,? ,? ,? ,? ,? ,? ,?)`;
    const [linhas] = await (await con).query(comando, [infoProduto.idCategoria, infoProduto.idParteCorpo, infoProduto.nome, infoProduto.descricao, infoProduto.valor, infoProduto.fabricante, infoProduto.validade, infoProduto.volume, infoProduto.quantidade, infoProduto.linha]);
    infoProduto.id = linhas.insertId;

    return infoProduto;
}

export async function AlterarImagem(imagem, id) {
    const comando = `
            update tb_produto
            set img_produto     = ?
        where id_produto        = ?`;
    const [linhas] = await (await con).query(comando, [imagem, id]);
    return linhas.affectedRows;
}

export async function BuscarEstoque() {
    const comando = `select id_produto as id,
                            nm_produto as nome,
                            ds_fabricante as fabricante,
                            img_produto as imagem,
                            nr_valor as preco,
                            nr_quantidade as quantidade
                        from tb_produto`;
    const [linhas] = await (await con).query(comando);
    return linhas;
};

export async function AlterarProduto(id, infoProdutos) {
    const comando = `update tb_produto
                    set nm_produto = ?,
                        ds_produto  = ?,
                        nr_valor = ?,
                        ds_fabricante = ?,
                        dt_validade = ?,
                        ds_linha = ?,
                        nr_quantidade = ?,
                        nr_volume = ?,
                        id_categoria = ?,
                        id_parte_corpo = ?
                    where id_produto = ?`;
    const [linhas] = await (await con).query(comando,[infoProdutos.nome ,infoProdutos.descricao ,infoProdutos.valor ,infoProdutos.fabricante ,infoProdutos.validade,infoProdutos.linha ,infoProdutos.quantidade , infoProdutos.volume ,infoProdutos.idCategoria,infoProdutos.idParteCorpo, id]);
    return linhas.affectedRows; 
}

export async function BuscaEstoqueNome(nome) {
    const comando = `select id_produto as id,
                            nm_produto as nome,
                            ds_fabricante as fabricante,
                            nr_valor as preco,
                            nr_quantidade as quantidade
                        from tb_produto 
                        where nm_produto like ?`;
    const [linhas] = await (await con).query(comando, [`${nome}%`]);
    return linhas;
};


export async function DeletarProduto(id) {
    const comando = `delete from tb_produto where id_produto = ?`;

    const [linhas] = await (await con).query(comando,[id]);
    return linhas.affectedRows;
}

export async function BuscarId(id) {
    const comando = `
                    select	
                        id_produto as id,
                        ds_categoria as categoria,
                        id_parte_corpo as ParteCorpo,
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
                    where id_produto = ?`;
    const [linhas] = await (await con).query(comando, [id]);
    return linhas[0];
}

export async function MostrarProdutos() {
    const comando = `select id_produto as id,
                        ds_categoria as categoria,
                        ds_fabricante as frabricante,
                        img_produto as imagem,
                        nm_produto as nome,
                        nr_volume as volume,
                        ds_linha as linha,
                        nr_valor as valor
                    from tb_produto
                    inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria;`;
    const [linhas] = await (await con).query(comando);
    return linhas;       
};

export async function FiltrarPorCategoria(nome) {
    const comando = `select id_produto as id,
                        ds_fabricante as frabricante,
                        ds_categoria as categoria,
                        img_produto as imagem,
                        nm_produto as nome,
                        nr_volume as volume,
                        ds_linha as linha,
                        nr_valor as valor
                    from tb_produto
                    inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
                    where ds_categoria like ?`;
    const [linhas] = await (await con).query(comando,[nome]);
    return linhas;
}
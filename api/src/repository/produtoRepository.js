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
    return linhas
};

export async function AlterarProduto(id, infoProdutos) {
    const comando = `update tb_produto
                    set nm_produto = ?,
                        ds_produto  = ?,
                        nr_valor = ?,
                        ds_fabricante = ?,
                        dt_validade = ?,
                        nr_quantidade = ?,
                        nr_volume = ?,
                        id_categoria = ?,
                        id_parte_corpo = ?,
                        ds_linha = ?
                where id_produto = ?`;
    const [linhas] = await (await con).query(comando,[infoProdutos.nome ,infoProdutos.descricao ,infoProdutos.valor ,infoProdutos.fabricante ,infoProdutos.validade ,infoProdutos.quantidade , infoProdutos.volume ,infoProdutos.idCategoria,infoProdutos.idParteCorpo,  infoProdutos.linhas, id]);
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
}
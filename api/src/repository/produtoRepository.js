import { response } from 'express';
import {con} from './connection.js';


export async function CadastroProduto(infoProduto) {
    try {
            const comando = `
            insert into tb_produto(id_categoria, id_parte_corpo,nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha, img_produto)
			values(? ,? ,? ,? ,? ,? ,? ,? ,? , ?)`;
            const [linhas] = await (await con).query(comando, [infoProduto.idCategoria,infoProduto.idParteCorpo,infoProduto.nome, infoProduto.descricao, infoProduto.valor, infoProduto.fabricante,  infoProduto.validade, infoProduto.volume, infoProduto.linha]);
            return linhas.insertId;
   } catch (err) {
        response.status(400).send({
            erro: err.message
        })
   }
    return linhas;
}

export async function AlterarImagem(imagem, id) {
    const comando = `
            update tb_produto
            set img_produto     = ?
        where id_produto        = ?`;
    const [linhas] = await (await con).query(comando, [imagem, id]);
    return linhas.affectedRows;
}
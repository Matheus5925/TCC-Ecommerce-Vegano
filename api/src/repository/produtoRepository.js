import { response } from 'express';
import {con} from './connection.js';


export async function CadastroProduto(infoProduto) {
            const comando = `
            insert into tb_produto(id_categoria, id_parte_corpo,nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,nr_quantidade,ds_linha)
			    values(? ,? ,? ,? ,? ,? ,? ,? ,? ,?)`;
            const [linhas] = await (await con).query(comando, [infoProduto.idCategoria,infoProduto.idParteCorpo,infoProduto.nome, infoProduto.descricao, infoProduto.valor, infoProduto.fabricante,  infoProduto.validade, infoProduto.volume,infoProduto.quantidade, infoProduto.linha]);
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
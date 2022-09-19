import { response } from 'express';
import {con} from './connection.js';

export async function  BuscarCategoria(){
    const comando = `
                select
                    id_categoria as id,
                    ds_categoria as categoria
                from tb_categoria`;
    
    const [linhas] = await (await con).query(comando);
    return linhas;
};

export  async function BuscarParteCorpo(){
    const comando = `select
                        id_parte_corpo as id,
                        ds_parte_corpo as parteCorpo
                    from tb_parte_corpo`;
    const [linhas] = await (await con).query(comando);
    return linhas;
}


export async function CadastroProduto(infoProduto) {
    try {
            const comando = `
            insert into tb_produto(nm_produto, ds_produto, nr_valor, ds_fabricante, dt_validade, nr_volume,ds_linha)
                    values(? ,? ,? ,? , ?, ?, ?)`;
            const [linhas] = await (await con).query(comando, [infoProduto.nome, infoProduto.descricao, infoProduto.valor, infoProduto.fabricante,  infoProduto.validade, infoProduto.volume, infoProduto.linha]);
            infoProduto.id = linhas.insertId;
            return linhas;
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
            set img_produto = ?
        where id_produto = ?`;
    const [linhas] = await (await con).query(comando, [imagem, id]);
    return linhas.affectedRows;
}
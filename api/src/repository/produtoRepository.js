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



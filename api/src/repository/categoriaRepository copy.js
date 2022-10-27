import { con } from "./connection.js";

export async function BuscarCategoria() {
    const comando = `
                select
                    id_categoria as id,
                    ds_categoria as categoria
                from tb_categoria`;

    const [linhas] = await (await con).query(comando);
    return linhas;
};

export async function BuscarCategoriaId(id) {
    const comando = `
    select id_categoria         as id,
            ds_categoria         as categoria
    from tb_categoria
    where id_categoria = ?`;
    const [linhas] = await (await con).query(comando, [id]);
    return linhas[0];
};


export async function BuscarParteCorpo() {
    const comando = `select
                        id_parte_corpo as id,
                        ds_parte_corpo as parteCorpo
                    from tb_parte_corpo`;
    const [linhas] = await (await con).query(comando);
    return linhas;
}

export async function BuscarParteCorpoId(id) {
    const comando =
        ` select id_parte_corpo         as id,
                ds_parte_corpo as Corpo
        from tb_parte_corpo
        where id_parte_corpo = ?`;
    const [linhas] = await (await con).query(comando, [id]);
    return linhas[0];
}
import {con} from './connection.js';

export async function LoginAdm(email, senha) {
    const comando = `select id_adm 	as	 id,
                        nm_adm	as	nome,
                        ds_email as email
                    from tb_adm
                    where ds_email = ? and
                        ds_senha = ?`
    const [resposta] = await (await con).query(comando, [email, senha]);
    return resposta[0]
};
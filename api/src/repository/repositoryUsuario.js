import { con } from "./connection.js";

export default async function LoginUsuario(email, senha) {
    const comando = `select id_usuario 	as	 id,
                        nm_usuario	as	nome,
                        ds_email as email
                    from tb_usuario
                    where ds_email = ? and
                        ds_senha = ?`;
    const [resposta] = await (await con).query(comando, [email, senha]);
    return resposta[0];
}
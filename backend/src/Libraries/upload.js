const multer = require('multer');
const path = require('path');

module.exports = {
    /*
        O multer pode salvar em varios locais.
        
        diskStorage - será salvo no disco.

        Você precisará configurar duas variaves:

        destination - onde o arquivo será salvo.

        filname - como o nome do arquivo será gerado.
    */
    storage: multer.diskStorage({

        /*
            cada sistema operacional tem um tipo de endereçamento e roteamento
            de pastas, por isso, utilizando 'path.resolve()' o node automaticamente
            identifca qual S.O está sendo utilizado e coloca o separador correto.

            '__dirname' é uma variavel global que retorna o caminho para o diretorio atual desse arquivo, no caso, 'Libraries'.

            '..' indicam o retorno de nivel na arvore de diretorios a partir do arquivo
            onde está função está sendo chamada, no caso, 'Libraries'.

            O ultimo parametro é o nome do diretorio onde os arquivos serão salvos.
            Nesse exemplo, o diretório se chama 'uploads'.
        */
        destination: path.resolve(__dirname,'..', '..','uploads'),

        /*
            a composição do nome do arquivo é manipulada por uma função que recebe 3 parametros:

            - req                   -> requisição
            - file                  -> arquivo
            - afterFileNameResolved -> É uma função que é chamada assim que o nome do arquivo tiver sido 
                                    capturado pela aplicação.

        */
        filename: (req, file, afterFileNameResolved) =>{

            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            /*
                Essa função recebe 2 parametros:

                - null -> É uma trativa de erro. Poderia ser uma mensagem ou mesmo uma
                        função de callback para uma manipulação mais elaborado do erro.

                - fileName -> Seria a formação do nome do arquivo propriamente dito. O nome 
                            é formado por:

                            - O nome original do arquivo sem a extensao
                            - a data atual em segundos desde 1980
                            - a extensao

                            A composição dessas tres variaveis forma um nome unico para o arquivo
                            na pasta 'uploads'.
            */
            afterFileNameResolved(null, `${name}_${Date.now()}${ext}`);
        }
    }),
};
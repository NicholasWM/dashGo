import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'
type User = {
    name:string;
    email:string;
    created_at:string;
}

export function makeServer(){
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({} as User) // Contem os campos mas n todos(Partial)
        },
        
        factories:{ // Gera dados em massa
            user: Factory.extend({
                name(i:number){
                    return `User ${i+1}`
                },
                email(){
                    return faker.internet.email().toLowerCase()// Gera um email aleatorio
                },
                createdAt(){
                    return faker.date.recent(10, new Date()) // Criados nos ultimos 10 dias depois do dia q retorna de new a date
                }
            })
        },

        seeds(server){
            server.createList('user', 10)
        },
        routes(){
            this.namespace = 'api'
            this.timing = 750 // Tempo de delay pra chamada da API, bom pra testar os loadings da aplicação
            this.get('/users') // Retorna a lista completa(shorthands nas docs)
            this.post('/users') // 

            this.namespace = ''
            this.passthrough() // Todas as chamadas que vão para o endereço de API passem pelo Mirage e caso n estejam no mirage
            // voltam para a pagina inicial, evita conflito com  o next
        }
    })

    return server
}


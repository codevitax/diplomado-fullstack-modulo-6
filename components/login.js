Vue.component(
    'login',
    {
        template: //html
        `
        <div>
        <input type="email" v-model="datos.email" required placeholder="Correo electronico">
        <input type="password" v-model="datos.password" required placeholder="******">
        <input type="submit" @click="$emit('on-login', datos)" value="enviar">
        </div>
        `,
        data: function() {
            return {
                datos:{
                    email:"",
                    password: ""
                }
            }
        }
    }
);
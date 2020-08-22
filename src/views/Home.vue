<template>
  <div class="home pa-10">
    <v-text-field v-model="datamodel.nombre" placeholder="nombre" />
    <v-text-field v-model="datamodel.correo" placeholder="correo" />
    <v-text-field v-model="datamodel.pass" placeholder="contraseña" />
  <v-btn class="primary" @click="addnewuser">Guardar</v-btn>
  <br /><br />
<v-card>
  <v-card-title class="primary white--text">
  Lista de Usuarios
  </v-card-title>
  <v-card-text>
    <v-data-table :headers="cabecera" :items="datosuser">
        <template v-slot:item.action='{ item }' >
         <v-btn class="error" @click="deluser(item)">Eliminar</v-btn>
          </template>
  </v-data-table>
      </v-card-text>
  </v-card>
  
  </div>
</template>
<style scoped>
</style>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      datamodel: {
        nombre: "",
        correo: "",
        pass: ""
      },
      cabecera:[{
        text:'Nombre',
        value:'nombre'
      },
      {
        text:'Correo',
        value:'correo'
      },
      {
        text:'Contraseña',
        value:'password'
      },
      {
        text:'Acciones',
        value:'action'
      }
      ],
      datosuser:[]
    }
  },
  methods:{
    async addnewuser(){
      try{
          await this.$firebase_db.collection('usuarios').add({
            nombre:this.datamodel.nombre,
            correo:this.datamodel.correo,
            password:this.datamodel.pass
          })
              this.datamodel.nombre=""
              this.datamodel.correo=""
              this.datamodel.pass=""

              this.getElement()

      }catch(error){
        console.log(error)
      }
    },
    deluser(){  
      

    },
    async getElement(){
      try{
        this.datosuser=[]
    const dtuser=await this.$firebase_db.collection('usuarios').get()
    dtuser.forEach(doc=>{
     this.datosuser.push(doc.data())
    })
     
      }catch(error){
        console.log(error)
      }
    }
  },
  created(){
    this.getElement()
  }
}
</script>
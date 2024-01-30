  <template>

    <div>
      <h1 v-html="question"></h1>
      <div v-for="(a, index) in answersTab" :key="index">                            
      <label v-html="a"></label>
      <input type="radio" v-bind:value="a" name="rep" >
     

      </div>    
       <MonBtn label="CONFIRME" @click="reponseBtn()"/>
    
     
  </div>

</template>

<script>

import MonBtn from "@/components/MonBtn.vue";




export default {
    data(){
      return{
        question:"",
        incorrectAnswers:[],
        correctAnswer:"",
        category:"",  
        difficulty:"",
      }

    },

    components:{
    MonBtn
      
    },

    methods:{
      reponseBtn(){
      let rep = document.querySelector('input[name=rep]:checked').value;
      if ( rep === this.correctAnswer){
        alert( this.correctAnswer + " est la bonne réponse!!!")
        this.LoadNewPage();
      }

      else{
        alert("Mauvaise réponse!!!")
        this.LoadNewPage();
      }

      
    },

    LoadNewPage() {
    this.axios
    .get("https://opentdb.com/api.php?amount=1").then((response) => {
            this.question=response.data.results[0].question 
            this.incorrectAnswers=response.data.results[0].incorrect_answers

            this.correctAnswer=response.data.results[0].correct_answer

            this.category=response.data.results[0].category

            this.difficulty=response.data.results[0].difficulty
    } )
  },
    


    },

      computed:{
        answersTab(){
        let answers = [...this.incorrectAnswers]
        answers.splice(Math.round(Math.random()*answers.length),0,this.correctAnswer)
        

  return answers
  
  

},



  },

  created(){
    this.LoadNewPage()
  }

 
}
</script>

<style>

</style>
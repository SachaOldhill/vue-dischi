function initVue(){
  new Vue({
    el:'#app',
    data:{
     arrayData:[],
     textInput:'',
    },
    computed: {
      filteredGenre: function(){
        return this.arrayData.filter(data => {
          // const result = data.genre.toLowerCase().includes(this.searchText.toLowerCase());
          const result = data.genre.toLowerCase().includes(this.textInput.toLowerCase());
          return result;
        } );
      }
    },
    methods:{

    },
    mounted() {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music", {
        params:{

        }
      })
      .then(data => {
        this.arrayData = data.data.response;
       console.log(this.arrayData);
      })
      .catch(() => console.log('error'));
    },
  });
}

function init(){
  initVue();
}
$(init);

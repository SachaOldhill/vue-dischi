function initVue(){
  new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    mounted() {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music", {
        params:{
          poster: "https://images-na.ssl-images-amazon.com/images/I/81r3FVfNG3L._SY355_.jpg",
          title: "And Justice for All",
          author: "Metallica",
          genre: "Metal",
          year: "1988"
        }
      })
      .then(data => {

      })
      .catch(() => console.log('error'));
    },
  });
}

function init(){
  initVue();
}
$(init);

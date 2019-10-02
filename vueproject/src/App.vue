<template>
    <div id="app" :key="componentKey">
        <Header :numCorrect="numCorrect" :numTotal="numTotal"/>
        <b-container>
            <b-row>
                <b-col sm="6" offset="3">
                    <QuestionBox v-if="questions.length" :numTotal="numTotal" :restart="remount" :question="questions[index]" :next="nextQuestion"
                                 :increment="increment"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import QuestionBox from './components/QuestionBox.vue'

    export default {
        name: 'app',
        components: {
            Header,
            QuestionBox
        },
        data() {
            return {
                questions: [],
                index: 0,
                numCorrect: 0,
                numTotal: 0,
                componentKey: Math.random() * 1000,
            };
        },
        methods: {
            nextQuestion: function () {
                if (this.index < 9) {
                    this.index++
                }
            },
            increment: function (isCorrect) {
                if (isCorrect) {
                    this.numCorrect++;
                }
                this.numTotal++;
            },
          remount: function () {
            this.componentKey = Math.random() * 1000;
            this.questions.length = 0;
            this.numCorrect = 0;
            this.numTotal = 0;
            this.index = 0;
            fetch("https://opentdb.com/api.php?amount=10&type=multiple")
                    .then((results) => results.json())
                    .then((jsonResults) => {
                      this.questions = jsonResults.results;
                    });
          }
        },
        mounted: async function () {
            fetch("https://opentdb.com/api.php?amount=10&type=multiple")
                .then((results) => results.json())
                .then((jsonResults) => {
                    this.questions = jsonResults.results;
                });
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

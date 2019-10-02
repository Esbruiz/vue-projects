<template>
    <div>
        <b-jumbotron>
            <template v-slot:lead>
                <p v-html="question ? question.question : ''"/>
            </template>

            <hr class="my-4">

            <b-list-group>
                <b-list-group-item
                        v-for="(answer, index) in shuffledAnswers"
                        :key="index"
                        @click="selectAnswer(index)"
                        :class="answerClass(index)"
                >{{answer}}
                </b-list-group-item>
            </b-list-group>

            <template v-if="numTotal <= 9">
                <b-button variant="primary" :disabled="selectedIndex === null || submitted" @click="submitAnswer">Submit</b-button>
                <b-button variant="success" :disabled="!submitted" href="#" @click="next">Next</b-button>
            </template>

            <template v-else>
                <b-button variant="success" href="#" @click="restart">Play Again</b-button>
            </template>
        </b-jumbotron>
    </div>
</template>

<script>
    import _ from "lodash"

    export default {
        name: "QuestionBox",
        props: {
            question: Object,
            next: Function,
            increment: Function,
            restart: Function,
            numTotal: Number
        },
        data() {
            return {
                selectedIndex: null,
                correctIndex: null,
                shuffledAnswers: [],
                submitted: false,
            };
        },
        watch: {
            question: {
                immediate: true,
                handler() {
                    this.selectedIndex = null;
                    this.shuffleAnswers();
                    this.submitted = false;
                }
            }
        },
        methods: {
            selectAnswer: function (index) {
                if(this.submitted) {
                    return null;
                }
                    this.selectedIndex = index;
            },
            shuffleAnswers: function () {
                this.shuffledAnswers = _.shuffle([...this.question.incorrect_answers, this.question.correct_answer]);
                this.correctIndex = this.shuffledAnswers.indexOf(this.question.correct_answer);
            },
            submitAnswer: function () {
                let isCorrect = false;
                if(this.selectedIndex === this.correctIndex){
                    isCorrect = true;
                }
                this.increment(isCorrect);
                this.submitted = true;
            },
            answerClass: function (index) {
                return !this.submitted && this.selectedIndex === index
                    ? 'selected' : this.submitted && this.correctIndex === index
                        ? 'correct' : this.submitted && this.selectedIndex !== this.correctIndex && this.selectedIndex === index ? 'incorrect' : ''

            }
        }
    }
</script>

<style scoped>

    .list-group {
        margin-bottom: 20px;
    }

    .list-group-item:hover {
        cursor: pointer;
        background-color: #eeeeee;
    }

    .selected {
        background-color: lightblue;
    }

    .correct {
        background-color: lightgreen;
    }

    .incorrect {
        background-color: red;
    }

    .btn {
        margin: 0;
        margin-left: 5px;
    }
</style>
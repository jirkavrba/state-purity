<template>
    <div class="flex flex-col items-center my-20">
        <div class="flex flex-col items-center">
            <div class="flex flex-row items-center justify-center mr-5">
                <div @click="prev" class="transition duration-300 hover:opacity-50 cursor-pointer">
                    <img src="../assets/arrow-left.svg">
                </div>
                <div class="text-indigo-700 text-3xl font-bold mr-3 ml-5">{{ currentQuestion + 1 }}</div>
                <div class="text-indigo-500 text-2xl font-bold mr-5"> / {{ questions.length }}</div>
                <div @click="next" class="transition duration-300 hover:opacity-50 cursor-pointer">
                    <img src="../assets/arrow-right.svg">
                </div>
            </div>
            <div class="flex flex-col lg:w-auto w-full items-center shadow-lg bg-blur p-3 px-5 lg:p-10 mt-2 rounded-lg" style="max-width: 60vh;">
                <slide-up-down :active="questions[currentQuestion].checked">
                    <img src="../assets/check-circle.svg" class="inline mr-2"/>
                </slide-up-down>
                <div class="text-xl lg:text-3xl mt-5 font-bold text-center" style="min-height: 200px;">
                    <div :class='"uppercase text-sm " + descriptions[questions[currentQuestion].weight - 1].class'>{{ descriptions[questions[currentQuestion].weight - 1].text }}</div>
                    <span :class='questions[currentQuestion].checked ? "text-green-500" : "text-indigo-800"'>
                        {{ questions[currentQuestion].content }}
                    </span>
                </div>
                <div class="flex flex-row mt-5">
                    <button class="border-4 border-indigo-700 rounded-xl text-2xl px-4 py-2 font-bold uppercase text-indigo-700 mx-3" @click="() => this.move(true)">Yes</button>
                    <button class="border-4 border-indigo-700 rounded-xl text-2xl px-4 py-2 font-bold uppercase text-indigo-700 mx-3" @click="() => this.move(false)">No</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<style>
    .bg-blur {
        background: rgba(255, 255, 255, 0.85);
        --webkit--backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }
    button {
        outline: none;
    }
</style>

<script>
    import descriptions from '../data/descriptions';

    export default {
        data: () => ({
            descriptions,
            currentQuestion: 0,
        }),
        methods: {
            prev: function () {
                this.currentQuestion = Math.max(this.currentQuestion - 1, 0)
            },
            next: function () {
                if (this.currentQuestion === this.questions.length - 1) {
                    this.complete();
                    return;
                }

                this.currentQuestion = Math.min(this.currentQuestion + 1, this.questions.length)
            },
            move: function (value) {
                this.questions[this.currentQuestion].checked = value;
                this.next();
            }
        },
        props: [
            'questions', 'complete'
        ],
    }
</script>

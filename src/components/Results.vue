<template>
    <div class="flex flex-col items-center my-20">
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center justify-center mr-5 shadow-lg bg-white p-10 rounded-lg">
                <div class="text uppercase text-sm mb-5 font-bold text-gray-600">Your weighted result</div>
                <div class="flex flex-row items-center justify-center" style="width: 60vh;">
                    <div class="text-6xl text-indigo-700 font-bold text-center">{{ Math.floor((100 - score) * 10) / 10 }}</div>
                    <div class="text-xl text-gray-700 font-bold ml-3"> / 100</div>
                </div>

                <div class="w-full border-b my-5"></div> 

                <div class="flex lg:flex-row flex-col">
                    <div class="flex flex-col mt-2 items-center mx-3 text-indigo-300">
                        <div class="text-4xl font-bold">{{ questions.filter(question => question.weight == 1).length }}</div>
                        <div class="text-lg font-bold uppercase">Minor</div>
                    </div>
                    <div class="flex flex-col mt-2 items-center mx-3 text-indigo-500">
                        <div class="text-4xl font-bold">{{ questions.filter(question => question.weight == 2).length }}</div>
                        <div class="text-lg font-bold uppercase">Immoral</div>
                    </div>
                    <div class="flex flex-col mt-2 items-center mx-3 text-indigo-700">
                        <div class="text-4xl font-bold">{{ questions.filter(question => question.weight == 3).length }}</div>
                        <div class="text-lg font-bold uppercase">Raunchy</div>
                    </div>
                    <div class="flex flex-col mt-2 items-center mx-3 text-indigo-900">
                        <div class="text-4xl font-bold">{{ questions.filter(question => question.weight == 4).length }}</div>
                        <div class="text-lg font-bold uppercase">Scandalous</div>
                    </div>
                    <div class="flex flex-col mt-2 items-center mx-3 text-red-800">
                        <div class="text-4xl font-bold">{{ questions.filter(question => question.weight == 5).length }}</div>
                        <div class="text-lg font-bold uppercase">Unspeakable</div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        props: ['score', 'questions']
    }
</script>
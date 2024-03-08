import Typewriter from "typewriter-effect";
import { Impdates } from './Impdates'
export function Home() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                        <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
                            International Conference on Design and Manufacturing Technologies
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("2024")
                                        .pauseFor(1500)
                                        .start();
                                }}
                            />
                        </h1>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">**Space for theme**</p>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-64 overflow-hidden">
                            {/* space for icdmt poster */}
                            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">ICDMT</h2>
                                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p class="text-base">International Conference on Design and Manufacturing Technologies</p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed text-lg mb-4">The goal of the ‘International Conference on Design and Manufacturing Technologies” (ICDMT-2024) scheduled for 08th -10th Nov 2024 is to bring together experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing with a focus on advanced materials to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view to product design, process design and analysis as well as to create, and manufacture goods. </p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Impdates/>
        </div>
    )
}
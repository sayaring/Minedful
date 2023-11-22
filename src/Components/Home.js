// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <section className="home">
      <div class="flex flex-auto bg-white">
        <div class="h-full w-full p-5 sm:px-5 sm:py-10 lg:px-5">
          <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-5 shadow-2xl sm:rounded-3xl sm:px-10 md:pt-6 lg:flex lg:gap-x-20 lg:px-12 lg:pt-0">
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div class="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome to MinedFul<br></br></h2>
              <p class="mt-6 text-lg leading-8 text-gray-300">Streamline and optimize your business processes with our powerful application.</p>
              <div class="mt-10 flex flex-col items-center justify-center lg:flex-row lg:justify-start">
                <a href="login" class="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-4 sm:mt-0 lg:mt-0 lg:ml-4">Login<span aria-hidden="true">→</span></a>
                <a href="signup" class="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-4 sm:mt-0 lg:mt-0 lg:ml-4">Sign-Up <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;

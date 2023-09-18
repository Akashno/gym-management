<template>
  <div class="bg-white-light  border-black h-full relative  grid grid-cols-1 lg:grid-cols-2  py-10 lg:py-32 lg:ps-28 gap-x-4   gap-y-10">
    <div class="text-center lg:text-start">
      <div class="relative w-fit mx-auto lg:mx-0">
        <div class="w-fit   mx-auto lg:mx-0 py-2   text-sm ps-2 pe-4 rounded-full shadow-sm bg-white flex items-center gap-x-2">
          <div class="w-8 h-8 bg-green rounded-full flex items-center justify-center">
            <Icon name="mdi:puzzle" color="white" />
          </div>
          Welcome to Our Premier Interlock Solutions
        </div>
      </div>
      <div class="text-3xl lg:text-[54px] font-bold leading-tight mt-8 ">
        <h1>Make Your Outdoor  </h1> <h1>Minimalist & Modern</h1>
      </div>
      <div class="mt-6 px-2 lg:px-0">
        <p class="text-black text-[18px] opacity-70 max-w-[500px] mx-auto lg:mx-0">
          Explore a Diverse Range of Interlock Paving Options with Easy Access
          Transform your landscape today!"
        </p>
      </div>
      <div class="mt-10 flex items-center gap-x-4 justify-center lg:justify-start">
        <Button class="bg-green w-fit px-8 py-3 text-white  text-md rounded-full  border-2">
          Explore
        </Button>

        <div class="flex gap-x-2 items-center">
          <Icon name="fluent:open-32-filled" color="black" />
          <span> Reach to us </span>
        </div>
      </div>
    </div>
    <div>
      <CoreCarousal />
    </div>
  </div>
</template>

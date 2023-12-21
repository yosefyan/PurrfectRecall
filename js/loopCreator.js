const imgsLoop = (container, array, ele, classes, shouldValue) => {
  array.forEach(
    (arr) =>
      (container.innerHTML += `
       <div class="flip-box bg-transparent w-full xl:w-[15vw]">
         <div class="flip-box-inner relative w-full h-[30vh] text-center ">
           <div class="flip-box-front bg-cyan-900/25 absolute w-full h-full">
           <img class="h-full" src="../assets/questionMark.jpg" alt="question mark" />
           </div>
             <div class="flip-box-back absolute w-full h-full">
              <${ele} src="${arr}" alt="${arr}" class="${classes}">${
             shouldValue ? arr : ""
            }</${ele}>
              </div>
          </div>
      </div> 
      `)
  );
};

const simpleLoop = (container, ele, arr, classes) => {
  arr.forEach((a) => {
    container.innerHTML += `<${ele} class="${classes}">${a}</${ele}>`;
  });
};
export { imgsLoop, simpleLoop };

// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
 ];
 
 // Варианты цен (фильтры), которые ищет пользователь
 let requiredRange1 = [null, 200];
 let requiredRange2 = [100, 350];
 let requiredRange3 = [200, null];

 function priceFilter (requiredRange) {
    let result = [];
    let lowPrice = requiredRange[0];
    let hiPrice = requiredRange[1];

    for (let course of courses) {
        if (course.prices[0]>= lowPrice && course.prices[1]<= hiPrice && course.prices[0] <= hiPrice) {
            result.push(course);
        }
        else if (course.prices[0] >= lowPrice){
            result.push(course);
        }
    }
    console.log(result);
 }

priceFilter(requiredRange1);
priceFilter(requiredRange2);
priceFilter(requiredRange3);

//EX1
const today = new Date();
const days = ['Chúa nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
const day = days[today.getDay()];
const hours = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
const ampm = today.getHours() >= 12 ? 'PM' : 'AM';
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log(`Today is: ${day}.`);
console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);


function formalGreeting(){
    console.log("How are you");
}
function casualGreeting(){
    console.log("What's up?");
}
function greet(type,greetFormal, greetCasual){
    if (type==='fomal'){
    greetFormal();
}else if (type==='casual'){
    greetCasual();
}
}
greet('casual',formalGreeting,casualGreeting);

//EX2
function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Tháng 1 là 0!
    const yyyy = today.getFullYear();

    // Định dạng 1: mm-dd-yyyy
    const format1 = mm + '-' + dd + '-' + yyyy;

    // Định dạng 2: mm/dd/yyyy
    const format2 = mm + '/' + dd + '/' + yyyy;

    // Định dạng 3: dd-mm-yyyy
    const format3 = dd + '-' + mm + '-' + yyyy;

    // Định dạng 4: dd/mm/yyyy
    const format4 = dd + '/' + mm + '/' + yyyy;

    return {
        "mm-dd-yyyy": format1,
        "mm/dd/yyyy": format2,
        "dd-mm-yyyy": format3,
        "dd/mm/yyyy": format4
    };
}

const currentDate = getCurrentDate();
console.log("mm-dd-yyyy:", currentDate["mm-dd-yyyy"]);
console.log("mm/dd/yyyy:", currentDate["mm/dd/yyyy"]);
console.log("dd-mm-yyyy:", currentDate["dd-mm-yyyy"]);
console.log("dd/mm/yyyy:", currentDate["dd/mm/yyyy"]);

// Hàm chuyển đổi từ Celsius sang Fahrenheit
// Ex3
function chuyenDoiCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Hàm chuyển đổi từ Fahrenheit sang Celsius
function chuyenDoiFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Nhiệt độ đầu vào
const doCelsius = 60;
const doFahrenheit = 45;

// Chuyển đổi và in kết quả
console.log(doCelsius + "°C tương đương " + chuyenDoiCelsiusToFahrenheit(doCelsius) + "°F");
console.log(doFahrenheit + "°F tương đương " + chuyenDoiFahrenheitToCelsius(doFahrenheit) + "°C");
//EX4
function reverseString(str) {
    // Sử dụng split() để chuyển đổi chuỗi thành mảng các ký tự
    // Sử dụng reverse() để đảo ngược mảng
    // Sử dụng join() để chuyển đổi mảng thành chuỗi
    return str.split('').reverse().join('');
}

const originalString = "HUY ĐẸP TRAI";
const reversedString = reverseString(originalString);

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

//EX5
function kiemTraBieuThuc(x, y, z) {
    if (x + y === z || x - y === z || x * y === z || x / y === z) {
        return true;
    } else {
        return false;
    }
}

const x = 10;
const y = 30;
const z = 300;

if (kiemTraBieuThuc(x, y, z)) {
    console.log(
      `Có thể thay thế $ bằng một trong các toán tử để có được ${x} $ ${y} = ${z}`
    );
  } else {
    console.log(
      `Không thể thay thế $ bằng một trong các toán tử để có được ${x} $ ${y} = ${z}`
    );
  }
  

//EX6
function findKthGreatestElement(arr, k) {
    // Sắp xếp mảng theo thứ tự giảm dần
    arr.sort(function(a, b) {
        return b - a;
    });

    // Trả về phần tử lớn thứ k
    return arr[k - 1];
}

// Mảng đầu vào
const array = [3, 7, 2, 9, 4, 6];
// K = 3
const k = 3;

// Tìm và in ra phần tử lớn thứ k
console.log("Phần tử lớn thứ", k, "trong mảng là:", findKthGreatestElement(array, k));
//

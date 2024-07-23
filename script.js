/** Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. 
 * Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
 * */
function countNumbersGE10() {
  let arr = [1, 5, 8, 10, 15, 20, 25, 19, 16, 30]
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      console.log(arr[i])
    }
  }
}

/** Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau. 
 * Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
 * */
  function findMaxAndIndex() {
    let arr = [1, 5, 8, 10, 15, 20, 25, 19, 16, 30]
    let max = [0];
    let maxIndex = 0;
    for ( let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
    console.log('Số lớn nhất mảng là : ' + max);
    console.log('Vị trí của số lớn nhất mảnh là : ' + maxIndex);
  }

/* Bài 3- Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó. 
* In ra giá trị trung bình của các phần tử trong mảng. 
*/
function findMaxAndAverage() {

  let arr = [1, 5, 8, 10, 15, 20, 50, 19, 16, 30]
  let max = [0];
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] > max ) {
      max = arr[i];
    }
  }
  console.log('Số lớn nhất mảng là : ' + max)

  let sum = 0;
  for ( let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let Average = sum / arr.length;
  console.log('Giá trị trung bình của các phần tử trong mảng là : ' + Average)

}

/* Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó. */
function reverseArray() {
  let arr = [11, 5, 8, 10, 15, 20, 50, 19, 16, 30]
  let start = 0;      
  let end = arr.length - 1; 

  while (start < end) { 
    while (start < end ) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  console.log('Mảng sau khi đảo ngược: ' + arr.join(', '));

}

/*  Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi */
function countNegativeNumbers() {
  let arr = [-10, -5, -20, 20, 40, -1, -3, 2, 4, -4]
  let negativeNumber = [];
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNumber.push(arr[i])
    }
  }
  console.log('Số nguyên âm trong chuỗi là : ' + negativeNumber.join(','))
}

/* Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. 
Chương trình tìm xem V có nằm trong mảng số nguyên không?
 Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array". 
 */

function checkNumberInArray() {
  let arr = [1, 4, 6, 8, 10, 15, 20, 25, 30, 35];
  let V = +prompt('Nhập số bất kì từ 1 đến 30')
  let isInArray = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === V) {
      isInArray = true;
      break;
    }
    
  }
  if (isInArray) {
    alert(V + ' is in the array')
  } else {
    alert(V + ' is not in the array');
  }

}

/**Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
 *  Chương trình kiểm tra xem V có thuộc mảng đã cho không, nếu V thuộc mảng đã cho xoá V khỏi mảng 
 * (Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng) */
function removeNumberFromArray() {
  let arr = [1, 4, 6, 8, 10, 15, 20, 25, 30, 35];
  let V = +prompt('Nhập số bất kì từ 1 đến 30')
  let isInArray = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === V) {
      isInArray = true;
      arr.splice(i, 1);
      break;
    }
  }
  if (isInArray) {
    console.log("Mảng sau khi xoá số " + V + " là : " + arr.join(','));
  } else {
    alert(V + ' is not in the array');
  }

}

/**Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử.
 *  Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp */
function sortArrayDescending() {
  let arr = [1, 3, 5, 10, 2, 19, 33, 50, 20, 11, 7, 6];
  arr.sort((a, b) =>  b - a);
  console.log(arr);
}

/** Bài 9- Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
 *  Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.
 *  Hiển thị mảng c. */

function mergeArray() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  let c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
  console.log("Mảng c mới là : " + a.concat(b, c))

}
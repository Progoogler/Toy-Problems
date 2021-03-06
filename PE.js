/*
* 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
* 
* What is the sum of the digits of the number 2^1000?
*/

var powerDigitSum = function(base, power) {
  "use strict";
  let n = 1,
      store = "1",
      carry = "";

  while (n <= power) {
    let newStore = "",
        carry = "";
    for (let i = store.length-1; i >= 0; i--) {
      // "carry" cases:
      if (carry.length > 0 && store[i] === "0") {
        newStore = carry + newStore;
      } else if (carry.length > 0 && i !== 0) {
        let temp = base * parseInt(store[i]) + parseInt(carry) + "";
        newStore = temp[temp.length-1] + newStore;
        temp.length > 1 ? carry = temp[0] : carry = ""; 
      } else if (carry.length > 0 && i === 0) {
        newStore = base * parseInt(store[i]) + parseInt(carry) + newStore;
      } else {
        // no "carry" cases:
        if (i > 0) {
          let temp = base * parseInt(store[i]) + "";
          if (temp.length < 2 && temp !== "0") {
            newStore = temp + newStore;
          } else if (temp === "0") {
            newStore = 0 + newStore;
          } else if (temp.length > 1 && temp !== "0") {
            carry = temp[0];
            newStore = temp[1] + newStore;
          }
        } else if (store[i] === "0") {
          newStore = 0 + newStore;
        } else {
          newStore = base * parseInt(store[i]) + newStore;
        }
      }
    }
    store = newStore;
    n++;
  }
  let sum = 0;
  for (let i = 0; i < store.length; i++) {
    sum += parseInt(store[i]);
  }
  return sum;
};

/*****************************************************************************************************************************/

/*
* In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
* 
* 08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
* 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
* 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
* 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
* 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
* 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
* 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
* 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
* 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
* 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
* 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
* 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
* 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
* 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
* 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
* 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
* 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
* 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
* 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
* 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
* 
* The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
* 
* What is the greatest product of four adjacent numbers in the same direction 
* (up, down, left, right, or diagonally) in the 20×20 grid?
*/

var grid = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

var gridProducts = function(grid) {
  "use strict";
  let column = grid.length,
      maxUp = 0,
      maxDown = 0,
      maxLeft = 0,
      maxRight = 0,
      maxCross = 0,
      maxProducts = [];

  for (let i = 0; i < column; i++) {
    for (let j = 0, row = grid[i].length; j < row; j++) {
      if (j < row - 3) {
        let temp = grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3];
        if (maxRight < temp) maxRight = temp;
      }
      if (j > 2) {
        let temp = grid[i][j] * grid[i][j-1] * grid[i][j-2] * grid[i][j-3];
        if (maxLeft < temp) maxLeft = temp;
      }
      if (i > 2) {
        let temp = grid[i][j] * grid[i-1][j] * grid[i-2][j] * grid[i-3][j];
        if (maxUp < temp) maxUp = temp;
      }
      if (i < column - 3) {
        let temp = grid[i][j] * grid[i+1][j] * grid[i+2][j] * grid[i+3][j];
        if (maxDown < temp) maxDown = temp;
      }
      if (j < row - 3 && i < column - 3) {
        let temp = grid[i][j] * grid[i+1][j+1] * grid[i+2][j+2] * grid[i+3][j+3];
        if (maxCross < temp) maxCross = temp;
      }
      if (j > 2 && i < column - 3) {
        let temp = grid[i][j] * grid[i+1][j-1] * grid[i+2][j-2] * grid[i+3][j-3];
        if (maxCross < temp) maxCross = temp;
      }
    }
  }
  maxProducts.push(maxCross);
  maxProducts.push(maxUp);
  maxProducts.push(maxDown);
  maxProducts.push(maxRight);
  maxProducts.push(maxLeft);
  maxProducts.sort((a,b) => a - b);
  return maxProducts[4];
};

/*****************************************************************************************************************************/

/*
* The four adjacent digits in the 1000-digit number that have the 
* greatest product are 9 × 9 × 8 × 9 = 5832.
* 
* 73167176531330624919225119674426574742355349194934
* 96983520312774506326239578318016984801869478851843
* 85861560789112949495459501737958331952853208805511
* 12540698747158523863050715693290963295227443043557
* 66896648950445244523161731856403098711121722383113
* 62229893423380308135336276614282806444486645238749
* 30358907296290491560440772390713810515859307960866
* 70172427121883998797908792274921901699720888093776
* 65727333001053367881220235421809751254540594752243
* 52584907711670556013604839586446706324415722155397
* 53697817977846174064955149290862569321978468622482
* 83972241375657056057490261407972968652414535100474
* 82166370484403199890008895243450658541227588666881
* 16427171479924442928230863465674813919123162824586
* 17866458359124566529476545682848912883142607690042
* 24219022671055626321111109370544217506941658960408
* 07198403850962455444362981230987879927244284909188
* 84580156166097919133875499200524063689912560717606
* 05886116467109405077541002256983155200055935729725
* 71636269561882670428252483600823257530420752963450
* 
* Find the thirteen adjacent digits in the 1000-digit number that have 
* the greatest product. What is the value of this product?
*/

var number =
"73167176531330624919225119674426574742355349194934" + 
"96983520312774506326239578318016984801869478851843" + 
"85861560789112949495459501737958331952853208805511" +
"12540698747158523863050715693290963295227443043557" +
"66896648950445244523161731856403098711121722383113" +
"62229893423380308135336276614282806444486645238749" +
"30358907296290491560440772390713810515859307960866" +
"70172427121883998797908792274921901699720888093776" +
"65727333001053367881220235421809751254540594752243" +
"52584907711670556013604839586446706324415722155397" +
"53697817977846174064955149290862569321978468622482" +
"83972241375657056057490261407972968652414535100474" +
"82166370484403199890008895243450658541227588666881" +
"16427171479924442928230863465674813919123162824586" +
"17866458359124566529476545682848912883142607690042" +
"24219022671055626321111109370544217506941658960408" +
"07198403850962455444362981230987879927244284909188" +
"84580156166097919133875499200524063689912560717606" +
"05886116467109405077541002256983155200055935729725" +
"71636269561882670428252483600823257530420752963450";

var adjacentProducts = n => {
  "use strict";
  let result1,
      max = 1; 
  for (let i = 0, l = n.length; i < l; i++) {
    if (n[i] === '9' || n[i] === '8' || n[i] === '7' || n[i] === '6' ||
      n[i] === '5' || n[i] === '4' || n[i] === '3') {
      let x = 13,
          j = i,
          result1 = 1;
      while (x > 0) {
        if (n[j] === 0) break;
        result1 *= parseInt(n[j]);
        j++;
        x--;
      }
      if (result1 > max) max = result1;
    }
  }

  return max; 
};

/*****************************************************************************************************************************/

// Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

var n =
  "37107287533902102798797998220837590246510135740250" +
  "46376937677490009712648124896970078050417018260538" +
  "74324986199524741059474233309513058123726617309629" +
  "91942213363574161572522430563301811072406154908250" +
  "23067588207539346171171980310421047513778063246676" +
  "89261670696623633820136378418383684178734361726757" +
  "28112879812849979408065481931592621691275889832738" +
  "44274228917432520321923589422876796487670272189318" +
  "47451445736001306439091167216856844588711603153276" +
  "70386486105843025439939619828917593665686757934951" +
  "62176457141856560629502157223196586755079324193331" +
  "64906352462741904929101432445813822663347944758178" +
  "92575867718337217661963751590579239728245598838407" +
  "58203565325359399008402633568948830189458628227828" +
  "80181199384826282014278194139940567587151170094390" +
  "35398664372827112653829987240784473053190104293586" +
  "86515506006295864861532075273371959191420517255829" +
  "71693888707715466499115593487603532921714970056938" +
  "54370070576826684624621495650076471787294438377604" +
  "53282654108756828443191190634694037855217779295145" +
  "36123272525000296071075082563815656710885258350721" +
  "45876576172410976447339110607218265236877223636045" +
  "17423706905851860660448207621209813287860733969412" +
  "81142660418086830619328460811191061556940512689692" +
  "51934325451728388641918047049293215058642563049483" +
  "62467221648435076201727918039944693004732956340691" +
  "15732444386908125794514089057706229429197107928209" +
  "55037687525678773091862540744969844508330393682126" +
  "18336384825330154686196124348767681297534375946515" +
  "80386287592878490201521685554828717201219257766954" +
  "78182833757993103614740356856449095527097864797581" +
  "16726320100436897842553539920931837441497806860984" +
  "48403098129077791799088218795327364475675590848030" +
  "87086987551392711854517078544161852424320693150332" +
  "59959406895756536782107074926966537676326235447210" +
  "69793950679652694742597709739166693763042633987085" +
  "41052684708299085211399427365734116182760315001271" +
  "65378607361501080857009149939512557028198746004375" +
  "35829035317434717326932123578154982629742552737307" +
  "94953759765105305946966067683156574377167401875275" +
  "88902802571733229619176668713819931811048770190271" +
  "25267680276078003013678680992525463401061632866526" +
  "36270218540497705585629946580636237993140746255962" +
  "24074486908231174977792365466257246923322810917141" +
  "91430288197103288597806669760892938638285025333403" +
  "34413065578016127815921815005561868836468420090470" +
  "23053081172816430487623791969842487255036638784583" +
  "11487696932154902810424020138335124462181441773470" +
  "63783299490636259666498587618221225225512486764533" +
  "67720186971698544312419572409913959008952310058822" +
  "95548255300263520781532296796249481641953868218774" +
  "76085327132285723110424803456124867697064507995236" +
  "37774242535411291684276865538926205024910326572967" +
  "23701913275725675285653248258265463092207058596522" +
  "29798860272258331913126375147341994889534765745501" +
  "18495701454879288984856827726077713721403798879715" +
  "38298203783031473527721580348144513491373226651381" +
  "34829543829199918180278916522431027392251122869539" +
  "40957953066405232632538044100059654939159879593635" +
  "29746152185502371307642255121183693803580388584903" +
  "41698116222072977186158236678424689157993532961922" +
  "62467957194401269043877107275048102390895523597457" +
  "23189706772547915061505504953922979530901129967519" +
  "86188088225875314529584099251203829009407770775672" +
  "11306739708304724483816533873502340845647058077308" +
  "82959174767140363198008187129011875491310547126581" +
  "97623331044818386269515456334926366572897563400500" +
  "42846280183517070527831839425882145521227251250327" +
  "55121603546981200581762165212827652751691296897789" +
  "32238195734329339946437501907836945765883352399886" +
  "75506164965184775180738168837861091527357929701337" +
  "62177842752192623401942399639168044983993173312731" +
  "32924185707147349566916674687634660915035914677504" +
  "99518671430235219628894890102423325116913619626622" +
  "73267460800591547471830798392868535206946944540724" +
  "76841822524674417161514036427982273348055556214818" +
  "97142617910342598647204516893989422179826088076852" +
  "87783646182799346313767754307809363333018982642090" +
  "10848802521674670883215120185883543223812876952786" +
  "71329612474782464538636993009049310363619763878039" +
  "62184073572399794223406235393808339651327408011116" +
  "66627891981488087797941876876144230030984490851411" +
  "60661826293682836764744779239180335110989069790714" +
  "85786944089552990653640447425576083659976645795096" +
  "66024396409905389607120198219976047599490197230297" +
  "64913982680032973156037120041377903785566085089252" +
  "16730939319872750275468906903707539413042652315011" +
  "94809377245048795150954100921645863754710598436791" +
  "78639167021187492431995700641917969777599028300699" +
  "15368713711936614952811305876380278410754449733078" +
  "40789923115535562561142322423255033685442488917353" +
  "44889911501440648020369068063960672322193204149535" +
  "41503128880339536053299340368006977710650566631954" +
  "81234880673210146739058568557934581403627822703280" +
  "82616570773948327592232845941706525094512325230608" +
  "22918802058777319719839450180888072429661980811197" +
  "77158542502016545090413245809786882778948721859617" +
  "72107838435069186155435662884062257473692284509516" +
  "20849603980134001723930671666823555245252804609722" +
  "53503534226472524250874054075591789781264330331690";

var largeSum = function(string) { 
  "use strict";
  let result = [],
      sum,
      stringSum,
      carry = "0",
      dec = 49;

  while (result.length <= 49 && dec > -1) {
    sum = parseInt(carry);
    for (let i = dec; i < string.length; i+=50) {
      sum += parseInt(string[i]);
    }
    stringSum = sum + "";
    result.unshift(stringSum[stringSum.length-1]);
    carry = "";
    for (let j = 0; j < stringSum.length-1; j++) carry += stringSum[j];
    dec--;
  }
  for (let j = carry.length-1; j >= 0; j--) result.unshift(carry[j]);
  return result.join("").substr(0,10);
};

/*****************************************************************************************************************************/

/*
* The prime factors of 13195 are 5, 7, 13 and 29.
* 
* What is the largest prime factor of the number 600851475143 ?
*/

var primeFactor = function(n) {
  "use strict";
  let bools = [],
      limit = Math.sqrt(n);

  for (let i = 2; i < limit; i++) bools.push(true);

  for (let i = 2; i < limit; i++) {
    if (bools[i] === true) {
      bools[i*i] = false;
      let x = 1;
      while (x < limit) {
        let j = i * i + x * i;
        bools[j] = false;
        x++;
      }
    }
  }
  for (let i = bools.length-1; i >= 0; i--) {
    if (bools[i] === true && n % i === 0) return i;
  }
};

/*****************************************************************************************************************************/

/*
* Surprisingly there are only three numbers that can be written as 
* the sum of fourth powers of their digits:
* 
* 1634 = 1^4 + 6^4 + 3^4 + 4^4
* 8208 = 8^4 + 2^4 + 0^4 + 8^4
* 9474 = 9^4 + 4^4 + 7^4 + 4^4
* As 1 = 14 is not a sum it is not included.
* 
* The sum of these numbers is 1634 + 8208 + 9474 = 19316.
* 
* Find the sum of all the numbers that can be written as the sum of 
* fifth powers of their digits.
*/


const sumDigitPower = power => {
  "use strict";
  let powers = [],
      result = 0,
      range = "1",
      limit = "9";

  for (let i = 0; i <= 9; i++) {
    powers.push(Math.pow(i, power));
  }

  while (power > 1) {
    limit += 9;
    range += 0;
    power--;
  }

  while (range !== limit) {
    let sum = 0;
    for (let i = 0; i < range.length; i++) {
      sum += powers[parseInt(range[i])];
    }
    let str = sum + "",
        bool = true;
    for (let j = 0; j < range.length; j++) {
      if (range[j] !== str[j]) {
        bool = false;
        break;
      }
    }
    if (bool === true) {
      result += sum;
      console.log(sum)
    }
    range = parseInt(range) + 1 + ""; 
  }

  return result;
};

/*
* A perfect number is a number for which the sum of its proper divisors 
* is exactly equal to the number. For example, the sum of the proper 
* divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 
* s a perfect number.
* 
* A number n is called deficient if the sum of its proper divisors is 
* less than n and it is called abundant if this sum exceeds n.
* 
* As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
* the smallest number that can be written as the sum of two abundant 
* numbers is 24. By mathematical analysis, it can be shown that all 
* integers greater than 28123 can be written as the sum of two abundant 
* numbers. However, this upper limit cannot be reduced any further by 
* analysis even though it is known that the greatest number that cannot 
* be expressed as the sum of two abundant numbers is less than this limit.
* 
* Find the sum of all the positive integers which cannot be 
* written as the sum of two abundant numbers.
*/

/*****************************************************************************************************************************/

"use strict";

const perfectNumber = (number) => {
  let num = [],
      sum = 0;
  for (let i = 1; i <= number/2; i += 1) {
    if (number % i === 0) {
      sum += i;
    }
  }

  if (sum === number) {
    return true;
  }

  return false;
};

const findPerfects = (range) => {
  let n = 0,
      result = [];
  while (n <= range) {
    n++
    if (perfectNumber(n)) {
      result.push(n);
    }
  }

  return result;
};

const nonAbundantSums = (limit = 28123) => {
  let result = 0,
      memo = {},

  let perfects = findPerfects(28123);
  
};

/*****************************************************************************************************************************/

/*
* If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
* then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
* 
* If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
* how many letters would be used?
* 
* 
* NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
* contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
* The use of "and" when writing out numbers is in compliance with British usage.
*/

var letterCount = function(integer) {
  "use strict";
  let numbers = {
    "00": "",
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: 'seventeen',
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
    "and": "and"
  },
    words = "",
    count = 0,
    arr = [];

  for (let i = 1; i <= integer; i++) arr.push(i + "");

  for (let i = 0; i < arr.length; i++) {
    if (i <= 20) {
      words += numbers[arr[i]];
    } else {
      if (arr[i].length < 3) {
        for (let j = 0; j < arr[i].length; j++) {
          j === 0 ? words += numbers[arr[i][j] + "0"] : words += numbers[arr[i][j]];
        }
      } else if (arr[i].length < 4) {
        for (let j = 0; j < arr[i].length; j++) {
          if (j === 0 && arr[i][j+1] === "0" && arr[i][j+2] === "0") {
            words += numbers[arr[i][j]] + numbers[100];
          } else if (j === 0) {
            words += numbers[arr[i][j]] + numbers[100] + numbers["and"];
          } else {
            if (j === 1 && arr[i][j] === "1") {
              words += numbers[arr[i][j] + arr[i][j+1]];
              if (parseInt(arr[i][j+1]) <= 9) j++;
            } else if (j === 1) {
              words += numbers[arr[i][j] + "0"];
            } else {
              words += numbers[arr[i][j]];
            }
          }
        }
      } else if (arr[i].length < 5) {
        for (let j = 0; j < arr[i].length; j++) {
          if (j === 0) {
            words += numbers[arr[i][j]] + numbers[1000];
          } else if (j === 1 && arr[i][j] !== "0" && arr[i][j+1] !== "0") {
            words += numbers[arr[i][j]] + numbers[100] + numbers["and"];
          } else if (j === 1 && arr[i][j] !== "0") {
            words += numbers[arr[i][j]] + numbers[100];
          } else {
            if (j === 2 && arr[i][j] === "1") {
              words += numbers[arr[i][j] + arr[i][j+1]];
              if (parseInt(arr[i][j+1]) <= 9) j++;
            } else if (j === 2) {
              words += numbers[arr[i][j] + "0"];
            } else {
              words += numbers[arr[i][j]];
            }
          }
        }
      }
    }
  }
  for (let c = 0; c < words.length; c++) {
    count++;
  }
  return count;
};

/*****************************************************************************************************************************/

/*
* Let d(n) be defined as the sum of proper divisors of n 
* (numbers less than n which divide evenly into n).
* 
* If d(a) = b and d(b) = a, where a ≠ b, then a and b are an 
* amicable pair and each of a and b are called amicable numbers.
* 
* For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
* therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; 
* so d(284) = 220.
* 
* Evaluate the sum of all the amicable numbers under 10000.
*/

var amicableSum = function(integer) {
  "use strict";
  let memo = [];

  let amicablePair = function(integer) {
    let intSum = 0,
        pairSum = 0,
        limit;

    integer % 2 === 0 ? limit = integer / 2 : limit = Math.ceil(integer / 3);

    for (let i = 1; i <= limit; i++) {
      if (integer / i % 1 === 0) intSum += i;
    }

    intSum % 2 === 0 ? limit = intSum / 2 : limit = Math.ceil(intSum / 3);
    
    for (let i = 1; i <= limit; i++) {
      if (intSum / i % 1 === 0) pairSum += i;
    }

    if (pairSum === integer && intSum !== integer) {
      memo[intSum] = true;
      memo[integer] = true; 
    }
  };

  let result = 0;
  while (integer > 1) {
    if (memo[integer] === true) {
      result += integer;
      integer--;
    } else {
      amicablePair(integer);
      if (memo[integer] === true) result += integer;
      integer--;
    }
  }

  return result;
};

/*****************************************************************************************************************************/

/*
* Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:
* 
* 22=4, 23=8, 24=16, 25=32
* 32=9, 33=27, 34=81, 35=243
* 42=16, 43=64, 44=256, 45=1024
* 52=25, 53=125, 54=625, 55=3125
* If they are then placed in numerical order, with any repeats removed, 
* we get the following sequence of 15 distinct terms:
* 
* 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125
* 
* How many distinct terms are in the sequence generated by ab for 
* 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
*/
(function(){
"use strict";

let bigInt = require("./Library/big-integer/BigInteger.js");

const distinctPowers = (lower, upper) => {
  let memo = {},
      count = 0,
      base = lower,
      exp = lower;

  while (base <= upper) {
    while (exp <= upper) {
      let power = bigInt(base).pow(exp);
      if (!memo[power]) {
        memo[power] = true;
        count++; 
      }
      exp++;
    }
    base++;
    exp = lower;
  }

  return count;
};

console.log(distinctPowers(2,100));

})();

/*****************************************************************************************************************************/

/*
* n! means n × (n − 1) × ... × 3 × 2 × 1
* 
* For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
* and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
* 
* Find the sum of the digits in the number 100!
*/

"use strict";
// Use 'Big Integer' library; can be found on GitHub.
let bigInt = require("./Libary/big-integer/BigInteger.js");

let factorial = function(integer) {
  let memo = [0,1];
  let compute = function(integer) {
    let fact;
    if (memo[integer]) {
      return memo[integer];
    } else if (integer < 2) {
      return 1;
    } else {
      fact = bigInt(integer).multiply(compute(integer - 1));
      memo[integer] = fact;
      return fact;
    }
  };
  return compute(integer);
};
let hundred = factorial(100);
let sumDigits = 0;
for (let i = 0; i < hundred.value.length; i++) {
  let temp = hundred.value[i] += "";
  for (let j = 0; j < temp.length; j++) {
    sumDigits += parseInt(temp[j]);    
  }
}
console.log("sum: ", sumDigits);
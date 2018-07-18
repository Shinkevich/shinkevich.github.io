//
Реализуйте тело функции smallestDivisor, используя итеративный процесс. Эта функция должна находить наименьший делитель заданного числа.

Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).
///

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const process = (num, divisor) => {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      if (num % divisor === 0) {
        return divisor;
      } else {
        if (divisor === num)
          return num;
        return process(num, ++divisor);
      }
    }
  }
  return process(num, 2);

  // END
};

export default smallestDivisor;

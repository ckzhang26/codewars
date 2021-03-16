function solution(number){
    const numStr = number.toString();
    const numLength = numStr.length;

    return numStr.split('').map((num, i) => {
        num = +num;
        switch (numLength - 1 - i) {
            case 0:
                if (num === 9) {
                    return 'IX';
                }
                if (num >= 5) {
                    return 'V' + 'I'.repeat(num % 5);
                }
                if (num === 4) {
                    return 'IV';
                }
                else return 'I'.repeat(num);

            case 1:
                if (num === 9) {
                    return 'XC';
                }
                if (num >= 5) {
                    return 'L' + 'X'.repeat(num % 5);
                }
                if (num === 4) {
                    return 'XL';
                }
                else return 'X'.repeat(num);

            case 2: 
                if (num === 9) {
                    return 'CM';
                }
                if (num >= 5) {
                    return 'D' + 'C'.repeat(num % 5);
                }
                if (num === 4) {
                    return 'CD';
                }
                else return 'C'.repeat(num);

            case 3: 
                return 'M'.repeat(num);
        }
    }).join('');
}
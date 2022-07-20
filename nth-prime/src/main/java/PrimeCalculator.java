class PrimeCalculator {

    int nth(int nth) {
        if (nth == 0) throw new IllegalArgumentException();
        int num, count, i;
        num = 1;
        count = 0;

        while (count < nth) {
            num = num + 1;
            for (i = 2; i <= num; i++) {
                if (num % i == 0) {
                    break;
                }
            }
            if (i == num) {
                count = count + 1;
            }
        }
        return num;
    }
}

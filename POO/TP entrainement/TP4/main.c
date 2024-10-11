#include <stdio.h>
#include <stdlib.h>

#include <stdio.h>

int sum_array(int *array, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += array[i];
    }
    return sum;
}

int main() {
    int array[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
    int size = sizeof(array) / sizeof(int);
    int sum = sum_array(array, size);
    printf("La somme des elements du tableau est: %d\n", sum);
}

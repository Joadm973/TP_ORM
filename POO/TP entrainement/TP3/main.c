#include <stdio.h>
#include <stdlib.h>

void swap (int* a, int* b) {
    int tmp = *a;
    *a =*b;
    *b = tmp;
}

int main()
{
    int a = 42;
    int b = 1337;
    swap(&a, &b);
    printf("a=%d\n" ,a);
    printf("b=%d\n" ,b);
}

#include <stdio.h>
#include <stdio.h>

int main() {
    int n, i;
    float note, somme = 0, moyenne;
    printf("Entrez le nombre d'eleves presents : ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        printf("Entrez la note de l'eleve %d : ", i);
        scanf("%f", &note);
        somme += note;
    }
    moyenne = somme / n;
    printf("La note moyenne de la classe est : %.2f", moyenne);
    return 0;
}

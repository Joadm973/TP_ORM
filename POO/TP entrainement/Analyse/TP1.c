#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main() {
    int nb_eleves;
    printf("Entrez le nombre d'éleves présents : ");
    scanf("%d", &nb_eleves);

    float somme_notes = 0;

    for (int i = 0; i < nb_eleves; i++) {
        float note;
        printf("Entrez la note de l'eleve %d : ", i + 1);
        scanf("%f", &note);
        somme_notes += note;
    }

    float moyenne = somme_notes / nb_eleves;
    printf("La note moyenne de la classe est %.2f", moyenne);

    return 0;
}

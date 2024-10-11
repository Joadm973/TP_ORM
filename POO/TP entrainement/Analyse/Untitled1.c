#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main() {
    // Demander le nombre d'�l�ves
    int nb_eleves;
    printf("Entrez le nombre d'�l�ves pr�sents : ");
    scanf("%d", &nb_eleves);

    // Initialiser la somme des notes
    float somme_notes = 0;

    // Demander la note de chaque �l�ve et ajouter � la somme
    for (int i = 0; i < nb_eleves; i++) {
        float note;
        printf("Entrez la note de l'�l�ve %d : ", i + 1);
        scanf("%f", &note);
        somme_notes += note;
    }

    // Calculer la moyenne et l'afficher
    float moyenne = somme_notes / nb_eleves;
    printf("La note moyenne de la classe est %.2f", moyenne);

    return 0;
}

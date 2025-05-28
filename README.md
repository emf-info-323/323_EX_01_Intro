# Module 323 - Exercice 01

## Objectifs

- Résoudre un problème simple à l'aide de concepts de programmation déjà connus par la PEF (boucles, tests, ...).
- Ce travail et cette solution impliqueront forcément plusieurs lignes de code, que la PEF produira petit à petit et qu'au final elle comprendra bien.
- Ce problème sera ensuite résolu à l'aide des outils et concepts de programmation fonctionnelle.
- La comparaison entre les deux solutions devrait démontrer que la solution "programmation fonctionnelle" sera non seulement plus compacte mais bien plus simple à produire et à comprendre.

## Consigne

Commencez par prendre connaissance des fichiers dans le dossier [src/ex01a](src/ex01a). Votre mission, si toutefois vous l'acceptez, sera de coder cette méthode :

```js
function convertirCSVEnObjets(contenuCSV) { ... }
````

>[!WARNING]
>**Le programme devra être purement procédural** ❗  
>Vous n'avez pas le droit d'utiliser des méthodes programmation fonctionnelle ⚠️

L'objet produit doit contenir les empereurs romains, avec uniquement les informations suivantes pour chaque empereur :

- Numéro de l’empereur
- Nom
- Cause de la mort

De plus les empereurs devront :

- être classés dans l’ordre chronologique
- être groupés par dynastie

>[!TIP]
>Vous aurez besoin de la méthode[`split()`](Javascript-Cheat-Sheet/Javascript-Cheat-Sheet.md#split---un-ciseau-qui-coupe-une-chaîne-là-où-un-caractère-apparaît-et-produit-un-tableau) pour réaliser cela. Il faudra "couper" les lignes (`'\n'`) et ensuite les colonnes (`';'`).

Voici ce à quoi votre méthode devrait produire :

```json
{
   "Julio-Claudian": [
      {
         "number": 1,
         "name": "Augustus",
         "deathCause": "Assassination"
      },
      {
         "number": 2,
         "name": "Tiberius",
         "deathCause": "Assassination"
      },
      {
         "number": 3,
         "name": "Caligula",
         "deathCause": "Assassination"
      },
      {
         "number": 4,
         "name": "Claudius",
         "deathCause": "Assassination"
      },
      {
         "number": 5,
         "name": "Nero",
         "deathCause": "Suicide"
      }
   ],
   "Flavian": [
      {
         "number": 6,
         "name": "Galba",
         "deathCause": "Assassination"
      },
      {
         "number": 7,
         "name": "Otho",
         "deathCause": "Suicide"
      },
      {
         "number": 8,
         "name": "Vitellius",
         "deathCause": "Assassination"
      },
      {
         "number": 9,
         "name": "Vespasian",
         "deathCause": "Natural Causes"
      },
      {
         "number": 10,
         "name": "Titus",
         "deathCause": "Natural Causes"
      },
      {
         "number": 11,
         "name": "Domitian",
         "deathCause": "Assassination"
      }
   ],
   "Nerva-Antonine": [
      {
         "number": 12,
         "name": "Nerva",
         "deathCause": "Natural Causes"
      },
      {
         "number": 13,
         "name": "Trajan",
         "deathCause": "Natural Causes"
      },
      {
         "number": 14,
         "name": "Hadrian",
         "deathCause": "Natural Causes"
      },
      {
         "number": 15,
         "name": "Antonius Pius",
         "deathCause": "Natural Causes"
      },
      {
         "number": 16,
         "name": "Marcus Aurelius",
         "deathCause": "Natural Causes"
      },
      {
         "number": 17,
         "name": "Lucius Verus",
         "deathCause": "Natural Causes"
      },
      {
         "number": 18,
         "name": "Commodus",
         "deathCause": "Assassination"
      }
   ],
   "Severan": [
      {
         "number": 19,
         "name": "Pertinax",
         "deathCause": "Assassination"
      },
      {
         "number": 20,
         "name": "Didius Julianus",
         "deathCause": "Execution"
      },
      {
         "number": 21,
         "name": "Septimus Severus",
         "deathCause": "Natural Causes"
      },
      {
         "number": 22,
         "name": "Caracalla",
         "deathCause": "Assassination"
      },
      {
         "number": 23,
         "name": "Geta",
         "deathCause": "Assassination"
      },
      {
         "number": 24,
         "name": "Macrinus",
         "deathCause": "Execution"
      },
      {
         "number": 25,
         "name": "Elagabalus",
         "deathCause": "Assassination"
      },
      {
         "number": 26,
         "name": "Severus Alexander",
         "deathCause": "Assassination"
      }
   ],
   "Gordian": [
      {
         "number": 27,
         "name": "Maximinus I",
         "deathCause": "Assassination"
      },
      {
         "number": 28,
         "name": "Gordian I",
         "deathCause": "Suicide"
      },
      {
         "number": 29,
         "name": "Gordian II",
         "deathCause": "Execution"
      },
      {
         "number": 30,
         "name": "Pupienus",
         "deathCause": "Assassination"
      },
      {
         "number": 31,
         "name": "Balbinus",
         "deathCause": "Assassination"
      },
      {
         "number": 32,
         "name": "Gordian III",
         "deathCause": "Died in Battle"
      },
      {
         "number": 33,
         "name": "Philip I",
         "deathCause": "Execution"
      },
      {
         "number": 34,
         "name": "Trajan Decius",
         "deathCause": "Died in Battle"
      },
      {
         "number": 35,
         "name": "Hostilian",
         "deathCause": "Natural Causes"
      },
      {
         "number": 36,
         "name": "Trebonianus Gallus",
         "deathCause": "Assassination"
      },
      {
         "number": 37,
         "name": "Aemilian",
         "deathCause": "Assassination"
      },
      {
         "number": 38,
         "name": "Valerian",
         "deathCause": "Captivity"
      },
      {
         "number": 39,
         "name": "Gallienus",
         "deathCause": "Assassination"
      },
      {
         "number": 40,
         "name": "Claudius Gothicus",
         "deathCause": "Natural Causes"
      },
      {
         "number": 41,
         "name": "Quintillus",
         "deathCause": "Unknown"
      },
      {
         "number": 42,
         "name": "Aurelian",
         "deathCause": "Assassination"
      },
      {
         "number": 43,
         "name": "Tacitus",
         "deathCause": "Natural Causes"
      },
      {
         "number": 44,
         "name": "Florian",
         "deathCause": "Assassination"
      },
      {
         "number": 45,
         "name": "Probus",
         "deathCause": "Assassination"
      },
      {
         "number": 46,
         "name": "Carus",
         "deathCause": "Natural Causes"
      },
      {
         "number": 47,
         "name": "Numerian",
         "deathCause": "Unknown"
      },
      {
         "number": 48,
         "name": "Carinus",
         "deathCause": "Died in Battle"
      }
   ],
   "Constantinian": [
      {
         "number": 49,
         "name": "Diocletian",
         "deathCause": "Natural Causes"
      },
      {
         "number": 50,
         "name": "Maximian",
         "deathCause": "Suicide"
      },
      {
         "number": 51,
         "name": "Constantius I",
         "deathCause": "Natural Causes"
      },
      {
         "number": 52,
         "name": "Galerius",
         "deathCause": "Natural Causes"
      },
      {
         "number": 53,
         "name": "Severus II",
         "deathCause": "Assassination"
      },
      {
         "number": 54,
         "name": "Constantine the Great",
         "deathCause": "Natural Causes"
      },
      {
         "number": 55,
         "name": "Maxentius",
         "deathCause": "Execution"
      },
      {
         "number": 56,
         "name": "Maximinus II",
         "deathCause": "Execution"
      },
      {
         "number": 57,
         "name": "Lucinius I",
         "deathCause": "Execution"
      },
      {
         "number": 58,
         "name": "Constantine II",
         "deathCause": "Execution"
      },
      {
         "number": 59,
         "name": "Consantius II",
         "deathCause": "Natural Causes"
      },
      {
         "number": 60,
         "name": "Constans",
         "deathCause": "Assassination"
      },
      {
         "number": 61,
         "name": "Vetranio",
         "deathCause": "Unknown"
      },
      {
         "number": 62,
         "name": "Julian",
         "deathCause": "Died in Battle"
      },
      {
         "number": 63,
         "name": "Jovian",
         "deathCause": "Natural Causes"
      }
   ],
   "Valentinian": [
      {
         "number": 64,
         "name": "Valentinian I",
         "deathCause": "Natural Causes"
      },
      {
         "number": 65,
         "name": "Valens",
         "deathCause": "Died in Battle"
      },
      {
         "number": 66,
         "name": "Gratian",
         "deathCause": "Assassination"
      },
      {
         "number": 67,
         "name": "Valentinian II",
         "deathCause": "Suicide"
      }
   ],
   "Theodosian": [
      {
         "number": 68,
         "name": "Theodosius I",
         "deathCause": "Natural Causes"
      }
   ]
}
```

---

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">

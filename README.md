# MITID Assignment

Ce repo est un template à dupliquer pour vous aider à réaliser votre projet pour les cours dww et cwiot. Il sert à documenter l'ensemble de votre processus de travail, prennez le temps de bien lire cette page avant de commencer à travailler. 

Voici la table des matières de cette page 
- [What you need to produce](#what-you-need-to-produce)
- [Submission demo](#submission-demo)
- [How to clone this repo](#clone-this-repo)
- [How to submit]()

# What you need to produce

Pour ce devoir, vous devez réaliser le prototype de votre projet et le documenter dans un repo. Pour rappel, un repo est un espace de stockage pour garder le code de votre projet, conserver des explications de montage et montrer votre projet en fonctionnement. Une fois le travail complété, vous soumettrez le lien vers votre repo. 

| cours | ce qui est attendu | où le documenter dans le repo | 
|---|---|---|
| **cwiot** | [Code of the electronic part](#code)| dans le fichier [arduinoCode.ino↗](your-name/arduinoCode.ino) |
| **cwiot** | [Schematic view](#schematic-view) | dans le fichier [documentation.md↗](your-name/documentation.md) |
| **dww** | [Moodboard](#moodboard) | dans le fichier [documentation.md↗](your-name/documentation.md) |
| **dww** | [UI on figma](#user-flow) | dans le fichier [documentation.md↗](your-name/documentation.md) |
| **dww** | [Code of the web part](#user-flow) | dans le dossier [web-prototype↗](your-name/web-prototype/) |
| **cwiot & dww**| [video demo](#video)| dans le fichier [documentation.md↗](your-name/documentation.md)|


## cwiot part

### Code
Écrivez le code dans l'éditeur arduino, comme pour les exercices précédents. Une fois que le code est fonctionnel, copiez l'ensemble de votre code depuis arduino. Collez le ensuite dans le fichier [arduinoCode.ino↗](your-name/arduinoCode.ino). 

>[!TIP]
>Si vous avez plusieurs fichiers, comme un fichier `config.h`, créez un deuxième fichier dans votre repo. Il vous suffit de faire `right click > new file`. 

>[!WARNING]
>Pensez bien à cacher votre clé API adafruit.\
`#define IO_KEY "aio_SaAN10nJiIl3jGsTI5vMODMjIQ6g" ` devient `#define IO_KEY "XXX"`

Si vous avez fait des changements importants dans votre projet, conserver les versions de votre projet en créant des dossiers:

Example folder structure:
```arduino
cwiot
├── project-v1
│   ├── project-v1.ino
│   └── config.h
│
└── project-v2
    ├── project-v2.ino
    └── config.h
```

### Schematic view

Pour rappel, voici ce qui est attendu pour une schematic view. Vous devez la dessiner vous-même, à la main ou à l'aide d'un logiciel de dessin. L'exemple ci-dessous a été réalisé avec figma. Les schematics view générées "automatiquement" via un logiciel, comme tinkerCAD, ne seront pas évaluées. 

<!-- this a way to add an image an modify its displayed size-->
<picture>
    <img
        src="demo/images/schematic-view.png" 
        alt="schematic view" 
        height="360" 
        width="640" 
    />
</picture>

Pour ajouter votre schematic view dans votre `documentation.md`, il faut ajouter votre image dans le dossier [your-name/images↗](your-name/images/). Une fois l'image présente dans le dossier, il vous suffira de modifier le chemin relatif vers votre image dans le fichier `documentation.md`.

```
<picture>
    <img
        src="images/schematic-view.png"   <- your path will look like this
        alt="schematic view" 
        height="360"     <------------------ match the height of your figma canvas
        width="640"      <------------------ match the width of your figma canvas
    />
</picture>
```

## dww part

### Moodboard
Add an image of your moodboard in your `documentation.md` file.

>[!TIP]
> Suivez les étapes suivantes pour exporter votre moodboard figma au format jpeg (ou png) et l'ajouter à votre repo. 

<picture>
  <img
    src="demo/images/how-to-export-frame.jpg" 
    alt="schematic view" 
    height="360" 
    width="640" />
</picture>

>[!TIP]
>Pour ajouter une image de votre moodboard dans votre `documentation.md`, suivez les informations de la section [schematic view↗](#schematic-view).

### Figma UI
Partagez un lien public vers votre projet figma. Suivez les étapes ci-dessous pour récupérer le lien public vers votre projet.

![share your figma project](demo/images/public-share.jpg)

>[!TIP]
>Pour vous assurer que je pourrais ouvrir le lien, essayez de l'ouvrir dans votre navigateur, dans un onglet de navigation privée. S'il s'ouvre, j'y aurais accès. Si je n'y ai pas accès, je ne pourrais pas évaluer cette partie du travail.

Dans la `documentation.md`, il vous suffit de changer l'url dans la parenthèse: `[figma UI↗](https://figma.com/your-design)`

### Code
Vous devez partager l'intégralité du code de votre interface web. Je vous conseille de travailler directement dans le dossier [web-prototype↗](your-name/web-prototype/). Vos fichiers html, css et javascript doivent se trouver dans ce dossier. 

## cwiot & dww part

### video
You must present your project through a short demonstration video.

The goal of the video is not only to show that your prototype works. You should also explain what you designed, why you designed it, and how the different parts of your project communicate with each other.

Your video should be 1 to 3 minutes long. Il n'y a pas d'attentes sur la longueur de la vidéo, ni sur sa "qualité plastique". Faites simple et communicant. 

You can use the following structure as a guideline.

**Chapitre 1: Context**

- Who you are.
- What your project is about.
- What problem, need, or idea you wanted to explore.
- Why you decided to build this particular prototype.

**Chapitre 2: What did you build?**

Present your prototype in one or two clear sentences.
Try to answer this question:

- *"What does your prototype do?"*

Avoid explaining the technical details at this stage. Focus on the experience and the result.

Example:

>"Our prototype measures the amount of light in a room and uses this information to dynamically change the visual appearance of a website."

Show the complete prototype while you are explaining it.

**Chapter 3: Demonstration**

Show us that it works. This is the most important part of the video. Start from the point of entry: the first action, event, or piece of information that triggers your system. Then show the complete process from beginning to end. You can structure your explanation using:

**INPUT → PROCESSING → OUTPUT**

1. Input → What starts the process?

Explain what your system detects or receives. In the meantime, show the sensor and, if possible, show the value changing.

>"The electronic prototype uses a light sensor to measure the amount of light in the room."


2. Processing → What happens to this information?

Explain what happens to the data between the input and the final result. Show the relevant part of your prototype, interface, or data.

>"The light level is converted into a numerical value and sent over Wi-Fi to an Adafruit IO feed."


3. Output → What is the final result?

Explain what the user finally sees or experiences. Show the result clearly.

> "The website reads the new value from Adafruit IO and changes its color theme according to the amount of light detected."


Whenever possible, demonstrate the complete chain in real time:
**Sensor → Data → Internet → Website → User experience**

**Chapter 5: Conclusion**

What did you achieve? What did you learn? Finish your video with a short conclusion.You can mention:

- What works in your current prototype.
- What you learned during the project.
- Any important limitation.
- What you would improve or develop further.

For example:

>"This prototype allowed us to connect a physical input to a web interface in real time. If we continued developing the project, we would improve the reliability of the sensor and explore more complex interactions between the physical environment and the website."

**:movie_camera: De l'aide pour créer votre vidéo**
Pour cette partie, voici quelques conseils pour vous aider à créer votre vidéo.
 - Installez-vous dans un endroit calme.
 - Filmez avec votre téléphone.
 - Demandez de l'aide au professeur ou à un camarade pour vous aider à filmer ou manipuler le prototype. 
 - Vous pouvez utiliser un outil gratuit pour faire des montages simples, comme le [video editor de canva↗](https://www.canva.com/video-editor/) ou [Kapwing↗](https://www.kapwing.com/studio/editor).

Une fois que vous avez votre vidéo, je vous conseille de l'héberger sur [youtube↗](https://www.youtube.com/) en suivant les étapes ci-dessous, puis de créer un lien depuis votre fichier [documentation.md↗](your-name/documentation.md).

![how to upload a video to youtube](demo/images/youtube-video-update.jpg)

Une fois ce lien récupéré, il ne vous reste plus qu'à modifier votre fichier [documentation.md↗](your-name/documentation.md) en changeant le lien vers la vidéo.

```
link to video: [documentation video↗](https://www.youtube.com/path/to/your/video).
```


# Comment documenter mon travail

Comme avez pu le voir, la plupart de votre travail doit être documenté dans le fichier [documentation.md↗](/your-name/documentation.md). C'est le fichier qui sert de page d'accueil dans un repo github. Ce fichier `documentation.md` est écrit en markdown. C'est un langage utilisé dans de nombreux éditeurs de textes, comme notion par exemple. Vous trouverez un guide de la syntaxe sur github: [Basic writing and formatting syntax↗️](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). Le fichier [documentation.md↗](/your-name/documentation.md) est un template que vous devriez vous appropriez et adapter à votre projet.

Voici les bases de la syntaxe:
```
#Header 1     ⬅️ vous donnera un titre de niveau 1
##Header 2    ⬅️ vous donnera un titre de niveau 2
###Header 3   ⬅️ vous donnera un titre de niveau 3

*Mon texte en gras*         ⬅️ pour mettre un texte en gras
_Mon texte en italique_     ⬅️ pour mettre un texte en italique
`mon bout de code`          ⬅️ pour mettre un texte dans un code

[mon texte](https://mon-lien.com)   ⬅️ pour créer un lien
![My image](link/to/image.png)      ⬅️ pour ajouter une image
<picture>                           ⬅️ version alternative pour décider la width et la height de votre image.
    <img
        src="demo/images/schematic-view.png" 
        alt="schematic view" 
        height="360" 
        width="640" 
    />
</picture>
```

# Submission demo
Vous pouvez retrouver une démo d'un rendu type pour ce devoir. Tout est rangé dans le dossier [demo↗](/demo/), notamment la page  [demo-documentation↗](/demo/demo-documentation.md).

# Clone this repo

Pour vous mettre au travail, vous devez commencer par cloner ce repo.

![clone this repo](demo/images/clone-repo.jpg)

# How to submit 

Suivez ces étapes pour bien soumettre votre travail. Il n'y a rien de sorcier, mais prennez le temps de bien lire toute cette page, puis faites le sur votre ordinateur. Si vous avez un doute, n'hésitez pas à me faire un mp sur slack ou me demander directement au makers'lab. Je me rendrais disponible pour vous aider. 

Un dernier commit. Assurez-vous de bien push la dernière version de votre travail dans votre repo sur github. Je n'ai pas accès au contenu que vous gardez localement. 



**The link to your repository must be submitted on Brightspace, under the Designing with Web course only!**
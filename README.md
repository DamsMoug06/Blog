# Blog Professionnel - Rapport de Stage Game Over VR

## 🎮 À Propos

Ce blog professionnel sert de rapport de stage pour mon expérience chez **Game Over VR**, un salon de réalité virtuelle situé à Villeneuve-Loubet. Il présente mon parcours, mes compétences et les missions que j'ai réalisées durant mon stage.

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React pour le web
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations
- **React** - Bibliothèque JavaScript UI

## 🎨 Design

Le design s'inspire de l'univers du **jeu vidéo** et de la **réalité virtuelle** avec :
- Palette de couleurs cyberpunk (bleu cyan, violet, rose néon)
- Effets lumineux et animations fluides
- Ambiance technologique et moderne
- Interface responsive (PC et mobile)

## 📄 Structure du Site

### Page "À propos" (Accueil)
- Présentation personnelle
- Curriculum Vitae détaillé
- Parcours académique et professionnel
- Compétences techniques
- Lien vers LinkedIn

### Page "Contact"
- Présentation de Game Over VR
- Contexte du stage
- Missions principales
- Présentation des encadrants (Olivier Adam et Julien Margot)

### Articles de Blog
1. **Architecture Réseau** - Conception et mise en place de l'infrastructure réseau
2. **Refonte du Site Web** - Modernisation du site internet de l'entreprise
3. **Ressenti et Intégration** - Ambiance de travail et relation client
4. **Unity & Game Quiz** - Développement d'un quiz interactif en Unity
5. **Bilan de Stage** - Bilan complet de l'expérience

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à tous les formats d'écran :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ✨ Fonctionnalités

- ✅ Navigation fluide avec menu responsive
- ✅ Animations au scroll et au hover
- ✅ Système de blog avec articles détaillés
- ✅ Design moderne inspiré gaming/VR
- ✅ Performance optimisée
- ✅ SEO-friendly
- ✅ Accessibilité

## 📊 Structure des Fichiers

```
Blog/
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx         # Page article individuel
│   │   └── page.tsx             # Liste des articles
│   ├── contact/
│   │   └── page.tsx             # Page Contact
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Page d'accueil (À propos)
├── components/
│   ├── Footer.tsx               # Pied de page
│   ├── Navbar.tsx               # Navigation
│   └── ReactMarkdown.tsx        # Rendu markdown
├── data/
│   └── blogPosts.ts             # Données des articles
├── public/                      # Assets statiques
├── package.json
├── tailwind.config.ts           # Configuration Tailwind
├── tsconfig.json                # Configuration TypeScript
└── README.md
```

## 👨‍💻 Auteur

**Damien Mougenot**
- 🎓 Bachelor Informatique 3ème année
- 🏫 Sophia Ynov Campus
- 💼 Stage chez Game Over VR
- 🔗 [LinkedIn](https://linkedin.com)

## 📝 Licence

Ce projet est à usage personnel dans le cadre d'un rapport de stage académique.

---

Créé avec ❤️ et Next.js

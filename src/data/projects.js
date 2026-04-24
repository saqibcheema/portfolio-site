export const projectsData = [
  {
    id: 1,
    imageUrl: '/assets/vision-diet-tracker.png',
    tag: 'Native Android',
    status: 'done',
    statusLabel: '✓ Completed',
    name: 'VisionDiet Tracker',
    description:
      'Native Android app that uses AI APIs to recognize food from photos and automatically generates nutritional profiles. No manual entry — just point your camera and get your macros. Built with offline-first architecture using Room DB.',
    stack: ['Kotlin', 'Jetpack Compose', 'Room DB', 'AI API', 'MVVM'],
    githubUrl: 'https://github.com/saqibcheema/VisionDiet_Tracker',
  },
  {
    id: 2,
    imageUrl: '/assets/anonymous-chat-app.png',
    tag: 'Flutter',
    status: 'wip',
    statusLabel: '⟳ In Progress',
    name: 'Anonymous Chat App',
    description:
      'Location-based Flutter app where users chat anonymously with people nearby. Features geo-fencing to connect users within a set radius, ephemeral (disappearing) messages, and real-time sync via Firebase. Built for privacy-first UX.',
    stack: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'Geo-fencing'],
    githubUrl: 'https://github.com/saqibcheema/Chat_App_Flutter',
  },
];

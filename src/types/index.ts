export interface Leader {
  name: string;
  role: string;
  message: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'academic' | 'cultural' | 'sports';
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  important: boolean;
}
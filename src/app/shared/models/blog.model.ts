export interface Blog {
  id: number;
  body: string;
  reactions: { dislikes: number, likes: number }
  tags: string[];
  title: string;
  userId: string;
  views: number;
}

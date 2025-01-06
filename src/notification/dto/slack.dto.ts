export class SlackDto {
  event: string;
  createdAt: string;
  model: string;
  uid: string;
  entry: {
    id: number;
    documentId: string;
    projectName: string;
    content: string;
    level: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

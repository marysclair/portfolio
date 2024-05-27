export default interface ProjectType {
  id: string;
  title: string;
  description: string;
  link: string;
  imagePath?: string;
  tags: string[];
  date: string;
}

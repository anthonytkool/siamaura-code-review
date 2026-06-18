import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const journalDir = path.join(process.cwd(), 'content/journal');

export function getAllJournalPosts() {
  const files = fs.readdirSync(journalDir);

  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(journalDir, filename), 'utf-8');
      const { data } = matter(raw);
      return { slug, ...data };
    });
}

export function getJournalPost(slug: string) {
  const filePath = path.join(journalDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { slug, frontmatter: data, content };
}

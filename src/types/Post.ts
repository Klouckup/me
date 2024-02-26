export type PostData = {
  content: string;
  data: {
    date: string;
    title: string;
    thumbnail?: string;
    description: string;
    [key: string]: any;
  };
  filePath: string;
};

export type NextPostPreview = {
  title: string;
  slug: string;
};

import { PostType } from './post';

export interface LayoutProps {
  children: React.ReactNode;
  customMeta?: MetaProps;
}

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}

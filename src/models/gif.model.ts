export interface Gif {
  title: string;
  images: {
    preview_gif: {
      url: string;
    };
    fixed_width_small: {
      url: string;
      height: string;
    };
  };
}

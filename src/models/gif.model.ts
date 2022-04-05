export interface Gif {
  title: string;
  images: {
    downsized_large: {
      url: string;
      height: string;
      width: string;
    };
    preview_gif: {
      url: string;
      height: string;
      width: string;
    };
    fixed_width_small: {
      url: string;
      height: string;
      width: string;
    };
  };
}

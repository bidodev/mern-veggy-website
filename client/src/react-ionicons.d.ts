type IoniconProps = {
  color?: string;
  style?: React.CSSProperties;
  fontSize?: string;
  rotate?: boolean;
  shake?: boolean;
  className?: string;
  beat?: boolean;
  onClick?: (event?: Event) => void;
  children?: React.ReactNode;
};

declare module 'react-ionicons/lib/*' {
  function Icon(props: IoniconProps) {
    return null;
  }

  export = Icon;
}
